import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("https://learni-verse-theta.vercel.app/socket"); //connect to signaling server

export default function Webrtc() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [peerId, setPeerId] = useState(null);
  const localStreamRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !navigator?.mediaDevices) return;

    peerConnection.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localStreamRef.current = stream;
        if (localVideoRef.current) localVideoRef.current.srcObject = stream;
        stream
          .getTracks()
          .forEach((track) => peerConnection.current.addTrack(track, stream));
      })
      .catch((error) => console.error("Error accessing media devices:", error));

    socket.on("offer", async ({ offer, from }) => {
      if (!peerConnection.current.remoteDescription) {
        setPeerId(from);
        await peerConnection.current.setRemoteDescription(
          new RTCSessionDescription(offer)
        );
        const answer = await peerConnection.current.createAnswer();
        await peerConnection.current.setLocalDescription(answer);
        socket.emit("answer", { answer, to: from });
      }
    });

    socket.on("answer", async (answer) => {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    });

    socket.on("ice-candidate", async ({ candidate }) => {
      if (candidate) {
        await peerConnection.current.addIceCandidate(
          new RTCIceCandidate(candidate)
        );
      }
    });

    peerConnection.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", {
          candidate: event.candidate,
          to: peerId,
        });
      }
    };

    return () => {
      if (peerConnection.current) {
        peerConnection.current.close();
        peerConnection.current = null;
      }
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
        localStreamRef.current = null;
      }
      socket.off("ice-candidate");
      socket.off("offer");
      socket.off("answer");
    };
  }, []);

  const startCall = async () => {
    if (!peerConnection.current) {
      console.error("Peer connection is not initialized");
      return;
    }

    setIsCallStarted(true);
    try {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.emit("offer", { offer, from: socket.id }); //sends an offer to connect
    } catch (error) {
      console.error("Error starting call:", error);
    }
  };

  const endCall = () => {
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }
    setIsCallStarted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h2 className="text-2xl font-bold">WebRTC Video Chat</h2>
      <div className="flex gap-4 mt-4">
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          className="w-1/2 border rounded-lg"
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className="w-1/2 border rounded-lg"
        />
      </div>
      {!isCallStarted ? (
        <button
          onClick={startCall}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Start Call
        </button>
      ) : (
        <button
          onClick={endCall}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          End Call
        </button>
      )}
    </div>
  );
}
