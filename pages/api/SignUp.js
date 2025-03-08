import UserModel from "./models/UserModel";
import bcryptjs from "bcryptjs";
import sendEmail from "@/config/sendEmail";
import connectDb from "@/config/connectDb";
import verifyEmailTemplate from "@/utils/verifyEmailTemplate";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed",
            error: true,
            success: false
        });
    }

    try {
        await connectDb();

        if (!req.body) {
            return res.status(400).json({
                message: "Invalid request body",
                error: true,
                success: false
            });
        }

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Provide email, name, and password",
                error: true,
                success: false
            });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered",
                error: true,
                success: false
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const verifyEmailUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/verify-email?code=${savedUser._id}`;

        await sendEmail({
            sendTo: email,
            subject: "Verify your email - LearniVerse",
            html: verifyEmailTemplate({
                name: name,
                url: verifyEmailUrl
            })
        });

        return res.status(201).json({
            message: "User registered successfully. Please verify your email.",
            error: false,
            success: true,
            data: savedUser
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: true,
            success: false
        });
    }
}
