import nodemailer from "nodemailer"

export const sendEmailSignCode = async (code: string, email: string) => {
    try {
        main(code, email).catch(console.error)
        return { message: "Wysłano email", status: 200 }
    } catch (error) {
        return { message: "Nie udało się wysłać email", status: 400 }
    }
}
const transporter = nodemailer.createTransport({
    host: "poczta.o2.pl",
    port: 465,
    secure: true,
    auth: {
        user: "on024@o2.pl",
        pass: "d428#zCiS4K#",
    },
})

async function main(code: string, email: string) {
    const info = await transporter.sendMail({
        from: '"Tripist" <on024@o2.pl>',
        to: email,
        subject: `${code} - Potwierdź rejestrację`,
        text: "Hello world?",
        html: `<p>Super, twój kod to:</p><p><b>${code}</b></p>`,
    })
}
