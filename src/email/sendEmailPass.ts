import axios from "axios"

export const sendEmailSignPass = async (token: string, email: string) => {
    const endpointUrl =
        "http://31d6cfe0d16ae931.tripist.typodgra.webd.pro/pass/index.php"
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
        return null
        // {
        //     message: "Nie udało się wysłać email",
        //     status: error.response?.status || 500,
        // }
    }
}
