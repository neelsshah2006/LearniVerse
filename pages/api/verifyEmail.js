import UserModel from "./models/UserModel";
import connectDb from "@/config/connectDb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
      error: true,
      success: false,
    });
  }

  const { code } = req.query; 

  if (!code) {
    return res.status(400).json({
      message: "Invalid verification code",
      error: true,
      success: false,
    });
  }

  try {
    await connectDb();

   
    const user = await UserModel.findById(code);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

  
    if (user.verify_email) {
      return res.status(400).json({
        message: "Email already verified",
        error: true,
        success: false,
      });
    }

   
    user.verify_email = true;
    await user.save();

    return res.status(200).json({
      message: "Email verified successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

