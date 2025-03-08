import jwt from "jsonwebtoken";


export const generatedAccessToken = (userId) => {
    if (!process.env.SECRET_KEY_ACCESS_TOKEN) {
        throw new Error("SECRET_KEY_ACCESS_TOKEN is not defined in .env file");
    }

    return jwt.sign(
        { id: userId },
        process.env.SECRET_KEY_ACCESS_TOKEN,
        { expiresIn: "5h" }
    );
};
