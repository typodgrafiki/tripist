import nodemailer from "nodemailer"

const adressNoReply = process.env.EMAIL_NOREPLY
const passNoReply = process.env.EMAIL_NOREPLY_PASS
const portEmail = process.env.SMTP_SERVER

const transporter = nodemailer.createTransport({
    host: portEmail,
    port: 465,
    secure: true,
    auth: {
        user: adressNoReply,
        pass: passNoReply,
    },
})

export default transporter
