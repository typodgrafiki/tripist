// npx prisma db seed

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // delete categories
    await prisma.category.deleteMany({
        where: {},
    })

    // delete changelog
    await prisma.changeLog.deleteMany({
        where: {},
    })

    // delete items
    await prisma.listItem.deleteMany({
        where: {},
    })

    // delete lists
    await prisma.list.deleteMany({
        where: {},
    })

    // delete userSign
    await prisma.userRemindPassword.deleteMany({
        where: {},
    })

    // delete sessions
    await prisma.session.deleteMany({
        where: {},
    })

    // delete signUpCodes
    await prisma.signUpCodes.deleteMany({
        where: {},
    })

    // delete users
    await prisma.user.deleteMany({
        where: {},
    })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
