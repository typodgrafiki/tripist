const test = [

// Podstawa


// Odzież
{
    name: "Koszulki",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Spodenki krótkie",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Spodenki dresowe",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Długie spodnie dżinsowe",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Zwykła bluza",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Sweter",
    categories: { connect: [{ id: odziez.id }, { id: citybreak_zima.id }] },
},
{
    name: "Piżama",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Skarpety",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Skarpety niskie białe",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Skarpety wysokie kolorowe",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Bielizna (majtki)",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Czapka z daszkiem lub kapelusz",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Czapka z daszkiem",
    categories: { connect: [{ id: odziez.id }, { id: zeglarstwo.id }] },
},
{
    name: "Kapelusz",
    categories: { connect: [{ id: odziez.id }, { id: joga.id }] },
},
{
    name: "Chusta na głowę",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Buty na zmianę",
    categories: { connect: [{ id: odziez.id }] },
},




// Odzież zima
{
    name: "Kurtka",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Kurtka puchowa",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Rękawiczki",
    categories: { connect: [{ id: odziez.id }, { id: survival.id }, { id: citybreak_zima.id }] },
},
{
    name: "Czapka zimowa",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Rajstopy / kalesony",
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Szalik",
    categories: { connect: [{ id: odziez.id }, { id: survival.id }, { id: citybreak_zima.id }] },
},




// Citybreak
{
    name: "Odzież elegancka na wieczór",
    categories: { connect: [{ id: odziez.id }, {id: citybreak.id}, {id: allinclusive.id}] },
},
{
    name: "Buty wygodne na spacery",
    categories: { connect: [{ id: odziez.id }, {id: citybreak.id}] },
},





// All-inclusive
{
    name: "Strój kąpielowy",
    categories: { connect: [{ id: plaza.id }, {id: sport.id}, {id: plywanie.id}, {id: allinclusive.id}, { id: windsurfing.id }] },
},
{
    name: "Okulary pływackie",
    categories: { connect: [{ id: sport.id }, {id: plywanie.id}, {id: allinclusive.id}] },
},                        
{
    name: "Klapki basenowe",
    categories: { connect: [{ id: sport.id }, {id: plywanie.id}, {id: allinclusive.id}] },
},
{
    name: "Adapter do gniazdka",
    categories: { connect: [{id: elektronika.id}, {id: allinclusive.id}] },
},
{
    name: "Przenośny wentylator",
    categories: { connect: [{id: elektronika.id}, {id: allinclusive.id}] },
},
{
    name: "Dmuchany materac lub koło",
    categories: { connect: [{ id: allinclusive.id }, { id: plaza.id}] },
},
{
    name: "Przewodnik po okolicy",
    categories: { connect: [{ id: allinclusive.id }] },
},
{
    name: "Zabezpieczenie bagażu",
    categories: { connect: [{ id: allinclusive.id }, { id: tropikalnawyspa.id }, { id: egipt.id }] },
},





// Tropikalna wyspa
{
    name: "Lekkie, przewiewne ubrania",
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
},
{
    name: "Lekkie buty trekkingowe",
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
},
{
    name: "Sandały, klapki, buty do wody",
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
},
{
    name: "Sprzęt do snorkelingu - maska, rurka, płetwy",
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
},
{
    name: "Plecak na wycieczki",
    categories: { connect: [{ id: tropikalnaWyspa.id }, { id: safari.id }] },
},
{
    name: "Mapa lokalna lub przewodnik",
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
},
{
    name: "Przewodnik turystyczny lub e-book",
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
},
{
    name: "Adapter do gniazdka elektrycznego",
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
},






// Afryka / Egipt
{
    name: "Lekkie i przewiewne ubrania",
    categories: { connect: [{ id: egipt.id }] },
},
{
    name: "Lekkie ubrania z długimi rękawami i nogawkami",
    categories: { connect: [{ id: egipt.id }] },
},
{
    name: "Sandały",
    categories: { connect: [{ id: egipt.id }] },
},
// + Sprzęt do nurkowania
// + Safari







// Safari
{
    name: "Przewiewne ubrania w kolorach neutralnych",
    categories: { connect: [{ id: safari.id }] },
},
{
    name: "Obuwie trekkingowe",
    categories: { connect: [{ id: safari.id }] },
},
{
    name: "Kapelusz z szerokim rondem",
    categories: { connect: [{ id: safari.id }] },
},
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: safari.id }, { id: akcesoria.id }, { id: rower.id }, { id: zeglarstwo.id }] },
},
{
    name: "Lornetka",
    categories: { connect: [{ id: safari.id }, { id: zeglarstwo.id }] },
},
{
    name: "Plecak na wycieczki",
    categories: { connect: [{ id: safari.id }] },
},
{
    name: "Butelka na wodę",
    categories: { connect: [{ id: safari.id }, { id: joga.id }, { id: survival.id }] },
},
{
    name: "Przewodnik po dzikiej przyrodzie",
    categories: { connect: [{ id: safari.id }] },
},
{
    name: "Aparat fotograficzny z zoomem",
    categories: { connect: [{ id: safari.id }] },
}







// Plaża
{
    name: "Koc/Mata na plażę",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Leżak",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Krem z filtrem UV",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Strój kąpielowy",
    categories: { connect: [{ id: plaza.id }, {id: sport.id}, {id: plywanie.id}] },
},
{
    name: "Sandały/klapki plażowe",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Torba plażowa",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Balsam po opalaniu",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Parasol plażowy",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Parawan lub namiot plażowy",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Sprzęt do nurkowania (maska, rurka)",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Wodoodporny aparat fotograficzny",
    categories: { connect: [{ id: plaza.id }, { id: nurkowanie.id }] },
},
{
    name: "Piłka plażowa",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Buty do wody",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Chłodna torba",
    categories: { connect: [{ id: plaza.id }] },
},
{
    name: "Dmuchany materac lub koło",
    categories: { connect: [{ id: plaza.id }, { id: allinclusive.id }] },
},





// Trekking lato
{
    name: "Bielizna termoaktywna",
    categories: { connect: [{ id: sport.id }, { id: trekking.id }] },
},
{
    name: "Spodnie długie trekkingowe",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Kamizelka trekkingowa",
    categories: { connect: [{ id: trekking.id } ] },
},
{
    name: "Bluza trekkingowa",
    categories: { connect: [{ id: trekking.id } ] },
},
{
    name: "Kurtka trekkingowa",
    categories: { connect: [{ id: trekking.id } ] },
},
{
    name: "Kurtka softshell",
    categories: { connect: [{ id: trekking.id } ] },
},
{
    name: "Buty trekkingowe",
    categories: { connect: [{ id: trekking.id }, { id: survival.id }] },
},
{
    name: "Czołówka",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Baterie do czołówki",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Kijki trekkingowe",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Mapa lub przewodnik",
    categories: { connect: [{ id: trekking.id }, {id: inne.id}] },
},
{
    name: "Plecak trekkingowy",
    categories: { connect: [{ id: trekking.id }] },
},


// Trekking + zima
{
    name: "Raki",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Raczki",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Stuptuty",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Rękawice grube 2x",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Rękawice cienkie 2x",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Gogle narciarskie",
    categories: { connect: [{ id: trekking.id }, { id: narty.id }] },
},
{
    name: "Czapka zimowa gruba",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Czapka zimowa cienka",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Komin polarowy (na szyję)",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Tłusty krem do twarzy",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Kurtka puchowa (opcjonalnie)",
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Termos z ciepłą herbatą",
    categories: { connect: [{ id: trekking.id }, {id: sport.id}] },
},



// Jezioro
{
    name: "SUP",
    categories: { connect: [{ id: jezioro.id }]},
},
{
    name: "Wiosło",
    categories: { connect: [{ id: jezioro.id }]},
},
{
    name: "Klapki",
    categories: { connect: [{ id: lazienka.id }]},
},
{
    name: "Recznik",
    categories: { connect: [{ id: lazienka.id }]},
},
{
    name: "Butelka z wodą",
    categories: { connect: [{ id: sport.id }]},
},
{
    name: "Pływający pojemnik na klucze i telefon",
    categories: { connect: [{ id: jezioro.id }]},
},




// Mazury
{
    name: "Ciepłe ubrania na wieczór",
    categories: { connect: [{ id: jezioro.id }, {id: mazury.id}]},
},
{
    name: "Przeciwdeszczowa odzież",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Strój kąpielowy",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Plecak na wycieczki",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Latarka lub czołówka",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Termos lub bidon",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Sprzęt do pływania",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Sprzęt wędkarski",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Rowery",
    categories: { connect: [{id: mazury.id}]},
},
{
    name: "Kijki do nordic walking",
    categories: { connect: [{id: mazury.id}]},
},










// Dokumenty
{
    name: "Gotówka",
    categories: { connect: [{ id: dokumenty.id }]},
},
{
    name: "Dokumenty",
    categories: { connect: [{ id: dokumenty.id }]},
},
{
    name: "Ubezpieczenie podróżne",
    categories: { connect: [{ id: dokumenty.id }]},
},
{
    name: "Dowód osobisty",
    categories: { connect: [{ id: dokumenty.id }]},
},
{
    name: "Prawo jazdy",
    categories: { connect: [{ id: dokumenty.id }]},
},
{
    name: "Paszport",
    categories: { connect: [{ id: dokumenty.id }]},
},
{
    name: "Wiza",
    categories: { connect: [{ id: dokumenty.id }]},
},
{
    name: "Kopie ważnych dokumentów",
    categories: { connect: [{ id: dokumenty.id }, {id: biznes.id}] },
},
{
    name: "Bilety lotnicze",
    categories: { connect: [{ id: dokumenty.id }, {id: biznes.id}] },
},
{
    name: "Potwierdzenia rezerwacji",
    categories: { connect: [{ id: dokumenty.id }, {id: biznes.id}] },
},




// Elektronika
{
    name: "Aparat fotograficzny",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Dodatkowa karta do aparatu (opcjonalnie)",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Dodatkowa bateria do aparatu (opcjonalnie)",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Ładowarka do telefonu + kabel",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Powerbank + kabel",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Gimball + ładowarka + kabel",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Słuchawki",
    categories: { connect: [{ id: elektronika.id }, {id: joga.id}]},
},
{
    name: "Głośnik przenośny (bezprzewodowy)",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Czołówka (latarka)",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Baterie do czołówki",
    categories: { connect: [{ id: elektronika.id }]},
},
{
    name: "Czytnik typu Kindle",
    categories: { connect: [{ id: elektronika.id }]},
},






// Apteczka
{
    name: "Leki",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Tabletki przeciwbólowe",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Tabletki na biegunkę",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Tabletki na ból brzucha",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Plastry opatrunkowe",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Żel antybakteryjny",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Tabletki na alergie",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Maść/spray przeciw oparzeniom słonecznm",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Środek na komary i kleszcze",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Bandaż",
    categories: {connect: [{ id: apteczka.id }]},
},
{
    name: "Nożyczki",
    categories: {connect: [{ id: apteczka.id }]},
},





// Van Kuchnia
{
    name: "Cebula",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Olej",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Sól",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Korkociąg",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Płyn do zmywania",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Gąbka do zmywania",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Szybkoschnący ręcznik kuchenny",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Miska do mycia naczyń",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Ręcznik papierowy",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{ 
    name: "Noże",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Sztućce",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Miski",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Talerze",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Garnek",
    categories: { connect: [{ id: kuchniaVan.id }] },
},
{
    name: "Patelnia",
    categories: { connect: [{ id: kuchniaVan.id }] },
},




// Kosmetyczka
{
    name: "Mydło / Żel pod prysznic",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Szampon",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Odżywka do włosów",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Pasta / Żel do włosów",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Zestaw do golenia lub depilacji",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Kosmetyki do makijażu",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Szczotka do włosów / Grzebień",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Szczotka do zębów",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Pasta do zębów",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Nitka dentystyczna",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Dezodorant / Antyperspirant",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Nożyczki do paznokci",
    categories: { connect: [{ id: kosmetyczka.id }] },
},
{
    name: "Płyn do demakijażu",
    categories: { connect: [{ id: kosmetyczka.id }] },
},





// Łazienka / Higiena
{
    name: "Mokre chusteczki",
    categories: { connect: [{ id: higiena.id }, { id: kosmetyczka.id }] },
},
{
    name: "Papier toaletowy",
    categories: { connect: [{ id: higiena.id }, { id: survival.id }] },
},
{
    name: "Ręcznik",
    categories: { connect: [{ id: higiena.id }] },
},
{
    name: "Klapki pod prysznic",
    categories: { connect: [{ id: higiena.id }, { id: odziez.id }] },
},






// Samochód
{
    name: "Dokumenty samochodu",
    categories: { connect: [{ id: car.id }]},
},
{
    name: "Ładowarka samochodowa + kabel",
    categories: { connect: [{ id: car.id }]},
},
{
    name: "Transmiter FM",
    categories: { connect: [{ id: car.id }, {id:campping.id}]},  
},
{
    name: "Klucz do kół, lewarek",
    categories: { connect: [{ id: car.id }]},
},
{
    name: "Zestaw naprawczy do opon",
    categories: { connect: [{ id: car.id }]},   
},
{
    name: "Kabel rozruchowy",
    categories: { connect: [{ id: car.id }]},
},
{
    name: "Trójkąt ostrzegawczy i kamizelki odblaskowe",
    categories: { connect: [{ id: car.id }]},
},
{
    name: "Latarka i baterie zapasowe",
    categories: { connect: [{ id: car.id }]},
},
{
    name: "Wygodne ubrania na podróż",
    categories: { connect: [{ id: car.id }]},
},
{
    name: "Lodówka turystyczna",
    categories: { connect: [{ id: car.id }, {id: kuchnia.id}, {id: camping.id}]},
},







// Camping
{
    name: "Prysznic ciśnieniowy",
    categories: { connect: [{ id: camping.id }] },
},
{
    name: "Namiot do prysznica",
    categories: { connect: [{ id: camping.id }] },
},
{
    name: "Lampka wisząca",
    categories: { connect: [{ id: camping.id }] },
},
{
    name: "Krzesełka turystyczne (rozkładane)",
    categories: { connect: [{ id: camping.id }] },
},
{
    name: "Stół turystyczny (rozkładany)",
    categories: { connect: [{ id: camping.id }] },
},
{
    name: "Butla z gazem",
    categories: { connect: [{ id: camping.id }, {id: trekking.id}, {id: kuchnia.id}] },
},
{
    name: "Palnik do butli",
    categories: { connect: [{ id: camping.id }, {id: trekking.id}, {id: kuchnia.id}] },
},
{
    name: "Poduszki",
    categories: { connect: [{ id: camping.id }, {id: spanie.id}] },
},
{
    name: "Kołdra lub koc do spania",
    categories: { connect: [{ id: camping.id }, {id: spanie.id}] },
},
{
    name: "Namiot",
    categories: { connect: [{ id: survival.id }, { id: camping.id }] },
},
{
    name: "Karimata",
    categories: { connect: [{ id: camping.id }, {id: spanie.id}] },
},
{
    name: "Zapałki / zapalniczka",
    categories: { connect: [{ id: camping.id }, {id: kuchnia.id}] },
},
{
    name: "Grill",
    categories: { connect: [{ id: camping.id }, {id: jedzenie.id}] },
},
{
    name: "Peleryna przeciwdeszczowa",
    categories: { connect: [{ id: camping.id }, {id: odziez.id}] },
},
{
    name: "Młotek do śledzi",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}] },
},
{
    name: "Nóż",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}] },
},
{
    name: "Śrubokręt",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}] },
},
{
    name: "Przenośny grill",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: kuchniaVan.id}] },
},
{
    name: "Kuchenka gazowa",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: kuchniaVan.id}] },
},
{
    name: "Worki na śmieci",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: car.id}] },
}






// Camping rodzinny
{
    name: "Namiot rodzinny",
    categories: { connect: [{ id: campingRodzinny.id }] },
},
{
    name: "Materac nadmuchiwany lub maty izolacyjne",   
    categories: { connect: [{ id: campingRodzinny.id }] },
},
{
    name: "Śpiwory",
    categories: { connect: [{ id: campingRodzinny.id }] },
},
{
    name: "Lampki kempingowe",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}] },
},
{
    name: "Krzesła i stół kempingowy",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: jedzenie.id}, { id: zeglarstwo.id }, { id: winsurfing.id }, { id: nurkowanie.id }, { id: sport.id }] },
},
{
    name: "Kajak (opcjonalnie)",
    categories: { connect: [{ id: campingRodzinny.id }, },
},
{
    name: "Rowery (opcjonalnie)",
    categories: { connect: [{ id: campingRodzinny.id }, },
},
{
    name: "Parasol plażowy (opcjonalnie)",
    categories: { connect: [{ id: campingRodzinny.id }, },
},








// Jedzenie
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: jedzenie.id}, { id: zeglarstwo.id }, { id: winsurfing.id }, { id: nurkowanie.id }, { id: sport.id }] },
},
{
    name: "Makarony",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Konserwy",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Gotowe sosy w proszku",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Fasolka po bretońsku",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Pieczywo",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Banany",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Zupki instant",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Jajka",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Płatki śniadaniowe",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Mleko UHT",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Kinderki",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Kawa",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Masło orzechowe",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Ketchup",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Przyprawy",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Chrupki",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Herbata",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Batony",
    categories: { connect: [{ id: jedzenie.id }, {id: trekking.id}] },
},







// Akcesoria
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: akcesoria.id }] },
},
{
    name: "Nerka (saszetka biodrowa)",
    categories: { connect: [{ id: akcesoria.id }] },
},
{
    name: "Składany parasol",
    categories: { connect: [{ id: akcesoria.id }] },
},






// Inne
{
    name: "Worki na pranie",
    categories: { connect: [{ id: inne.id }, {id: camping.id}] },
},
{
    name: "Książka",
    categories: { connect: [{ id: inne.id }, { id: survival.id }] },
},
{
    name: "Planszówki",
    categories: { connect: [{ id: inne.id }] },
},
{
    name: "Karty do gry",
    categories: { connect: [{ id: inne.id }] },
},
{
    name: "Notatnik i długopis",
    categories: { connect: [{ id: inne.id }] },
},
{
    name: "Taśma izolacyjna",
    categories: {
        connect: [
            { id: inne.id },
            { id: camping.id },
            { id: car.id },
        ],
    },
},
{
    name: "Mapy papierowe",
    categories: { connect: [{ id: inne.id }, {id: camping.id}, {id: car.id}] },
}





// Biznes Odzież
{
    name: "Elegancki strój",
    categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
},
{
    name: "Koszule",
    categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
},
{
    name: "Spódnice",
    categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
},
{
    name: "Buty eleganckie",
    categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
},
{
    name: "Pasek do spodni",
    categories: { connect: [{ id: akcesoria.id }, {id: akcesoria.id}, {id: biznes.id}] },
},
{
    name: "Płaszcz lub lekka kurtka",
    categories: { connect: [{ id: odziez.id }, {id: biznes.id}] },
},
{
    name: "Laptop",
    categories: { connect: [{ id: elektronika.id }, {id: biznes.id}] },
},
{
    name: "Adapter do gniazdek",
    categories: {connect: [{ id: elektronika.id }, {id: biznes.id}]},
},
{
    name: "Wizytówki",
    categories: { connect: [{ id: biznes.id }] },
},





// SPORT
{
    name: "Zegarek sportowy",
    categories: { connect: [{ id: sport.id }, { id: elektronika.id}] },
},
{
    name: "Czujnik pulsu na klatkę piersiową",
    categories: { connect: [{ id: sport.id }, { id: elektronika.id}] },
},
{
    name: "Bielizna termoaktywna",
    categories: { connect: [{ id: sport.id }, { id: trekking.id }] },
},
{
    name: "Koszulka sportowa",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Spodenki sportowe",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Buty sportowe",
    categories: { connect: [{ id: sport.id }, { id: joga.id }] },
},
{
    name: "Słuchawki sportowe",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Karnet / Karta dostępu",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Ręcznik do ćwiczeń",
    categories: { connect: [{ id: sport.id }, { id: silownia.id }, { id: crossfit.id }] },
},
{
    name: "Rękawiczki treningowe (opcjonalnie)",
    categories: { connect: [{ id: sport.id }, { id: silownia.id }, { id: crossfit.id }] },
},
{
    name: "Butelka z wodą",
    categories: { connect: [{ id: sport.id }]},
},


// SPORT [prysznic]
{
    name: "Ręcznik pod prysznic",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Żel pod prysznic",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Dezodorant",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Bielizna na przebranie",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Zamek do szafki (jeśli wymagany)",
    categories: { connect: [{ id: sport.id }] },
},






// Niemowlak
{
    name: "Smoczek",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Ulubiona zabawka",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Pieluszki standardowe",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Pieluszki wodoodporne",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Chusteczki nawilżone",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Nakrycie głowy",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Krem z filtrem przeciwsłonecznym (SPF50 lub SPF70)",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Butelka do mleka",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Mleko modyfikowane lub kaszka",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Śliniak",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Leki przeciwgorączkowe dla niemowląt",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Leki przeciwbólowe dla niemowląt",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Sól fizjologiczna w jednorazowych ampułkach",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Termometr",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Plastry",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Żel na ząbkowanie",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Żel na ukąszenia owadów",
    categories: { connect: [{ id: niemowle.id }] },
},
{
    name: "Niania elektroniczna",
    categories: { connect: [{ id: niemowle.id }] },
}






// Dzieci
{
    name: "Apteczka dla dzieci",
    categories: { connect: [{ id: zdrowie.id }] },
},
{
    name: "Artykuły higieniczne dla dzieci",
    categories: { connect: [{ id: higiena.id }] },
},
{
    name: "Buty do wody dla dzieci",
    categories: { connect: [{ id: obuwie.id }, { id: plywanie.id }] },
},
{
    name: "Zabawki na plażę",
    categories: { connect: [{ id: zabawki.id }, { id: plazowe.id }] },
},
{
    name: "Książeczki",
    categories: { connect: [{ id: ksiazki.id }] },
},
{
    name: "Kolorowanki",
    categories: { connect: [{ id: ksiazki.id }] },
},
{
    name: "Gry dla dzieci",
    categories: { connect: [{ id: zabawki.id }] },
},
{
    name: "Składany, lekki namiot",
    categories: { connect: [{ id: plazowe.id }, { id: kempingowe.id }] },
},
{
    name: "Okulary przeciwsłoneczne dla dzieci",
    categories: { connect: [{ id: akcesoria.id }] },
},
{
    name: "Butelki z filtrem na wodę",
    categories: { connect: [{ id: akcesoria.id }] },
},
{
    name: "Zabawki do zabawy na świeżym powietrzu",
    categories: { connect: [{ id: zabawki.id }, { id: outdoor.id }] },
},
{
    name: "Nosidełko",
    categories: { connect: [{ id: podrozne.id }] },
},
{
    name: "Wózek terenowy",
    categories: { connect: [{ id: podrozne.id }] },
},
{
    name: "Kojec podróżny",
    categories: { connect: [{ id: podrozne.id }] },
},
{
    name: "Dziecięce środki przeciwsłoneczne",
    categories: { connect: [{ id: ochrona_sloneczna.id }] },
},






// SPORT Bieganie
{
    name: "Spodenki krótkie do biegania",
    categories: { connect: [{ id: sport.id }, { id: bieganie.id }] },
},
{
    name: "Skarpetki biegowe",
    categories: { connect: [{ id: sport.id }, { id: bieganie.id }] },
},
{
    name: "Legginsy do biegania",
    categories: { connect: [{ id: sport.id }, { id: bieganie.id }] },
},
{
    name: "Buty do biegania",
    categories: { connect: [{ id: sport.id }, { id: bieganie.id }] },
},
{
    name: "Kurtka do biegania",
    categories: { connect: [{ id: sport.id }, { id: bieganie.id }] },
},
{
    name: "Bluza do biegania",
    categories: { connect: [{ id: sport.id }, { id: bieganie.id }] },
},




// SPORT Siłownia







// SPORT Morsowanie
{
    name: "Buty neoprenowe",
    categories: { connect: [{ id: windsurfing.id }, {id: morsowanie.id}] },
},





// SPORT Basen
{
    name: "Kieszonka wodoodporna na mokre rzeczy",
    categories: { connect: [{ id: sport.id }, {id: plywanie.id}] },
},
{
    name: "Czepek",
    categories: { connect: [{ id: sport.id }, {id: plywanie.id}] },
},
{
    name: "Okulary pływackie",
    categories: { connect: [{ id: sport.id }, {id: plywanie.id}] },
},                        
{
    name: "Klapki basenowe",
    categories: { connect: [{ id: sport.id }, {id: plywanie.id}] },
},







// SPORT Joga
{
    name: "Mata do jogi",
    categories: { connect: [{ id: sport.id }, { id: joga.id }, { id: joga.id }] },
}, 
{
    name: "Ręcznik na matę",
    categories: { connect: [{ id: sport.id }, { id: joga.id }] },
},   
{
    name: "Wygodne ubranie do jogi",
    categories: { connect: [{ id: sport.id }, { id: joga.id }] },
}, 
{
    name: "Bloki jogi",
    categories: { connect: [{ id: sport.id }, { id: joga.id }] },
},      
{
    name: "Słuchawki do muzyki relaksacyjnej (opcjonalnie)",
    categories: { connect: [{ id: sport.id }, { id: joga.id }] },
},  




// SPORT Ścianka wspinaczkowa
{
    name: "Buty wspinaczkowe",
    categories: { connect: [{ id: sport.id }, { id: wspinaczka.id }, { id: wspinaczka.id }] },
},
{
    name: "Magnezja",
    categories: { connect: [{ id: sport.id }, { id: wspinaczka.id }] },
},
{
    name: "Uprząż",
    categories: { connect: [{ id: sport.id }, { id: wspinaczka.id }] },
},
{
    name: "Karabinek + Przyrząd asekuracyjny",
    categories: { connect: [{ id: sport.id }, { id: wspinaczka.id }] },
},
{
    name: "Lina",
    categories: { connect: [{ id: sport.id }, { id: wspinaczka.id }] },
},




// SPORT Crossfit
{
    name: "Odzież sportowa dostosowana do intensywnego treningu",
    categories: { connect: [{ id: sport.id }, { id: crossfit.id }] },
},
{
    name: "Buty sportowe do CrossFit",
    categories: { connect: [{ id: sport.id }, { id: crossfit.id }] },
},
{
    name: "Skakanka",
    categories: { connect: [{ id: sport.id }, { id: crossfit.id }] },
},                 
{
    name: "Krem na otarcia (jeśli jest potrzebny)",
    categories: { connect: [{ id: sport.id }, { id: crossfit.id }] },
},                 
{
    name: "Odpowiednie elementy osłonowe (jeśli są używane)",
    categories: { connect: [{ id: sport.id }, { id: crossfit.id }] },
},    





// SPORT Kajak
{
    name: "Kajak (lub wypożyczony)",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Wiosło lub wiosła (lub wypożyczone)",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Kamizelka ratunkowa",
    categories: { connect: [{ id: sport.id }, { id: zeglarstwo.id }] },
},
{
    name: "Pływający pojemnik na klucze i telefon",
    categories: { connect: [{ id: jezioro.id }, {id: sport.id}]},
},
{
    name: "Okulary przeciwsłoneczne z mocowaniem",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Żeberko lub sprzęt naprawczy do kajaka (opcjonalnie)",
    categories: { connect: [{ id: sport.id }] },
},    




// SPORT Sztuki walki
{
    name: "Leginsy sportowe",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Rękawice treningowe",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Opaska na nadgarstek (jeśli potrzebna)",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Groin cup (ochrona krocza) - dla mężczyzn",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Ochraniacze na nogi (opcjonalnie)",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Kask (opcjonalnie)",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Workout bag, łapaczki itp.",
    categories: { connect: [{ id: sport.id }] },
},




// ACTIVE Rower
{
    name: "Rower",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Kask rowerowy",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Dętka",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Łatki do dętek",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Klej do łatek",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Pompka rowerowa",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Łyżki do opon",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Skuwacz łańcucha",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Zapasowy łańcuch",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Oświetlenie rowerowe",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Bidon",
    categories: { connect: [{ id: rower.id }, { id: wspinaczka.id }] },
},
{
    name: "Błotniki",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Zapięcie rowerowe",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Żele energetyczne",
    categories: { connect: [{ id: rower.id }, { id: zywienie.id }] },
},
{
    name: "Batony energetyczne",
    categories: { connect: [{ id: rower.id }, { id: zywienie.id }, { id: windsurfing.id }] },
},
{
    name: "Izotonik w proszku",
    categories: { connect: [{ id: rower.id }, { id: zywienie.id }] },
},
{
    name: "Koszulka kolarska",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Spodenki rowerowe z wkładką",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Rękawiczki rowerowe",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Buty rowerowe",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Wiatrówka rowerowa",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Kurtka przeciwdeszczowa rowerowa",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Warstwa termiczna",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Czapka pod kask",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Opaska pod kask",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Skarpetki rowerowe",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Sakwy rowerowe",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Plecak",
    categories: { connect: [{ id: rower.id }, { id: joga.id }] },
},
{
    name: "Licznik rowerowy",
    categories: { connect: [{ id: rower.id }] },
},
{
    name: "Mapy i plany tras",
    categories: { connect: [{ id: podrozne.id }] },
},
{
    name: "Zestaw do czyszczenia roweru",
    categories: { connect: [{ id: rower.id }] },
}





// ACTIVE wspinaczka
{
    name: "Uprząż wspinaczkowa",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Kask wspinaczkowy",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Karabinki",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Ekspresy",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Lina wspinaczkowa",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Przyrząd asekuracyjny",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Buty wspinaczkowe",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Magnesja",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Taśmy",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Pętle",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Przyrządy do zjazdów",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Koc ratunkowy",
    categories: { connect: [{ id: wspinaczka.id }, { id: survival.id }] },
},
{
    name: "Elastyczne spodnie",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Przewiewne koszulki",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Kurtka przeciwdeszczowa/wiatrówka",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Plecak wspinaczkowy",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Bidon",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Bukłak",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Energetyczne przekąski",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Środki do oczyszczania wody",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Mapy wspinaczkowe",
    categories: { connect: [{ id: wspinaczka.id }] },
},
{
    name: "Przewodniki wspinaczkowe",
    categories: { connect: [{ id: wspinaczka.id }] },
}







// ACTIVE Bieganie
{
    name: "Buty do biegania",
    categories: { connect: [{ id: obuwie_biegowe.id }, {id: bieganie.id}] },
},
{
    name: "Koszulki biegowe",
    categories: { connect: [{ id: ubrania_biegowe.id }] },
},
{
    name: "Spodenki biegowe",
    categories: { connect: [{ id: ubrania_biegowe.id }] },
},
{
    name: "Legginsy biegowe",
    categories: { connect: [{ id: ubrania_biegowe.id }] },
},
{
    name: "Bielizna sportowa",
    categories: { connect: [{ id: ubrania_biegowe.id }] },
},
{
    name: "Skarpety do biegania",
    categories: { connect: [{ id: ubrania_biegowe.id }] },
},
{
    name: "Czapka biegowa",
    categories: { connect: [{ id: akcesoria_biegowe.id }] },
},
{
    name: "Opaska na głowę",
    categories: { connect: [{ id: akcesoria_biegowe.id }] },
},
{
    name: "Rękawiczki biegowe (cienkie)",
    categories: { connect: [{ id: akcesoria_biegowe.id }] },
},
{
    name: "Kurtka biegowa",
    categories: { connect: [{ id: ubrania_biegowe.id }] },
},
{
    name: "Pasek na numer startowy",
    categories: { connect: [{ id: akcesoria_biegowe.id }] },
},
{
    name: "Plecak biegowy",
    categories: { connect: [{ id: akcesoria_biegowe.id }] },
},
{
    name: "Opaski kompresyjne",
    categories: { connect: [{ id: akcesoria_biegowe.id }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: jedzenie.id}, { id: zeglarstwo.id }, { id: winsurfing.id }, { id: nurkowanie.id }, { id: sport.id }] },
},
{
    name: "Izotonik w proszku",
    categories: { connect: [{ id: zywienie.id }] },
},
{
    name: "Batony energetyczne",
    categories: { connect: [{ id: zywienie.id }] },
},
{
    name: "Żele energetyczne",
    categories: { connect: [{ id: zywienie.id }] },
},
{
    name: "Słuchawki bezprzewodowe",
    categories: { connect: [{ id: elektronika.id }] },
},
{
    name: "Środki przeciw otarciom",
    categories: { connect: [{ id: zdrowie.id }] },
},
{
    name: "Mapy i plany tras biegowych",
    categories: { connect: [{ id: podrozne.id }] },
}





// ACTIVE Żeglarstwo
{
    name: "Kurtka żeglarska",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Spodnie żeglarskie",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Buty żeglarskie",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Rękawiczki żeglarskie",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Czapka z daszkiem",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Bandana",
    categories: { connect: [{ id: zeglarstwo.id }, { id: joga.id }] },
},
{
    name: "Okulary przeciwsłoneczne",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Warstwy termiczne",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Kamizelka ratunkowa",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Ręczniki szybkoschnące",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Mapy nawigacyjne",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Kompas",
    categories: { connect: [{ id: zeglarstwo.id }, { id: survival.id }] },
},
{
    name: "Lornetka",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Nóż żeglarski",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Latarka czołowa",
    categories: { connect: [{ id: zeglarstwo.id }, { id: survival.id }] },
},
{
    name: "GPS",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Ploter nawigacyjny",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: jedzenie.id}, { id: zeglarstwo.id }, { id: winsurfing.id }, { id: nurkowanie.id }, { id: sport.id }] },
},
{
    name: "Prowiant",
    categories: { connect: [{ id: zeglarstwo.id }] },
},
{
    name: "Worki wodoszczelne",
    categories: { connect: [{ id: zeglarstwo.id }] },
}






// ACTIVE Windsurfing
{
    name: "Deska windsurfingowa",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Żagiel do windsurfingu",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Boom do windsurfingu",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Uprząż windsurfingowa",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Pianka neoprenowa",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Buty neoprenowe",
    categories: { connect: [{ id: windsurfing.id }, {id: morsowanie.id}] },
},
{
    name: "Rękawiczki neoprenowe",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Wiatrówka",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Strój kąpielowy",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Ręcznik szybkoschnący",
    categories: { connect: [{ id: windsurfing.id }, { id: nurkowanie.id }] },
},
{
    name: "Zegarek wodoszczelny",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: jedzenie.id}, { id: zeglarstwo.id }, { id: winsurfing.id }, { id: nurkowanie.id }, { id: sport.id }] },
},
{
    name: "Batony energetyczne",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Energetyk w proszku",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Plecak lub torba",
    categories: { connect: [{ id: windsurfing.id }, { id: nurkowanie.id }] },
},
{
    name: "Kurs windsurfingu",
    categories: { connect: [{ id: windsurfing.id }] },
},
{
    name: "Instruktor windsurfingu",
    categories: { connect: [{ id: windsurfing.id }] },
}





// ACTIVE Nurkowanie
{
    name: "Maska nurkowa",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Płetwy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Snorkel",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Skrzela (BCD)",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Regulator nurkowy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Kombinezon nurkowy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Komputer nurkowy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Butla z powietrzem",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Latarka nurkowa",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Nóż nurkowy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Boja z linią",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Ręcznik szybkoschnący",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Torba na sprzęt nurkowy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Aparat fotograficzny podwodny",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Woda",
    categories: { connect: [{ id: campingRodzinny.id }, {id: camping.id}, {id: jedzenie.id}, { id: zeglarstwo.id }, { id: winsurfing.id }, { id: nurkowanie.id }, { id: sport.id }] },
},
{
    name: "Przekąski energetyczne",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Certyfikat nurkowy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Dziennik nurkowy",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Ubezpieczenie nurkowe",
    categories: { connect: [{ id: nurkowanie.id }] },
},
{
    name: "Plecak lub torba",
    categories: { connect: [{ id: nurkowanie.id }] },
}






// ACTIVE Joga i medytacja
{
    name: "Mata do jogi",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Blok do jogi",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Pasek do jogi",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Poduszka do medytacji",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Koc do jogi",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Szal do jogi",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Wygodne ubrania do jogi",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Ciepłe ubrania",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Kapelusz",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Bandana",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Buty sportowe",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Słuchawki",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Butelka na wodę",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Książki o jodze i medytacji",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Muzyka relaksacyjna",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Dźwięki natury",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Plecak",
    categories: { connect: [{ id: joga.id }] },
},
{
    name: "Torba",
    categories: { connect: [{ id: joga.id }] },
}





// ACTIVE Survival
{
    name: "Plecak turystyczny",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Nóż survivalowy",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Multitool",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Koc ratunkowy",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Kompas",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Mapa terenu",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Latarka czołowa",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Wygodne, trwałe ubrania",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Buty trekkingowe",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Czapka",
    categories: { connect: [{ id: survival.id }, { id: snowboard.id }, { id: citybreak_zima.id }] },
},
{
    name: "Rękawiczki",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Szalik",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Kurtka przeciwdeszczowa",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Namiot",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Śpiwór",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Mata izolacyjna",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Kuchenka turystyczna",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Naczynia turystyczne",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Liofilizowane posiłki",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Butelka na wodę",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Tabletki do oczyszczania wody",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Apteczka pierwszej pomocy",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Środek przeciw kleszczom i komarom",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Biodegradowalne mydło",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Papier toaletowy",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Zapalniczka",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Bidony na wodę",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Gwizdek ratunkowy",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Siatka na owady",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Książka",
    categories: { connect: [{ id: survival.id }] },
},
{
    name: "Pakiet energetyczny",
    categories: { connect: [{ id: survival.id }] },
}






// ZIMA Narty
{
    name: "Narty i wiązania narciarskie",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Buty narciarskie",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Kijki narciarskie",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Gogle narciarskie",
    categories: { connect: [{ id: narty.id }, {id: trekking.id}] },
},
{
    name: "Kask narciarski",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Wosk do nart",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Kurtka narciarska",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Spodnie narciarskie",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Bielizna termiczna",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Spodnie termiczne",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Koszulka termiczna",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Polar / Bluza narciarska",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Skarpety narciarskie",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Rękawice narciarskie",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Czapka narciarska",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Szalik narciarski",
    categories: { connect: [{ id: narty.id }] },
},
{
    name: "Komin narciarski",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Maska na twarz narciarska",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Plecak narciarski",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Balsam do ust",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }, { id: snowboard.id }, {id: citybreak_zima.id}] },
},
{
    name: "Mapa tras narciarskich",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Kamera sportowa",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},





// ZIMA Snowboard
{
    name: "Snowboard",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Buty snowboardowe",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Wiązania snowboardowe",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Kask snowboardowy",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Gogle snowboardowe",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Pokrowiec na snowboard",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Kurtka snowboardowa",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Spodnie snowboardowe",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Koszulka termiczna",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Spodnie termiczne",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Bielizna termiczna",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Polar / Bluza snowboardowa",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Rękawice snowboardowe",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Skarpety snowboardowe",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Czapka",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }] },
},
{
    name: "Plecak snowboardowy",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Mapa tras snowboardowych",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Komin narciarski",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Maska na twarz narciarska",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Plecak narciarski",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Balsam na usta",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Mapa tras narciarskich",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Kamera sportowa",
    categories: { connect: [{ id: snowboard.id }] },
},
{
    name: "Balsam na usta",
    categories: { connect: [{ id: snowboard.id }] },
},







// ZIMA Citybreak
{
    name: "Ciepła kurtka",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Sweter",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Bluza",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Ciepłe spodnie",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Buty zimowe",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Czapka",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Szalik",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Rękawiczki",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Parasolka",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Termos",
    categories: { connect: [{ id: citybreak_zima.id }] },
},
{
    name: "Balsam do ust",
    categories: { connect: [{ id: narty.id }, { id: snowboard.id }, { id: snowboard.id }, {id: citybreak_zima.id}] },
}





]
