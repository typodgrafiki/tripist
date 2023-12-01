const adressNoReply = process.env.EMAIL_NOREPLY
const baseUrl = process.env.BASE_URL

import axios from "axios"

export const sendEmailSignCode = async (code: string, email: string) => {
    const endpointUrl =
        "http://31d6cfe0d16ae931.tripist.typodgra.webd.pro/code.php"

    try {
        // Wyślij zapytanie POST do endpointu z odpowiednimi danymi
        const response = await axios.post(endpointUrl, { code, email })

        console.log("wysłano email")
        return { message: "Wysłano email", status: response.status }
    } catch (error: any) {
        console.log("nie wysłano email")
        console.error(error)

        // Zwróć odpowiednią wiadomość o błędzie i status HTTP
        return {
            message: "Nie udało się wysłać email",
            status: error.response?.status || 500,
        }
    }
}
