// npx prisma db seed

import { PrismaClient } from "@prisma/client"
import { deleteUsers } from "./deleteAllUsers"

const prisma = new PrismaClient()

async function deleteTemplates() {
    // delete template categories
    await prisma.templateCategory.deleteMany({
        where: {},
    })

    // delete template items
    await prisma.templateItem.deleteMany({
        where: {},
    })

    // delete template lists
    await prisma.template.deleteMany({
        where: {},
    })

    // delete template tags
    await prisma.listTags.deleteMany({
        where: {},
    })

    // delete template types
    await prisma.listType.deleteMany({
        where: {},
    })
}

deleteUsers()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

deleteTemplates()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
