import { PrismaClient } from "@prisma/client"
import { otherType } from "./other/otherType"
import { trainingType } from "./training/trainingType"
import { activeBieg } from "./active/bieg"
import { activeJoga } from "./active/joga"
import { activeNurkowanie } from "./active/nurkowanie"
import { activeRower } from "./active/rower"
import { activeSurvival } from "./active/survival"
import { activeWindsurfing } from "./active/windserfing"
import { activeWspinaczka } from "./active/wspinaczka"
import { activeZeglarstwo } from "./active/zeglarstwo"
import { summerAllInclusive } from "./summer/allinclusive"
import { summerCampervan } from "./summer/camperVan"
import { summerCamping } from "./summer/campingRodzinny"
import { summerCitybreak } from "./summer/cityBreak"
import { summerEgipt } from "./summer/egipt"
import { summerMazury } from "./summer/mazury"
import { summerMorze } from "./summer/morze"
import { summerSafari } from "./summer/safari"
import { summerTrekking } from "./summer/trekking"
import { summerTropikalnaWyspa } from "./summer/tropikalnaWyspa"
import { winterCitybreak } from "./winter/citybreak"
import { winterNarty } from "./winter/narty"
import { winterSnowboard } from "./winter/snowboard"
import { winterTrekking } from "./winter/trekking"
import { sampleLists } from "./sampleLists"

const prisma = new PrismaClient()

const functionsToExecute = [
    // Summer
    summerAllInclusive,
    summerMorze,
    summerMazury,
    summerCampervan,
    summerCamping,
    summerCitybreak,
    summerEgipt,
    summerSafari,
    summerTropikalnaWyspa,
    summerTrekking,

    // Winter
    winterCitybreak,
    winterNarty,
    winterSnowboard,
    winterTrekking,

    // Active
    activeBieg,
    activeRower,
    activeWspinaczka,
    activeJoga,
    activeWindsurfing,
    activeNurkowanie,
    activeZeglarstwo,
    activeSurvival,

    // Training
    trainingType,

    // Other
    otherType,

    // Sample
    sampleLists,
]

async function executeFunctions() {
    for (const func of functionsToExecute) {
        try {
            await func()
        } catch (e) {
            throw e
        }
    }
    await prisma.$disconnect()
}

executeFunctions()
