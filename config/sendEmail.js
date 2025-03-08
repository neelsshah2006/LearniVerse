// import { Resend } from "resend";

// if (!process.env.RESEND_API) {
//     throw new Error("RESEND_API is not defined in .env file");
// }

// const resend = new Resend(process.env.RESEND_API);

// const sendEmail = async ({ sendTo, subject, html }) => {
//     try {
//         const { data, error } = await resend.emails.send({
//             from: "LearniVerse <noreplyonboarding@resend.dev>",
//             to: sendTo,
//             subject,
//             html,   
//         });

//         if (error) {
//             console.error("Email sending error:", error);
//             console.log(process.env.RESEND_API);
//             return null;
//         }
//         return data;
//     }  catch (error) {
//         console.error("Unexpected error:", error);
//         return null;
//     }
// };

// export default sendEmail;
