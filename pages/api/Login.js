import UserModel from "./models/UserModel";
import bcryptjs from "bcryptjs";
import { generatedAccessToken } from "@/utils/generatedAccessToken";
import { generatedRefreshToken } from "@/utils/generatedRefreshToken";
import connectDb from "@/config/connectDb";
import * as cookie from "cookie"; 

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

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Provide email and password",
                error: true,
                success: false
            });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not registered",
                error: true,
                success: false
            });
        }


        const checkPassword = await bcryptjs.compare(password, user.password);

        if (!checkPassword) {
            return res.status(400).json({
                message: "Check your password",
                error: true,
                success: false
            });
        }

        const accessToken = await generatedAccessToken(user._id);
        const refreshToken = await generatedRefreshToken(user._id);


        res.setHeader("Set-Cookie", [
            cookie.serialize("accessToken", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Lax",
                path: "/",
                maxAge: 5 * 60 * 60, // 5 hours
            }),
            cookie.serialize("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Lax",
                path: "/",
                maxAge: 7 * 24 * 60 * 60, // 7 days
            }),
        ]);
        

        return res.json({
            message: "Login successful",
            error: false,
            success: true,
            data: {
                accessToken,
                refreshToken
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}
