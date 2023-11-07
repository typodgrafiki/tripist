/**
 *
 * Cofnięcie zmian (usunięcia elementu) POST
 *
 */

// async function undoLastChange(userId: string, elementId: number) {
//     const lastChange = await prisma.changeLog.findFirst({
//         where: { userId: userId },
//         orderBy: { createdAt: "desc" },
//     })

//     if (!lastChange) {
//         throw new Error("No changes to undo.")
//     }

//     const delatedItem: ListItemUncheckedCreateInput =
//         lastChange && lastChange.previousData
//             ? JSON.parse(lastChange.previousData.toString())
//             : {}

//     switch (lastChange.entityType) {
//         case "LISTITEM":
//             if (lastChange.action === "DELETE") {
//                 // Przywróć usunięty ListItem
//                 await prisma.listItem.create({
//                     data: delatedItem,
//                 })
//             }
//             // Możesz dodać obsługę dla innych akcji, np. "UPDATE"
//             break

//         // Podobne przypadki dla "LIST" i "CATEGORY"

//         default:
//             throw new Error("Unknown entity type.")
//     }

//     // Usuń wpis z ChangeLog po przywróceniu zmiany
//     await prisma.changeLog.delete({ where: { id: lastChange.id } })
// }
