import transporter from "./config"

const adressNoReply = process.env.EMAIL_NOREPLY

export const sendEmailSignCode = async (code: string, email: string) => {
    try {
        main(code, email).catch(console.error)
        return { message: "Wysłano email", status: 200 }
    } catch (error) {
        return { message: "Nie udało się wysłać email", status: 400 }
    }
}

async function main(code: string, email: string) {
    const info = await transporter.sendMail({
        from: `"Tripist" <${adressNoReply}>`,
        to: email,
        subject: `${code} - Potwierdź rejestrację`,
        text: `
            Twój kod potwierdzający e-mail
            Skopiuj ten kod i wprowadź go na stronie potwierdzenia, aby zweryfikować swój adres e-mail.
            Kod: ${code} - jest ważny tylko przez 10 minut. Jeśli to nie Ty prosiłeś o tego e-maila, zignoruj go.
        `,
        html: `
            <html lang="pl">
                <body>
                    <table style="width: 100%; font-family: 'Arial', sans-serif; font-size: 14px; line-height: 140%; background-color: #f4f5f9; height: 100%; border-radius: 5px;">
                        <tr>
                        <td style="padding: 3% 4%;">
                                <table style="width: 100%; background-color: #467bf0; color: #fff; margin-bottom: 20px;">
                                    <tr>
                                        <td style="padding: 10px 20px;">
                                            <a href="https://tripist.pl" style="text-decoration: none; color: inherit;">
                                                <strong>Tripist</strong>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                <table style="width: 100%; color: #494949;">
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            Twój kod potwierdzający e-mail.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            Skopiuj ten kod i wprowadź go na stronie potwierdzenia, aby zweryfikować swój adres e-mail.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            <strong style="font-size: 2rem; color: #305fc8;">${code}</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            Kod potwierdzający jest ważny tylko przez 10 minut. Jeśli to nie Ty prosiłeś o tego e-maila, zignoruj go.
                                        </td>
                                    </tr>
                                </table>
                                <table style="margin-top: 30px; color: #494949;">
                                    <tr>
                                        <td>
                                            Tripist Team
                                        </td>
                                    </tr>
                                </table>
                            </td>    
                        </tr>
                    </table>
                </body>
            </html>
        `,
    })
}
