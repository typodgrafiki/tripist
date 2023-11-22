import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Utworzenie użytkownika
    const user = await prisma.user.create({
        data: {
            id: "user_2WOhzyozYDSlvch9sTqAEcFFxXu",
            name: "John",
            surname: "Doe",
            email: "on024@go2.pl",
            password: "123",
            preferences: ["dark_mode"],
        },
    })

    // Create categories
    const category1 = await prisma.category.create({
        data: {
            name: "Apteczka",
            userId: user.id,
        },
    })

    const category2 = await prisma.category.create({
        data: {
            name: "Ogólne",
            userId: user.id,
        },
    })

    // Utworzenie 10 list dla użytkownika
    for (let i = 0; i < 10; i++) {
        const list = await prisma.list.create({
            data: {
                id: `alist_xyz_${i + 1}`,
                name: `List ${i + 1}`,
                userId: user.id,
                url: `00list_xyz_${i + 1}`,
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
                    categories: {
                        connect: [{ id: category1.id }, { id: category2.id }],
                    },
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
