import Webrtc from "@/components/Webrtc";
import React from "react";
import Socket from "@/components/Socket";

const socket = () => {
  return (
    <div>
      <Webrtc />
      <Socket />
    </div>
  );
};

export default socket;
