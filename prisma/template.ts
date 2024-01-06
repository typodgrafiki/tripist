let odziez
let akcesoria
let apteczka
let lazienkaHigiena
let kosmetyczka
let elektronika
let samochod
let inne
let jedzenie
let kuchnia
let jezioro
let plaza
let trekking
let dokumenty
let biznes
let sport
let sprzetSportowy
let odziezSportowa
let bieganie
let silownia
let morsowanie
let basen
let joga
let sciankaWspinaczkowa
let crossfit
let kajak
let sztukiWalki
let obuwie
let miasto
let zima
let zeglarstwo
let survival
let wspinaczka
let allInclusive
let windsurfing
let tropikalnaWyspa
let safari
let egipt
let nurkowanie
let rower
let narty
let snowboard
let mazury
let campervan
let kemping
let niemowle
let zdrowie
let zabawki



const test = [

// Podstawa


// Odzież
{
    name: "Koszulki",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Spodenki krótkie",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Spodenki dresowe",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Długie spodnie dżinsowe",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Zwykła bluza",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Sweter",
    categories: { connect: [{ id: odziez }, { id: citybreak_zima }] },
},
{
    name: "Piżama",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Skarpety",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Skarpety niskie białe",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Skarpety wysokie kolorowe",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Bielizna (majtki)",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Czapka z daszkiem lub kapelusz",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Czapka z daszkiem",
    categories: { connect: [{ id: odziez }, { id: zeglarstwo }] },
},
{
    name: "Kapelusz",
    categories: { connect: [{ id: odziez }, { id: joga }] },
},
{
    name: "Chusta na głowę",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Buty na zmianę",
    categories: { connect: [{ id: odziez }] },
},




// Odzież zima
{
    name: "Kurtka",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Kurtka puchowa",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Rękawiczki",
    categories: { connect: [{ id: odziez }, { id: survival }, { id: citybreak_zima }] },
},
{
    name: "Czapka zimowa",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Rajstopy / kalesony",
    categories: { connect: [{ id: odziez }] },
},
{
    name: "Szalik",
    categories: { connect: [{ id: odziez }, { id: survival }, { id: citybreak_zima }] },
},




// Citybreak
{
    name: "Odzież elegancka na wieczór",
    categories: { connect: [{ id: odziez }, {id: citybreak}, {id: allinclusive}] },
},
{
    name: "Buty wygodne na spacery",
    categories: { connect: [{ id: odziez }, {id: citybreak}] },
},





// All-inclusive
{
    name: "Strój kąpielowy",
    categories: { connect: [{ id: plaza }, {id: sport}, {id: plywanie}, {id: allinclusive}, { id: windsurfing }] },
},
{
    name: "Okulary pływackie",
    categories: { connect: [{ id: sport }, {id: plywanie}, {id: allinclusive}] },
},                        
{
    name: "Klapki basenowe",
    categories: { connect: [{ id: sport }, {id: plywanie}, {id: allinclusive}] },
},
{
    name: "Adapter do gniazdka",
    categories: { connect: [{id: elektronika}, {id: allinclusive}] },
},
{
    name: "Przenośny wentylator",
    categories: { connect: [{id: elektronika}, {id: allinclusive}] },
},
{
    name: "Dmuchany materac lub koło",
    categories: { connect: [{ id: allinclusive }, { id: plaza}] },
},
{
    name: "Przewodnik po okolicy",
    categories: { connect: [{ id: allinclusive }] },
},
{
    name: "Zabezpieczenie bagażu",
    categories: { connect: [{ id: allinclusive }, { id: tropikalnawyspa }, { id: egipt }] },
},





// Tropikalna wyspa
{
    name: "Lekkie, przewiewne ubrania",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Lekkie buty trekkingowe",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Sandały, klapki, buty do wody",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Sprzęt do snorkelingu - maska, rurka, płetwy",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Plecak na wycieczki",
    categories: { connect: [{ id: tropikalnaWyspa }, { id: safari }] },
},
{
    name: "Mapa lokalna lub przewodnik",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Przewodnik turystyczny lub e-book",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},
{
    name: "Adapter do gniazdka elektrycznego",
    categories: { connect: [{ id: tropikalnaWyspa }] },
},






// Afryka / Egipt
{
    name: "Lekkie i przewiewne ubrania",
    categories: { connect: [{ id: egipt }] },
},
{
    name: "Lekkie ubrania z długimi rękawami i nogawkami",
    categories: { connect: [{ id: egipt }] },
},
{
    name: "Sandały",
    categories: { connect: [{ id: egipt }] },
},
// + Sprzęt do nurkowania
// + Safari







// Safari
{
    name: "Przewiewne ubrania w kolorach neutralnych",
    categories: { connect: [{ id: safari }] },
},
{
    name: "Obuwie trekkingowe",
    categories: { connect: [{ id: safari }] },
},
{
    name: "Kapelusz z szerokim rondem",
    categories: { connect: [{ id: safari }] },
},
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: safari }, { id: akcesoria }, { id: rower }, { id: zeglarstwo }] },
},
{
    name: "Lornetka",
    categories: { connect: [{ id: safari }, { id: zeglarstwo }] },
},
{
    name: "Plecak na wycieczki",
    categories: { connect: [{ id: safari }] },
},
{
    name: "Butelka na wodę",
    categories: { connect: [{ id: safari }, { id: joga }, { id: survival }] },
},
{
    name: "Przewodnik po dzikiej przyrodzie",
    categories: { connect: [{ id: safari }] },
},
{
    name: "Aparat fotograficzny z zoomem",
    categories: { connect: [{ id: safari }] },
},







// Plaża
{
    name: "Koc/Mata na plażę",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Leżak",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Krem z filtrem UV",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Strój kąpielowy",
    categories: { connect: [{ id: plaza }, {id: sport}, {id: plywanie}] },
},
{
    name: "Sandały/klapki plażowe",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Torba plażowa",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Balsam po opalaniu",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Parasol plażowy",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Parawan lub namiot plażowy",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Sprzęt do nurkowania (maska, rurka)",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Wodoodporny aparat fotograficzny",
    categories: { connect: [{ id: plaza }, { id: nurkowanie }] },
},
{
    name: "Piłka plażowa",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Buty do wody",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Chłodna torba",
    categories: { connect: [{ id: plaza }] },
},
{
    name: "Dmuchany materac lub koło",
    categories: { connect: [{ id: plaza }, { id: allinclusive }] },
},





// Trekking lato
{
    name: "Bielizna termoaktywna",
    categories: { connect: [{ id: sport }, { id: trekking }] },
},
{
    name: "Spodnie długie trekkingowe",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Kamizelka trekkingowa",
    categories: { connect: [{ id: trekking } ] },
},
{
    name: "Bluza trekkingowa",
    categories: { connect: [{ id: trekking } ] },
},
{
    name: "Kurtka trekkingowa",
    categories: { connect: [{ id: trekking } ] },
},
{
    name: "Kurtka softshell",
    categories: { connect: [{ id: trekking } ] },
},
{
    name: "Buty trekkingowe",
    categories: { connect: [{ id: trekking }, { id: survival }] },
},
{
    name: "Czołówka",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Baterie do czołówki",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Kijki trekkingowe",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Mapa lub przewodnik",
    categories: { connect: [{ id: trekking }, {id: inne}] },
},
{
    name: "Plecak trekkingowy",
    categories: { connect: [{ id: trekking }] },
},


// Trekking + zima
{
    name: "Raki",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Raczki",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Stuptuty",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Rękawice grube 2x",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Rękawice cienkie 2x",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Gogle narciarskie",
    categories: { connect: [{ id: trekking }, { id: narty }] },
},
{
    name: "Czapka zimowa gruba",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Czapka zimowa cienka",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Komin polarowy (na szyję)",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Tłusty krem do twarzy",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Kurtka puchowa (opcjonalnie)",
    categories: { connect: [{ id: trekking }] },
},
{
    name: "Termos z ciepłą herbatą",
    categories: { connect: [{ id: trekking }, {id: sport}] },
},



// Jezioro
{
    name: "SUP",
    categories: { connect: [{ id: jezioro }]},
},
{
    name: "Wiosło",
    categories: { connect: [{ id: jezioro }]},
},
{
    name: "Klapki",
    categories: { connect: [{ id: lazienka }]},
},
{
    name: "Recznik",
    categories: { connect: [{ id: lazienka }]},
},
{
    name: "Butelka z wodą",
    categories: { connect: [{ id: sport }]},
},
{
    name: "Pływający pojemnik na klucze i telefon",
    categories: { connect: [{ id: jezioro }]},
},




// Mazury
{
    name: "Ciepłe ubrania na wieczór",
    categories: { connect: [{ id: jezioro }, {id: mazury}]},
},
{
    name: "Przeciwdeszczowa odzież",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Strój kąpielowy",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Plecak na wycieczki",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Latarka lub czołówka",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Termos lub bidon",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Sprzęt do pływania",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Sprzęt wędkarski",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Rowery",
    categories: { connect: [{id: mazury}]},
},
{
    name: "Kijki do nordic walking",
    categories: { connect: [{id: mazury}]},
},










// Dokumenty
{
    name: "Gotówka",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Dokumenty",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Ubezpieczenie podróżne",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Dowód osobisty",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Prawo jazdy",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Paszport",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Wiza",
    categories: { connect: [{ id: dokumenty }]},
},
{
    name: "Kopie ważnych dokumentów",
    categories: { connect: [{ id: dokumenty }, {id: biznes}] },
},
{
    name: "Bilety lotnicze",
    categories: { connect: [{ id: dokumenty }, {id: biznes}] },
},
{
    name: "Potwierdzenia rezerwacji",
    categories: { connect: [{ id: dokumenty }, {id: biznes}] },
},




// Elektronika
{
    name: "Aparat fotograficzny",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Dodatkowa karta do aparatu (opcjonalnie)",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Dodatkowa bateria do aparatu (opcjonalnie)",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Ładowarka do telefonu + kabel",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Powerbank + kabel",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Gimball + ładowarka + kabel",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Słuchawki",
    categories: { connect: [{ id: elektronika }, {id: joga}]},
},
{
    name: "Głośnik przenośny (bezprzewodowy)",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Czołówka (latarka)",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Baterie do czołówki",
    categories: { connect: [{ id: elektronika }]},
},
{
    name: "Książka / Czytnik typu Kindle",
    categories: { connect: [{ id: elektronika }]},
},






// Apteczka
{
    name: "Leki",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki przeciwbólowe",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki na biegunkę",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki na ból brzucha",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Plastry opatrunkowe",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Żel antybakteryjny",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Tabletki na alergie",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Środek na komary i kleszcze",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Bandaż",
    categories: {connect: [{ id: apteczka }]},
},
{
    name: "Nożyczki",
    categories: {connect: [{ id: apteczka }]},
},





// Van Kuchnia
{
    name: "Cebula",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Olej",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Sól",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Korkociąg",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Płyn do zmywania",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Gąbka do zmywania",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Szybkoschnący ręcznik kuchenny",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Miska do mycia naczyń",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Ręcznik papierowy",
    categories: { connect: [{ id: kuchniaVan }] },
},
{ 
    name: "Noże",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Sztućce",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Miski",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Talerze",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Garnek",
    categories: { connect: [{ id: kuchniaVan }] },
},
{
    name: "Patelnia",
    categories: { connect: [{ id: kuchniaVan }] },
},




// Kosmetyczka
{
    name: "Mydło / Żel pod prysznic",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Szampon",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Odżywka do włosów",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Pasta / Żel do włosów",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Zestaw do golenia lub depilacji",
    categories: { connect: [{ id: kosmetyczka }] },
},
// {
//     name: "Kosmetyki do makijażu",
//     categories: { connect: [{ id: kosmetyczka }] },
// },
{
    name: "Szczotka do włosów / Grzebień",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Szczotka do zębów",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Pasta do zębów",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Nitka dentystyczna",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Dezodorant / Antyperspirant",
    categories: { connect: [{ id: kosmetyczka }] },
},
{
    name: "Nożyczki do paznokci",
    categories: { connect: [{ id: kosmetyczka }] },
},
// {
//     name: "Płyn do demakijażu",
//     categories: { connect: [{ id: kosmetyczka }] },
// },





// Łazienka / Higiena
{
    name: "Mokre chusteczki",
    categories: { connect: [{ id: higiena }, { id: kosmetyczka }] },
},
{
    name: "Papier toaletowy",
    categories: { connect: [{ id: higiena }, { id: survival }] },
},
{
    name: "Ręcznik",
    categories: { connect: [{ id: higiena }] },
},
{
    name: "Klapki pod prysznic",
    categories: { connect: [{ id: higiena }, { id: odziez }] },
},






// Samochód
{
    name: "Dokumenty samochodu",
    categories: { connect: [{ id: car }]},
},
{
    name: "Ładowarka samochodowa + kabel",
    categories: { connect: [{ id: car }]},
},
{
    name: "Transmiter FM",
    categories: { connect: [{ id: car }, {id:camping}]},  
},
{
    name: "Klucz do kół, lewarek",
    categories: { connect: [{ id: car }]},
},
{
    name: "Zestaw naprawczy do opon",
    categories: { connect: [{ id: car }]},   
},
{
    name: "Kabel rozruchowy",
    categories: { connect: [{ id: car }]},
},
{
    name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
    categories: { connect: [{ id: car }]},
},
{
    name: "Latarka i baterie zapasowe",
    categories: { connect: [{ id: car }]},
},
{
    name: "Wygodne ubrania na podróż",
    categories: { connect: [{ id: car }]},
},
{
    name: "Lodówka turystyczna",
    categories: { connect: [{ id: car }, {id: kuchnia}, {id: camping}]},
},







// Camping
{
    name: "Prysznic ciśnieniowy",
    categories: { connect: [{ id: camping }] },
},
{
    name: "Namiot do prysznica",
    categories: { connect: [{ id: camping }] },
},
{
    name: "Lampka wisząca",
    categories: { connect: [{ id: camping }] },
},
{
    name: "Krzesełka turystyczne (rozkładane)",
    categories: { connect: [{ id: camping }] },
},
{
    name: "Stół turystyczny (rozkładany)",
    categories: { connect: [{ id: camping }] },
},
{
    name: "Butla z gazem",
    categories: { connect: [{ id: camping }, {id: trekking}, {id: kuchnia}] },
},
{
    name: "Palnik do butli",
    categories: { connect: [{ id: camping }, {id: trekking}, {id: kuchnia}] },
},
{
    name: "Poduszki",
    categories: { connect: [{ id: camping }, {id: spanie}] },
},
{
    name: "Kołdra lub koc do spania",
    categories: { connect: [{ id: camping }, {id: spanie}] },
},
{
    name: "Namiot",
    categories: { connect: [{ id: survival }, { id: camping }] },
},
{
    name: "Karimata",
    categories: { connect: [{ id: camping }, {id: spanie}] },
},
{
    name: "Zapałki / zapalniczka",
    categories: { connect: [{ id: camping }, {id: kuchnia}] },
},
{
    name: "Grill",
    categories: { connect: [{ id: camping }, {id: jedzenie}] },
},
{
    name: "Peleryna przeciwdeszczowa",
    categories: { connect: [{ id: camping }, {id: odziez}] },
},
{
    name: "Młotek do śledzi",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}] },
},
{
    name: "Nóż",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}] },
},
{
    name: "Śrubokręt",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}] },
},
{
    name: "Przenośny grill",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: kuchniaVan}] },
},
{
    name: "Kuchenka gazowa",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: kuchniaVan}] },
},
{
    name: "Gaz do kuchenki gazowej",
    categories: {
        connect: [
            { id: campingRodzinny },
            { id: camping },
            { id: kuchniaVan },
        ],
    },  
},
{
    name: "Worki na śmieci",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: car}] },
},






// Camping rodzinny
{
    name: "Namiot rodzinny",
    categories: { connect: [{ id: campingRodzinny }] },
},
{
    name: "Materac nadmuchiwany lub maty izolacyjne",   
    categories: { connect: [{ id: campingRodzinny }] },
},
{
    name: "Śpiwory",
    categories: { connect: [{ id: campingRodzinny }] },
},
{
    name: "Lampki kempingowe",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}] },
},
{
    name: "Krzesła i stół kempingowy",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: jedzenie}, { id: zeglarstwo }, { id: windsurfing }, { id: nurkowanie }, { id: sport }] },
},
{
    name: "Kajak (opcjonalnie)",
    categories: { connect: [{ id: campingRodzinny }] },
},
{
    name: "Rowery (opcjonalnie)",
    categories: { connect: [{ id: campingRodzinny }] },
},
{
    name: "Parasol plażowy (opcjonalnie)",
    categories: { connect: [{ id: campingRodzinny }] },
},








// Jedzenie
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: jedzenie}, { id: zeglarstwo }, { id: windsurfing }, { id: nurkowanie }, { id: sport }] },
},
{
    name: "Makarony",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Konserwy",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Gotowe sosy w proszku",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Fasolka po bretońsku",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Pieczywo",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Banany",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Zupki instant",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Jajka",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Płatki śniadaniowe",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Mleko UHT",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Kinderki",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Kawa",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Masło orzechowe",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Ketchup",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Przyprawy",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Chrupki",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Herbata",
    categories: { connect: [{ id: jedzenie }] },
},
{
    name: "Batony",
    categories: { connect: [{ id: jedzenie }, {id: trekking}] },
},







// Akcesoria
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: akcesoria }] },
},
{
    name: "Nerka (saszetka biodrowa)",
    categories: { connect: [{ id: akcesoria }] },
},
{
    name: "Składany parasol",
    categories: { connect: [{ id: akcesoria }] },
},






// Inne
{
    name: "Worki na pranie",
    categories: { connect: [{ id: inne }, {id: camping}] },
},
{
    name: "Książka",
    categories: { connect: [{ id: inne }, { id: survival }] },
},
{
    name: "Planszówki",
    categories: { connect: [{ id: inne }] },
},
{
    name: "Karty do gry",
    categories: { connect: [{ id: inne }] },
},
{
    name: "Notatnik i długopis",
    categories: { connect: [{ id: inne }] },
},
{
    name: "Taśma izolacyjna",
    categories: {
        connect: [
            { id: inne },
            { id: camping },
            { id: car },
        ],
    },
},
{
    name: "Mapy papierowe",
    categories: { connect: [{ id: inne }, {id: camping}, {id: car}] },
},





// Biznes Odzież
{
    name: "Elegancki strój",
    categories: { connect: [{ id: odziez }, {id: biznes}] },
},
{
    name: "Koszule",
    categories: { connect: [{ id: odziez }, {id: biznes}] },
},
{
    name: "Spódnice",
    categories: { connect: [{ id: odziez }, {id: biznes}] },
},
{
    name: "Buty eleganckie",
    categories: { connect: [{ id: odziez }, {id: biznes}] },
},
{
    name: "Pasek do spodni",
    categories: { connect: [{ id: akcesoria }, {id: akcesoria}, {id: biznes}] },
},
{
    name: "Płaszcz lub lekka kurtka",
    categories: { connect: [{ id: odziez }, {id: biznes}] },
},
{
    name: "Laptop",
    categories: { connect: [{ id: elektronika }, {id: biznes}] },
},
{
    name: "Adapter do gniazdek",
    categories: {connect: [{ id: elektronika }, {id: biznes}]},
},
{
    name: "Wizytówki",
    categories: { connect: [{ id: biznes }] },
},





// SPORT
{
    name: "Zegarek sportowy",
    categories: { connect: [{ id: sport }, { id: elektronika}] },
},
{
    name: "Czujnik pulsu na klatkę piersiową",
    categories: { connect: [{ id: sport }, { id: elektronika}] },
},
{
    name: "Bielizna termoaktywna",
    categories: { connect: [{ id: sport }, { id: trekking }] },
},
{
    name: "Koszulka sportowa",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Spodenki sportowe",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Buty sportowe",
    categories: { connect: [{ id: sport }, { id: joga }] },
},
{
    name: "Słuchawki sportowe",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Karnet / Karta dostępu",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Ręcznik do ćwiczeń",
    categories: { connect: [{ id: sport }, { id: silownia }, { id: crossfit }] },
},
{
    name: "Rękawiczki treningowe (opcjonalnie)",
    categories: { connect: [{ id: sport }, { id: silownia }, { id: crossfit }] },
},
{
    name: "Butelka z wodą",
    categories: { connect: [{ id: sport }]},
},


// SPORT [prysznic]
{
    name: "Ręcznik pod prysznic",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Żel pod prysznic",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Dezodorant",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Bielizna na przebranie",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Zamek do szafki (jeśli wymagany)",
    categories: { connect: [{ id: sport }] },
},






// Niemowlak
{
    name: "Smoczek",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Ulubiona zabawka",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Pieluszki standardowe",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Pieluszki wodoodporne",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Chusteczki nawilżone",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Nakrycie głowy",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Krem z filtrem przeciwsłonecznym (SPF50 lub SPF70)",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Butelka do mleka",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Mleko modyfikowane lub kaszka",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Śliniak",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Leki przeciwgorączkowe dla niemowląt",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Leki przeciwbólowe dla niemowląt",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Sól fizjologiczna w jednorazowych ampułkach",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Termometr",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Plastry",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Żel na ząbkowanie",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Żel na ukąszenia owadów",
    categories: { connect: [{ id: niemowle }] },
},
{
    name: "Niania elektroniczna",
    categories: { connect: [{ id: niemowle }] },
},






// Dzieci
{
    name: "Apteczka dla dzieci",
    categories: { connect: [{ id: zdrowie }] },
},
{
    name: "Artykuły higieniczne dla dzieci",
    categories: { connect: [{ id: higiena }] },
},
{
    name: "Buty do wody dla dzieci",
    categories: { connect: [{ id: obuwie }, { id: plywanie }] },
},
{
    name: "Zabawki na plażę",
    categories: { connect: [{ id: zabawki }, { id: plazowe }] },
},
{
    name: "Książeczki",
    categories: { connect: [{ id: ksiazki }] },
},
{
    name: "Kolorowanki",
    categories: { connect: [{ id: ksiazki }] },
},
{
    name: "Gry dla dzieci",
    categories: { connect: [{ id: zabawki }] },
},
{
    name: "Składany, lekki namiot",
    categories: { connect: [{ id: plazowe }, { id: kempingowe }] },
},
{
    name: "Okulary przeciwsłoneczne dla dzieci",
    categories: { connect: [{ id: akcesoria }] },
},
{
    name: "Butelki z filtrem na wodę",
    categories: { connect: [{ id: akcesoria }] },
},
{
    name: "Zabawki do zabawy na świeżym powietrzu",
    categories: { connect: [{ id: zabawki }, { id: outdoor }] },
},
{
    name: "Nosidełko",
    categories: { connect: [{ id: podrozne }] },
},
{
    name: "Wózek terenowy",
    categories: { connect: [{ id: podrozne }] },
},
{
    name: "Kojec podróżny",
    categories: { connect: [{ id: podrozne }] },
},
{
    name: "Dziecięce środki przeciwsłoneczne",
    categories: { connect: [{ id: ochrona_sloneczna }] },
},






// SPORT Bieganie
{
    name: "Spodenki krótkie do biegania",
    categories: { connect: [{ id: sport }, { id: bieganie }] },
},
{
    name: "Skarpetki biegowe",
    categories: { connect: [{ id: sport }, { id: bieganie }] },
},
{
    name: "Legginsy do biegania",
    categories: { connect: [{ id: sport }, { id: bieganie }] },
},
{
    name: "Buty do biegania",
    categories: { connect: [{ id: sport }, { id: bieganie }] },
},
{
    name: "Kurtka do biegania",
    categories: { connect: [{ id: sport }, { id: bieganie }] },
},
{
    name: "Bluza do biegania",
    categories: { connect: [{ id: sport }, { id: bieganie }] },
},




// SPORT Siłownia







// SPORT Morsowanie
{
    name: "Buty neoprenowe",
    categories: { connect: [{ id: windsurfing }, {id: morsowanie}] },
},





// SPORT Basen
{
    name: "Kieszonka wodoodporna na mokre rzeczy",
    categories: { connect: [{ id: sport }, {id: plywanie}] },
},
{
    name: "Czepek",
    categories: { connect: [{ id: sport }, {id: plywanie}] },
},
{
    name: "Okulary pływackie",
    categories: { connect: [{ id: sport }, {id: plywanie}] },
},                        
{
    name: "Klapki basenowe",
    categories: { connect: [{ id: sport }, {id: plywanie}] },
},







// SPORT Joga
{
    name: "Mata do jogi",
    categories: { connect: [{ id: sport }, { id: joga }, { id: joga }] },
}, 
{
    name: "Ręcznik na matę",
    categories: { connect: [{ id: sport }, { id: joga }] },
},   
{
    name: "Wygodne ubranie do jogi",
    categories: { connect: [{ id: sport }, { id: joga }] },
}, 
{
    name: "Bloki jogi",
    categories: { connect: [{ id: sport }, { id: joga }] },
},      
{
    name: "Słuchawki do muzyki relaksacyjnej (opcjonalnie)",
    categories: { connect: [{ id: sport }, { id: joga }] },
},  




// SPORT Ścianka wspinaczkowa
{
    name: "Buty wspinaczkowe",
    categories: { connect: [{ id: sport }, { id: wspinaczka }, { id: wspinaczka }] },
},
{
    name: "Magnezja",
    categories: { connect: [{ id: sport }, { id: wspinaczka }] },
},
{
    name: "Uprząż",
    categories: { connect: [{ id: sport }, { id: wspinaczka }] },
},
{
    name: "Karabinek + Przyrząd asekuracyjny",
    categories: { connect: [{ id: sport }, { id: wspinaczka }] },
},
{
    name: "Lina",
    categories: { connect: [{ id: sport }, { id: wspinaczka }] },
},




// SPORT Crossfit
{
    name: "Odzież sportowa dostosowana do intensywnego treningu",
    categories: { connect: [{ id: sport }, { id: crossfit }] },
},
{
    name: "Buty sportowe do CrossFit",
    categories: { connect: [{ id: sport }, { id: crossfit }] },
},
{
    name: "Skakanka",
    categories: { connect: [{ id: sport }, { id: crossfit }] },
},                 
{
    name: "Krem na otarcia (jeśli jest potrzebny)",
    categories: { connect: [{ id: sport }, { id: crossfit }] },
},                 
{
    name: "Odpowiednie elementy osłonowe (jeśli są używane)",
    categories: { connect: [{ id: sport }, { id: crossfit }] },
},    





// SPORT Kajak
{
    name: "Kajak (lub wypożyczony)",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Wiosło lub wiosła (lub wypożyczone)",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Kamizelka ratunkowa",
    categories: { connect: [{ id: sport }, { id: zeglarstwo }] },
},
{
    name: "Pływający pojemnik na klucze i telefon",
    categories: { connect: [{ id: jezioro }, {id: sport}]},
},
{
    name: "Okulary przeciwsłoneczne z mocowaniem",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Żeberko lub sprzęt naprawczy do kajaka (opcjonalnie)",
    categories: { connect: [{ id: sport }] },
},    




// SPORT Sztuki walki
{
    name: "Leginsy sportowe",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Rękawice treningowe",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Opaska na nadgarstek (jeśli potrzebna)",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Groin cup (ochrona krocza) - dla mężczyzn",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Ochraniacze na nogi (opcjonalnie)",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Kask (opcjonalnie)",
    categories: { connect: [{ id: sport }] },
},
{
    name: "Workout bag, łapaczki itp.",
    categories: { connect: [{ id: sport }] },
},




// ACTIVE Rower
{
    name: "Rower",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Kask rowerowy",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Dętka",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Łatki do dętek",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Klej do łatek",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Pompka rowerowa",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Łyżki do opon",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Skuwacz łańcucha",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Zapasowy łańcuch",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Oświetlenie rowerowe",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Bidon",
    categories: { connect: [{ id: rower }, { id: wspinaczka }] },
},
{
    name: "Błotniki",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Zapięcie rowerowe",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Żele energetyczne",
    categories: { connect: [{ id: rower }, { id: zywienie }] },
},
{
    name: "Batony energetyczne",
    categories: { connect: [{ id: rower }, { id: zywienie }, { id: windsurfing }] },
},
{
    name: "Izotonik w proszku",
    categories: { connect: [{ id: rower }, { id: zywienie }] },
},
{
    name: "Koszulka kolarska",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Spodenki rowerowe z wkładką",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Rękawiczki rowerowe",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Buty rowerowe",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Wiatrówka rowerowa",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Kurtka przeciwdeszczowa rowerowa",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Warstwa termiczna",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Czapka pod kask",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Opaska pod kask",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Skarpetki rowerowe",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Sakwy rowerowe",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Plecak",
    categories: { connect: [{ id: rower }, { id: joga }] },
},
{
    name: "Licznik rowerowy",
    categories: { connect: [{ id: rower }] },
},
{
    name: "Mapy i plany tras",
    categories: { connect: [{ id: podrozne }] },
},
{
    name: "Zestaw do czyszczenia roweru",
    categories: { connect: [{ id: rower }] },
},





// ACTIVE wspinaczka
{
    name: "Uprząż wspinaczkowa",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Kask wspinaczkowy",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Karabinki",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Ekspresy",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Lina wspinaczkowa",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Przyrząd asekuracyjny",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Buty wspinaczkowe",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Magnesja",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Taśmy",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Pętle",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Przyrządy do zjazdów",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Koc ratunkowy",
    categories: { connect: [{ id: wspinaczka }, { id: survival }] },
},
{
    name: "Elastyczne spodnie",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Przewiewne koszulki",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Kurtka przeciwdeszczowa/wiatrówka",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Plecak wspinaczkowy",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Bidon",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Bukłak",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Energetyczne przekąski",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Środki do oczyszczania wody",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Mapy wspinaczkowe",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Przewodniki wspinaczkowe",
    categories: { connect: [{ id: wspinaczka }] },
},
{
    name: "Plastry wspinaczkowe",
    categories: { connect: [{ id: wspinaczka }] },
},







// ACTIVE Bieganie
{
    name: "Buty do biegania",
    categories: { connect: [{ id: obuwie_biegowe }, {id: bieganie}] },
},
{
    name: "Koszulki biegowe",
    categories: { connect: [{ id: ubrania_biegowe }] },
},
{
    name: "Spodenki biegowe",
    categories: { connect: [{ id: ubrania_biegowe }] },
},
{
    name: "Legginsy biegowe",
    categories: { connect: [{ id: ubrania_biegowe }] },
},
{
    name: "Bielizna sportowa",
    categories: { connect: [{ id: ubrania_biegowe }] },
},
{
    name: "Skarpety do biegania",
    categories: { connect: [{ id: ubrania_biegowe }] },
},
{
    name: "Czapka biegowa",
    categories: { connect: [{ id: akcesoria_biegowe }] },
},
{
    name: "Opaska na głowę",
    categories: { connect: [{ id: akcesoria_biegowe }] },
},
{
    name: "Rękawiczki biegowe (cienkie)",
    categories: { connect: [{ id: akcesoria_biegowe }] },
},
{
    name: "Kurtka biegowa",
    categories: { connect: [{ id: ubrania_biegowe }] },
},
{
    name: "Pasek na numer startowy",
    categories: { connect: [{ id: akcesoria_biegowe }] },
},
{
    name: "Plecak biegowy",
    categories: { connect: [{ id: akcesoria_biegowe }] },
},
{
    name: "Opaski kompresyjne",
    categories: { connect: [{ id: akcesoria_biegowe }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: jedzenie}, { id: zeglarstwo }, { id: windsurfing }, { id: nurkowanie }, { id: sport }] },
},
{
    name: "Izotonik w proszku",
    categories: { connect: [{ id: zywienie }] },
},
{
    name: "Batony energetyczne",
    categories: { connect: [{ id: zywienie }] },
},
{
    name: "Żele energetyczne",
    categories: { connect: [{ id: zywienie }] },
},
{
    name: "Słuchawki bezprzewodowe",
    categories: { connect: [{ id: elektronika }] },
},
{
    name: "Środki przeciw otarciom",
    categories: { connect: [{ id: zdrowie }] },
},
{
    name: "Mapy i plany tras biegowych",
    categories: { connect: [{ id: podrozne }] },
},





// ACTIVE Żeglarstwo
{
    name: "Kurtka żeglarska",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Spodnie żeglarskie",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Buty żeglarskie",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Rękawiczki żeglarskie",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Czapka z daszkiem",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Bandana",
    categories: { connect: [{ id: zeglarstwo }, { id: joga }] },
},
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Warstwy termiczne",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Kamizelka ratunkowa",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Ręczniki szybkoschnące",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Mapy nawigacyjne",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Kompas",
    categories: { connect: [{ id: zeglarstwo }, { id: survival }] },
},
{
    name: "Lornetka",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Nóż żeglarski",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Latarka czołowa",
    categories: { connect: [{ id: zeglarstwo }, { id: survival }] },
},
{
    name: "GPS",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Ploter nawigacyjny",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: jedzenie}, { id: zeglarstwo }, { id: windsurfing }, { id: nurkowanie }, { id: sport }] },
},
{
    name: "Prowiant",
    categories: { connect: [{ id: zeglarstwo }] },
},
{
    name: "Worki wodoszczelne",
    categories: { connect: [{ id: zeglarstwo }] },
},






// ACTIVE Windsurfing
{
    name: "Deska windsurfingowa",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Żagiel do windsurfingu",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Boom do windsurfingu",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Uprząż windsurfingowa",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Pianka neoprenowa",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Buty neoprenowe",
    categories: { connect: [{ id: windsurfing }, {id: morsowanie}] },
},
{
    name: "Rękawiczki neoprenowe",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Wiatrówka",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Strój kąpielowy",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Ręcznik szybkoschnący",
    categories: { connect: [{ id: windsurfing }, { id: nurkowanie }] },
},
{
    name: "Zegarek wodoszczelny",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: jedzenie}, { id: zeglarstwo }, { id: windsurfing }, { id: nurkowanie }, { id: sport }] },
},
{
    name: "Batony energetyczne",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Energetyk w proszku",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Plecak lub torba",
    categories: { connect: [{ id: windsurfing }, { id: nurkowanie }] },
},
{
    name: "Kurs windsurfingu",
    categories: { connect: [{ id: windsurfing }] },
},
{
    name: "Instruktor windsurfingu",
    categories: { connect: [{ id: windsurfing }] },
},





// ACTIVE Nurkowanie
{
    name: "Maska nurkowa",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Płetwy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Snorkel",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Skrzela (BCD)",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Regulator nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Kombinezon nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Komputer nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Butla z powietrzem",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Latarka nurkowa",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Nóż nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Boja z linią",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Ręcznik szybkoschnący",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Torba na sprzęt nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Aparat fotograficzny podwodny",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny }, {id: camping}, {id: jedzenie}, { id: zeglarstwo }, { id: windsurfing }, { id: nurkowanie }, { id: sport }] },
},
{
    name: "Przekąski energetyczne",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Certyfikat nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Dziennik nurkowy",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Ubezpieczenie nurkowe",
    categories: { connect: [{ id: nurkowanie }] },
},
{
    name: "Plecak lub torba",
    categories: { connect: [{ id: nurkowanie }] },
},






// ACTIVE Joga i medytacja
{
    name: "Mata do jogi",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Blok do jogi",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Pasek do jogi",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Poduszka do medytacji",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Koc do jogi",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Szal do jogi",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Wygodne ubrania do jogi",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Ciepłe ubrania",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Kapelusz",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Bandana",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Buty sportowe",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Słuchawki",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Butelka na wodę",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Książki o jodze i medytacji",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Muzyka relaksacyjna",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Dźwięki natury",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Plecak",
    categories: { connect: [{ id: joga }] },
},
{
    name: "Torba",
    categories: { connect: [{ id: joga }] },
},





// ACTIVE Survival
{
    name: "Plecak turystyczny",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Nóż survivalowy",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Multitool",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Koc ratunkowy",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Kompas",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Mapa terenu",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Latarka czołowa",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Wygodne, trwałe ubrania",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Buty trekkingowe",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Czapka",
    categories: { connect: [{ id: survival }, { id: snowboard }, { id: citybreak_zima }] },
},
{
    name: "Rękawiczki",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Szalik",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Kurtka przeciwdeszczowa",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Namiot",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Śpiwór",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Mata izolacyjna",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Kuchenka turystyczna",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Naczynia turystyczne",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Liofilizowane posiłki",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Butelka na wodę",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Tabletki do oczyszczania wody",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Apteczka pierwszej pomocy",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Środek przeciw kleszczom i komarom",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Biodegradowalne mydło",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Papier toaletowy",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Zapalniczka",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Bidony na wodę",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Gwizdek ratunkowy",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Siatka na owady",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Książka",
    categories: { connect: [{ id: survival }] },
},
{
    name: "Pakiet energetyczny",
    categories: { connect: [{ id: survival }] },
},






// ZIMA Narty
{
    name: "Narty i wiązania narciarskie",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Buty narciarskie",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Kijki narciarskie",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Gogle narciarskie",
    categories: { connect: [{ id: narty }, {id: trekking}] },
},
{
    name: "Kask narciarski",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Wosk do nart",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Kurtka narciarska",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Spodnie narciarskie",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Bielizna termiczna",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Spodnie termiczne",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Koszulka termiczna",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Polar / Bluza narciarska",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Skarpety narciarskie",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Rękawice narciarskie",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Czapka narciarska",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Szalik narciarski",
    categories: { connect: [{ id: narty }] },
},
{
    name: "Komin narciarski",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Maska na twarz narciarska",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Plecak narciarski",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Balsam do ust",
    categories: { connect: [{ id: narty }, { id: snowboard }, { id: snowboard }, {id: citybreak_zima}] },
},
{
    name: "Mapa tras narciarskich",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Kamera sportowa",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},





// ZIMA Snowboard
{
    name: "Snowboard",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Buty snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Wiązania snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Kask snowboardowy",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Gogle snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Pokrowiec na snowboard",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Kurtka snowboardowa",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Spodnie snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Koszulka termiczna",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Spodnie termiczne",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Bielizna termiczna",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Polar / Bluza snowboardowa",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Rękawice snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Skarpety snowboardowe",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Czapka",
    categories: { connect: [{ id: narty }, { id: snowboard }] },
},
{
    name: "Plecak snowboardowy",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Mapa tras snowboardowych",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Komin narciarski",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Maska na twarz narciarska",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Plecak narciarski",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Balsam na usta",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Mapa tras narciarskich",
    categories: { connect: [{ id: snowboard }] },
},
{
    name: "Kamera sportowa",
    categories: { connect: [{ id: snowboard }] },
},







// ZIMA Citybreak
{
    name: "Ciepła kurtka",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Sweter",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Bluza",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Ciepłe spodnie",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Buty zimowe",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Czapka",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Szalik",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Rękawiczki",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Parasolka",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Termos",
    categories: { connect: [{ id: citybreak_zima }] },
},
{
    name: "Balsam do ust",
    categories: { connect: [{ id: narty }, { id: snowboard }, { id: snowboard }, {id: citybreak_zima}] },
},
]