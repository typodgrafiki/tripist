import { Categories } from "@/context/AppContext"

type TCreateElementsProps = {
    name: string
    categories: Categories[] | []
}

const createListAction = async (
    name: string,
    duplicate?: TCreateElementsProps[]
) => {
    const query = duplicate ? { name, duplicate } : { name }

    if (!name) {
        throw "Nie uzupełniono nazwy"
    }

    const response = await fetch(`/api/lists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    })

    const data = await response.json()
    const result = data.body

    return result
}

export default createListAction
