import { TFeedback } from "@/types/types"
import axios from "axios"

const urlApi = process.env.URL_MAIL_API

export const sendEmailFeedback = async (data: TFeedback) => {
    const endpointUrl = `${urlApi}/feedback/index.php`

    try {
        const response = await axios.post(endpointUrl, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        return { message: "Wysłano email", status: response.status }
    } catch (error: any) {
        return null
        // {
        //     message: "Nie udało się wysłać email",
        //     status: error.response?.status || 500,
        // }
    }
}
