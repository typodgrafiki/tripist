import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteMyUsers() {
    // Zdefiniuj trzy konkretne adresy e-mail, które chcesz usunąć
    const targetEmails = ['on024@go2.pl', 'on026@go2.pl', 'on024@o2.pl', 'on026@o2.pl', 'on024@tlen.pl', 'on026@tlen.pl'];

    // Pobierz dane użytkowników o określonych adresach e-mail
    const usersToDelete = await prisma.user.findMany({
        where: {
            email: {
                in: targetEmails,
            },
        },
        include: {
            lists: {
                include: {
                    elements: {
                        include: {
                            categories: true,
                        },
                    },
                },
            },
            changeLogs: true,
            sessions: true,
            signUpCode: true,
            remindPass: true,
        },
    });

    // Usuń związane elementy w odwrotnej kolejności
    for (const user of usersToDelete) {
        // Usuń kategorie przypisane do elementów
        for (const list of user.lists) {
            for (const element of list.elements) {
                await prisma.category.deleteMany({
                    where: {
                        id: {
                            in: element.categories.map((category) => category.id),
                        },
                    },
                });
            }
        }

        // Usuń elementy przypisane do list
        for (const list of user.lists) {
            await prisma.listItem.deleteMany({
                where: {
                    listId: list.id,
                },
            });
        }

        // Usuń listy
        await prisma.list.deleteMany({
            where: {
                userId: user.id,
            },
        });

        // Usuń changelog
        await prisma.changeLog.deleteMany({
            where: {
                userId: user.id,
            },
        });

        // Usuń sesje
        await prisma.session.deleteMany({
            where: {
                userId: user.id,
            },
        });

        // Usuń signUpCode
        if (user.signUpCode) {
            await prisma.signUpCodes.deleteMany({
                where: {
                    id: user.signUpCode.id,
                },
            });
        }

        // Usuń remindPass
        if (user.remindPass) {
            await prisma.userRemindPassword.deleteMany({
                where: {
                    id: user.remindPass.id,
                },
            });
        }

        // Usuń użytkownika
        await prisma.user.deleteMany({
            where: {
                id: user.id,
            },
        });
    }
}

deleteMyUsers()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
