import { PrismaClient } from "@prisma/client"

export default function Prisma() {
    const prisma = new PrismaClient()

    return prisma

    // async function main() {
    //     // ...
    // }

    // main()
    //     .then(async () => {
    //         await prisma.$disconnect()
    //     })
    //     .catch(async (e) => {
    //         console.error(e)
    //         await prisma.$disconnect()
    //         process.exit(1)
    //     })

    // return <>PrismaTest</>
}
