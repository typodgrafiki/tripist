import axios from "axios"

export const sendEmailSignCode = async (code: string, email: string) => {
    const endpointUrl = "http://31d6cfe0d16ae931.tripist.typodgra.webd.pro/code"
    const data = {
        email: email,
        code: code,
    }

    try {
        console.log("---1")
        const response = await axios.post(endpointUrl, JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log("-Headers")
        console.log(response.headers)
        console.log("-Data")
        console.log(response.data)
        return { message: "Wysłano email", status: response.status }
    } catch (error: any) {
        return {
            message: "Nie udało się wysłać email",
            status: error.response?.status || 500,
        }
    }
}
