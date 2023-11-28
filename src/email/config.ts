import nodemailer from "nodemailer"

const adressNoReply = process.env.EMAIL_NOREPLY
const passNoReply = process.env.EMAIL_NOREPLY_PASS
const portEmail = process.env.SMTP_SERVER

const transporter = nodemailer.createTransport({
    host: "wn03.webd.pl",
    port: 465,
    secure: true,
    auth: {
        user: "noreply@tripist.pl",
        pass: "wPEU632ZfPkf#E",
    },
})

export default transporter
