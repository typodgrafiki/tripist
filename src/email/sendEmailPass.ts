import transporter from "./config"

const adressNoReply = process.env.EMAIL_NOREPLY
const baseUrl = process.env.BASE_URL

export const sendEmailSignPass = async (
    token: string,
    email: string,
    userId: string
) => {
    try {
        main(token, email).catch(console.error)
        return { message: "Wysłano email", status: 200 }
    } catch (error) {
        return { message: "Nie udało się wysłać email", status: 400 }
    }
}

async function main(token: string, email: string) {
    const info = await transporter.sendMail({
        from: `"Tripist" <${adressNoReply}>`,
        to: email,
        subject: `Przypomnienie hasła`,
        text: `
            Otrzymujesz ten e-mail, ponieważ poprosiłeś o przypomnienie hasła.
            Przejdź na stronę aby zresetować hasło: https://tripist.pl/reset-password?token=${token}&email=${email}
            Link jest ważny tylko przez 1 godzinę. Jeśli to nie Ty prosiłeś o to przypomnienie, zignoruj tę wiadomość.
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
                                            <a href="${baseUrl}" style="text-decoration: none; color: inherit;">
                                                <strong>Tripist</strong>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                <table style="width: 100%; color: #494949;">
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            Otrzymujesz ten e-mail, ponieważ poprosiłeś o przypomnienie hasła.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            Kliknij poniższy link, aby zresetować hasło:
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            <a href="${baseUrl}/reset-password?token=${token}&email=${email}" style="color: #305fc8;">Resetuj Hasło</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px 0;">
                                            Link jest ważny tylko przez 10 minut. Jeśli to nie Ty prosiłeś o to przypomnienie, zignoruj tę wiadomość.
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
