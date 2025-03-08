import jwt from "jsonwebtoken";
import UserModel from "@/pages/api/models/UserModel";

export const generatedRefreshToken = async (userId) => {
    if (!process.env.SECRET_KEY_REFRESH_TOKEN) {
        throw new Error("SECRET_KEY_REFRESH_TOKEN is not defined in .env file");
    }

 
    const token = jwt.sign(
        { id: userId },
        process.env.SECRET_KEY_REFRESH_TOKEN,
        { expiresIn: "7d" }
    );

 
    await UserModel.updateOne({ _id: userId }, { refresh_token: token });

    return token;
};
//