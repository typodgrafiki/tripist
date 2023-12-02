import axios from "axios"

const urlApi = process.env.URL_MAIL_API

export const sendEmailSignPass = async (token: string, email: string) => {
    const endpointUrl = `${urlApi}/pass/index.php`
    const data = {
        email: email,
        token: token,
    }

    try {
        const response = await axios.post(endpointUrl, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        return { message: "Wysłano email", status: response.status }
    } catch (error: any) {
        console.log(error)
        return null
        // {
        //     message: "Nie udało się wysłać email",
        //     status: error.response?.status || 500,
        // }
    }
}
