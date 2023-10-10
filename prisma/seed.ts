import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

async function main() {
    // Utworzenie użytkownika
    const user = await prisma.user.create({
        data: {
            id: uuidv4(),
            name: "John",
            surname: "Doe",
            email: "john.doe@example.com",
            // ... inne pola, jeśli są wymagane
        },
    })

    // Utworzenie 10 list dla użytkownika
    for (let i = 0; i < 10; i++) {
        const list = await prisma.list.create({
            data: {
                id: uuidv4(),
                name: `List ${i + 1}`,
                userId: user.id,
                // ... inne pola, jeśli są wymagane
            },
        })

        // Utworzenie od 5 do 40 elementów dla każdej listy
        const numItems = Math.floor(Math.random() * 36) + 5 // Losowo od 5 do 40
        for (let j = 0; j < numItems; j++) {
            await prisma.listItem.create({
                data: {
                    name: `Item ${j + 1}`,
                    status: Math.random() > 0.5, // Losowy status
                    listId: list.id,
                    // ... inne pola, jeśli są wymagane
                },
            })
        }
    }
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
