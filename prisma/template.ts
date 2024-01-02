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
    categories: { connect: [{ id: odziez.id }] },
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
    categories: { connect: [{ id: odziez.id }] },
},
{
    name: "Kapelusz",
    categories: { connect: [{ id: odziez.id }] },
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
    categories: { connect: [{ id: odziez.id }] },
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
    categories: { connect: [{ id: odziez.id }] },
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
    categories: { connect: [{ id: plaza.id }, {id: sport.id}, {id: plywanie.id}, {id: allinclusive.id}] },
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
    categories: { connect: [ {id: allinclusive.id}, {id: plaza.id}] },
},
{
    name: "Przewodnik po okolicy",
    categories: { connect: [ {id: allinclusive.id}] },
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
    categories: { connect: [{ id: tropikalnaWyspa.id }] },
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
    categories: { connect: [{ id: trekking.id } ] },
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
    categories: { connect: [{ id: trekking.id }] },
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
    categories: { connect: [{ id: trekking.id }] },
},
{
    name: "Rękawice cienkie 2x",
    categories: { connect: [{ id: trekking.id }] },
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





// Safari
Lekkie, przewiewne ubrania - w kolorach neutralnych, aby nie przyciągać uwagi dzikich zwierząt.
Ciepłe ubrania na wieczór - wieczory i poranki mogą być chłodne.
Długie spodnie i długie rękawy - ochrona przed słońcem i owadami.
Wygodne obuwie trekkingowe - na wycieczki po parkach narodowych.
Kapelusz z szerokim rondem - ochrona przed słońcem.
Okulary przeciwsłoneczne.
Bielizna - włącznie z bielizną termoaktywną na chłodniejsze dni.
Kurtka przeciwdeszczowa lub płaszcz przeciwdeszczowy.
Sprzęt i Akcesoria
Lornetka - niezbędna do obserwacji dzikich zwierząt z daleka.
Plecak na wycieczki - na wodę, przekąski, aparat fotograficzny.
Butelka na wodę - najlepiej wielokrotnego użytku.
Przewodnik po dzikiej przyrodzie - aby łatwiej rozpoznawać zwierzęta i rośliny.
Elektronika
Aparat fotograficzny z dobrym zoomem - do fotografowania zwierząt z bezpiecznej odległości.
Dodatkowe karty pamięci i baterie/akumulator do aparatu.
Smartfon i ładowarka.
Power bank.
Zdrowie i Higiena
Apteczka pierwszej pomocy - plastry, środki przeciwbólowe, środki na alergię.
Repelent na komary.
Krem z filtrem UV.
Artykuły higieniczne - szczoteczka do zębów, pasta, żel pod prysznic.
Dokumenty i Inne
Dokumenty podróżne - paszport, wiza (jeśli jest wymagana), bilety lotnicze.
Ubezpieczenie podróżne - upewnij się, że obejmuje aktywności na safari.
Gotówka - szczególnie w małych nominałach, przydatna na napiwki i drobne wydatki.
Notatnik i długopis - do zapisywania obserwacji i wrażeń.
Różne
Książki/e-booki - na relaks w czasie przerw w safari.
Przenośny wentylator - jeśli wybierasz się w gorącym sezonie.
Zestaw do czyszczenia sprzętu fotograficznego - aby utrzymać aparat w dobrej kondycji.





// Objazdówka
odstawowe Wyposażenie Samochodu
Dokumenty samochodu - dowód rejestracyjny, ważne ubezpieczenie.
Prawo jazdy i dokumenty tożsamości wszystkich pasażerów.
Zestaw narzędzi do samochodu - klucz do kół, lewarek.
Koło zapasowe lub zestaw naprawczy do opon.
Trójkąt ostrzegawczy i kamizelki odblaskowe.
Latarka i baterie zapasowe.
Odzież i Obuwie
Wygodne ubrania na podróż - preferowane są warstwy, które łatwo się ściąga i zakłada.
Dodatkowe ubrania - w zależności od pogody i długości podróży.
Buty wygodne do prowadzenia i na spacery.
Kapelusz lub czapka - ochrona przed słońcem.
Okulary przeciwsłoneczne.
Jedzenie i Płyny
Przekąski - orzechy, owoce, batony energetyczne.
Woda i napoje - najlepiej w termosie lub butelkach wielokrotnego użytku.
Lodówka turystyczna - jeśli planujesz dłuższe przerwy na posiłki.
Elektronika i Rozrywka
Ładowarka samochodowa i kable do telefonów.
Smartfon i/lub nawigacja GPS.
Muzyka, audiobooki, podcasty - na długie godziny w drodze.
Power bank.
Zdrowie i Higiena
Apteczka pierwszej pomocy.
Artykuły higieniczne - chusteczki nawilżane, żel antybakteryjny, papier toaletowy.
Krem z filtrem UV - szczególnie ważny podczas długich podróży w słoneczne dni.
Nocleg i Wypoczynek
Namiot i śpiwór - jeśli planujesz nocleg na kempingu.
Poduszka podróżna i koc - dla komfortu podczas jazdy.
Latarka czołowa - przydatna podczas noclegów na kempingu.
Nawigacja i Planowanie
Mapy papierowe - jako zapas do nawigacji elektronicznej.
Notatnik i długopis - do zapisywania ważnych informacji i planowania trasy.
Różne
Torba na śmieci - aby utrzymać porządek w samochodzie.
Karty do gry, planszówki - na przerwy i wieczory.
Fotelik dla dziecka - jeśli podróżujesz z małymi dziećmi.




// Afryka / Egipt
Odzież i Obuwie
Lekkie i przewiewne ubrania - z naturalnych materiałów jak bawełna lub len.
Ubrania z długimi rękawami i nogawkami - dla ochrony przed słońcem i owadami.
Kapelusz lub czapka z daszkiem - ochrona przed intensywnym słońcem.
Okulary przeciwsłoneczne.
Wygodne buty - najlepiej zamknięte, na wycieczki i spacery.
Sandały - na cieplejsze dni.
Stroje kąpielowe - jeśli planujesz korzystać z basenu lub plaży.
Lekka kurtka lub bluza - na chłodniejsze wieczory.
Bielizna i skarpetki - dostosowane do klimatu.
Zdrowie i Higiena
Krem z filtrem UV - o wysokim faktorze ochrony.
Repelent na komary - szczególnie ważne w regionach zagrożonych malarią.
Apteczka pierwszej pomocy - plastry, środki przeciwbólowe, środki przeciw alergii, leki na biegunkę.
Artykuły higieniczne - szczoteczka i pasta do zębów, szampon, mydło.
Środki higieny intymnej - w zależności od indywidualnych potrzeb.
Leki osobiste - jeśli są regularnie stosowane.
Elektronika
Aparat fotograficzny lub kamera - do utrwalania wspomnień.
Smartfon i ładowarka.
Power bank.
Adapter do gniazdka elektrycznego - w zależności od typu używanego w danym kraju.
Dokumenty i Inne
Paszport - z ważną wizą, jeśli jest wymagana.
Bilety lotnicze i potwierdzenia rezerwacji.
Ubezpieczenie podróżne - upewnij się, że obejmuje specyfikę podróży do Afryki/Egiptu.
Kopie dokumentów - w razie ich utraty lub kradzieży.
Gotówka - najlepiej w lokalnej walucie, oraz karty płatnicze.
Na Safari (jeśli dotyczy)
Lornetka - do obserwacji dzikich zwierząt.
Neutralne kolory ubrań - zieleń, beż, brąz, aby nie przyciągać uwagi zwierząt.
Torba na kurze i pył - do ochrony aparatu i elektroniki.
Różne
Słownik lub przewodnik po języku - podstawowe zwroty w lokalnym języku mogą być bardzo pomocne.
Notatnik i długopis - do zapisywania wrażeń i ważnych informacji.
Książki, e-booki, muzyka - na relaks w czasie przerw.




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
    name: "Ubezpieczenie",
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
    categories: { connect: [{ id: elektronika.id }]},
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




// Samochód
{
    name: "Rozdzielacz USB - zapalniczka",
    categories: { connect: [{ id: car.id }]},
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
    categories: { connect: [{ id: higiena.id }] },
},
{
    name: "Ręcznik",
    categories: { connect: [{ id: higiena.id }] },
},
{
    name: "Klapki pod prysznic",
    categories: { connect: [{ id: higiena.id }, { id: odziez.id }] },
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
    categories: { connect: [{ id: camping.id }, {id: spanie.id}] },
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
}




// Camping rodzinny
Sprzęt Kempingowy
Namiot - wystarczająco duży dla całej rodziny.
Śpiwory - dostosowane do warunków pogodowych.
Maty izolacyjne lub materace nadmuchiwane.
Lampki kempingowe i latarki - wraz z zapasowymi bateriami lub akumulatorami.
Krzesła i stół kempingowy - dla wygody przy posiłkach i relaksie.
Sprzęt do gotowania na kempingu - przenośny grill, kuchenka gazowa, naczynia, sztućce, garnki.
Zestaw narzędzi kempingowych - młotek do śledzi, nóż, śrubokręt.
Odzież i Obuwie
Ubrania na różne warunki pogodowe - warstwy ubrań, które łatwo się ściąga i zakłada.
Kurtki przeciwdeszczowe lub płaszcze.
Ciepłe ubrania na chłodne noce - swetry, bluzy.
Obuwie wygodne - do chodzenia po terenie kempingu i wycieczek.
Kapelusz lub czapka - ochrona przed słońcem.
Stroje kąpielowe - jeśli jest basen lub jezioro.
Klapki do prysznica.
Jedzenie i Płyny
Zapasowe jedzenie - konserwy, makarony, przekąski, produkty łatwe w przechowywaniu.
Woda pitna - szczególnie ważne, jeśli na kempingu nie ma dostępu do czystej wody.
Chłodna torba - do przechowywania świeżych produktów.
Zdrowie i Higiena
Apteczka pierwszej pomocy - plastry, środki przeciwbólowe, środki na alergię, preparaty na ukąszenia owadów.
Artykuły higieniczne - papier toaletowy, ręczniki, mydło, szampon.
Środki przeciw komarom i kleszczom.
Krem z filtrem UV.
Dla Dzieci
Zabawki i gry - do zabawy na świeżym powietrzu.
Nosidełko lub wózek terenowy - dla małych dzieci.
Kojec podróżny - jeśli podróżujesz z małymi dziećmi.
Dziecięce środki przeciwsłoneczne i repelenty.
Inne
Worki na śmieci - do utrzymywania czystości na kempingu.
Zapalniczka lub zapałki.
Książki, karty, gry planszowe - na wieczorne rozrywki.
Smartfon i ładowarka - najlepiej z power bankiem.
Mapy i informacje o regionie - jeśli planujesz wycieczki.
Sprzęt Dodatkowy (opcjonalnie)
Kajak, rowery - jeśli planujesz aktywności na świeżym powietrzu.
Parasol plażowy i maty - jeśli będziecie spędzać czas na plaży.



// Jedzenie
{
    name: "Woda",
    categories: { connect: [{ id: jedzenie.id }] },
},
{
    name: "Makarony",
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
    name: "Konserwy",
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
    categories: { connect: [{ id: inne.id }] },
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
    name: "Płaszcz",
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
    categories: { connect: [{ id: sport.id }] },
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
    categories: { connect: [{ id: sport.id }] },
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


// SPORT [prysznic]
{
    name: "Ręcznik pod prysznic",
    categories: { connect: [{ id: sport.id }] },
},
{
    name: "Butelka z wodą",
    categories: { connect: [{ id: sport.id }]},
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
smoczek,
ulubiona zabawka,
pieluszki standardowe,
pieluszki wodoodporne (jeżeli planujesz z dzieckiem pływać),
chusteczki nawilżone,
nakrycie głowy,
odzież UV,
krem z filtrem przeciwsłonecznym (SPF50 lub SPF70),
butelkę do mleka,
mleko modyfikowane lub kaszkę (zależy ile miesięcy ma niemowlę),
śliniak,
leki przeciwgorączkowe,
leki przeciwbólowe,
sól fizjologiczną w jednorazowych ampułkach,
termometr,
plastry,
żel na ząbkowanie,
żel na ukąszenia owadów,
niania elektroniczna.






// Dzieci
apteczka,
artykuły higieniczne,
ubrania UV,
buty do wody,
zabawki na plażę,
książeczki, kolorowanki lub gry (w razie złej pogody),
akcesoria plażowe np. składany, lekki namiot,
okulary przeciwsłoneczne,
butelki z filtrem na wodę.





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
    categories: { connect: [{ id: sport.id }, {id: morsowanie.id}] },
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
    categories: { connect: [{ id: sport.id }, { id: joga.id }] },
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
    categories: { connect: [{ id: sport.id }, { id: wspinaczka.id }] },
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
    categories: { connect: [{ id: sport.id }] },
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
Sprzęt Rowerowy
Rower - odpowiednio przystosowany do planowanych tras (szosowy, MTB, trekkingowy).
Kask rowerowy - dla bezpieczeństwa.
Zestaw naprawczy - dętki, łatki, pompka, narzędzia wielofunkcyjne, zapasowe łańcuch.
Oświetlenie rowerowe - przednie i tylne lampki.
Bidon na wodę lub system hydratacyjny.
Błotniki - jeśli planujesz jazdę w deszczowe dni.
Zamki rowerowe - do zabezpieczenia roweru.
Odzież Rowerowa
Strój kolarski - koszulka, spodenki z wkładką, rękawiczki.
Buty rowerowe - odpowiednie do pedałów.
Kurtka przeciwdeszczowa/wiatrówka.
Warstwy termiczne - na chłodniejsze dni.
Okulary przeciwsłoneczne.
Czapka pod kask lub opaska na głowę.
Skarpetki rowerowe.
Akcesoria i Narzędzia
Sakwy rowerowe lub plecak - do przewożenia rzeczy.
GPS rowerowy lub licznik - do śledzenia tras i dystansu.
Mapy i plany tras - w formie papierowej lub elektronicznej.
Zestaw pierwszej pomocy - plastry, bandaże, środki przeciwbólowe.
Telefon komórkowy i ładowarka - najlepiej z power bankiem.
Żywność i Płyny
Przekąski energetyczne - batony, żele, orzechy.
Woda - duża ilość, aby uniknąć odwodnienia.
Posiłki - jeśli planujesz gotowanie na kempingu.
Higiena i Komfort
Krem z filtrem UV.
Środki higieniczne - mydło, pasta do zębów, szczoteczka.
Ręcznik szybkoschnący.
Środki przeciw owadom.
Dla Noclegu (jeśli dotyczy)
Namiot, śpiwór, mata termiczna - jeśli planujesz nocleg na kempingu.
Lampka kempingowa lub latarka.
Sprzęt do gotowania - kuchenka turystyczna, naczynia, sztućce.
Różne
Notatnik i długopis - do zapisywania wrażeń.
Książki, e-booki, muzyka - na wieczorne relaksy.
Zestaw do czyszczenia roweru - szczotki, środki do smarowania łańcucha.




// ACTIVE wspinaczka
Sprzęt Wspinaczkowy
Uprząż wspinaczkowa - dobrze dopasowana i komfortowa.
Kask wspinaczkowy - dla ochrony głowy.
Karabinki, ekspresy - podstawowe wyposażenie do asekuracji.
Lina wspinaczkowa - odpowiednia do planowanych dróg.
Przyrząd asekuracyjny - np. ATC lub GriGri.
Buty wspinaczkowe - dobrze dopasowane, specyficzne dla wspinaczki.
Magnesja - w woreczku lub pudełku.
Taśmy, pętle, przyrządy do zjazdów - w zależności od rodzaju wspinaczki.
Koc ratunkowy - na wypadek nagłych zmian pogody lub wypadku.
Odzież i Obuwie
Wygodne ubrania do wspinaczki - elastyczne spodnie, przewiewne koszulki.
Warstwy termiczne - bielizna termoaktywna, polar.
Kurtka przeciwdeszczowa/wiatrówka.
Czapka, szalik, rękawiczki - na chłodniejsze dni.
Buty trekkingowe - na podejścia i zejścia.
Okulary przeciwsłoneczne - ochrona przed intensywnym słońcem.
Akcesoria
Plecak wspinaczkowy - wygodny, z możliwością przymocowania sprzętu.
System hydratacyjny lub bidony na wodę.
Apteczka pierwszej pomocy - z podstawowymi lekami i materiałami opatrunkowymi.
Latarka czołowa - przydatna podczas wczesnych wyjść lub powrotów po zmroku.
Elektronika
Telefon komórkowy i ładowarka.
Power bank.
Aparat fotograficzny lub kamera - jeśli chcesz dokumentować swoje wspinaczki.
Żywność i Płyny
Energetyczne przekąski - batony, orzechy, suszone owoce.
Posiłki liofilizowane - jeśli planujesz noclegi w górach.
Środki do oczyszczania wody - tabletki lub filtr, jeśli źródło wody nie jest pewne.
Nocleg i Wypoczynek
Namiot górski - jeśli planujesz biwakowanie.
Śpiwór i mata termiczna - dostosowane do warunków.
Kuchenka turystyczna - do gotowania na biwakach.
Różne
Mapy i przewodniki wspinaczkowe - dla regionu, w którym będziesz się wspinać.
Dziennik wspinaczkowy - do zapisywania swoich osiągnięć.
Książki, e-booki, muzyka - na wieczory i odpoczynek.





// ACTIVE Bieganie
Odzież i Obuwie do Biegania
Buty do biegania - dobrze dopasowane, sprawdzone i wygodne.
Odzież biegowa - lekkie i oddychające koszulki, spodenki, legginsy.
Bielizna sportowa - zapewniająca wsparcie i komfort.
Skarpety do biegania - najlepiej bezszwowe, odprowadzające wilgoć.
Czapka lub opaska na głowę - ochrona przed słońcem lub chłodem.
Rękawiczki - jeśli planujesz biegać w chłodniejsze dni.
Kurtka biegowa - wiatroodporna i oddychająca, na chłodniejsze dni.
Akcesoria do Biegania
Pasek na numer startowy - jeśli planujesz udział w zawodach.
Zegarek sportowy lub smartband - do monitorowania aktywności i postępów.
Plecak biegowy lub pas z bidonami - do transportu wody i drobnych przedmiotów.
Opaski kompresyjne - dla wsparcia mięśni podczas dłuższych biegów.
Ochraniacze na kolana - jeśli są potrzebne ze względu na urazy.
Żywność i Płyny
Woda - do nawodnienia przed, w trakcie i po biegu.
Izotoniczne napoje sportowe - dla uzupełnienia elektrolitów.
Batony energetyczne lub żele - szybkie źródło energii podczas biegania.
Elektronika
Słuchawki - najlepiej bezprzewodowe, do słuchania muzyki lub audiobooków.
Telefon komórkowy - z aplikacjami do biegania.
Power bank - do ładowania urządzeń elektronicznych.
Zdrowie i Higiena
Apteczka pierwszej pomocy - plastry, bandaże, środek przeciwbólowy.
Krem z filtrem UV - ochrona przed słońcem.
Środki przeciw otarciom - kremy lub maści.
Środki higieniczne - mokre chusteczki, żel antybakteryjny.
Różne
Mapy i plany tras biegowych - szczególnie w nieznanej okolicy.
Notatnik i długopis - do zapisywania treningów i postępów.
Książki, e-booki, muzyka - na relaks po bieganiu.




// ACTIVE Żeglarstwo
Odzież i Obuwie Żeglarskie
Kurtka żeglarska - najlepiej wodoodporna i oddychająca.
Spodnie żeglarskie - wodoodporne, najlepiej z wysokim stanem.
Buty żeglarskie - antypoślizgowe, szybkoschnące.
Rękawiczki żeglarskie - dla lepszej przyczepności i ochrony dłoni.
Czapka z daszkiem lub bandana - ochrona przed słońcem i wiatrem.
Okulary przeciwsłoneczne - z paskiem, aby nie spadły do wody.
Warstwy termiczne - na chłodniejsze dni (bielizna termoaktywna, polar).
Kamizelka ratunkowa - obowiązkowe wyposażenie dla bezpieczeństwa.
Sprzęt Żeglarski i Akcesoria
Śpiwór - jeśli planujesz nocować na łodzi.
Ręczniki szybkoschnące.
Mapy nawigacyjne i kompas - dla tradycyjnych nawigatorów.
Lornetka - do obserwacji na wodzie.
Nóż żeglarski - z ostrzem i narzędziami pomocniczymi.
Latarka czołowa - przydatna na nocne zmiany.
Elektronika
Telefon komórkowy w wodoszczelnej obudowie i ładowarka.
Power bank.
GPS lub ploter nawigacyjny - jeśli dostępne na łodzi.
Aparat fotograficzny - do dokumentowania przygody.
Zdrowie i Higiena
Apteczka pierwszej pomocy - z podstawowymi lekami i materiałami opatrunkowymi.
Krem z filtrem UV - niezbędny podczas długich godzin na słońcu.
Środki przeciwbólowe i przeciwchorobowe - na wypadek choroby morskiej.
Artykuły higieniczne - szczoteczka do zębów, pasta, mydło, szampon.
Prowiant i Kuchnia
Woda pitna - w wystarczającej ilości.
Łatwe w przygotowaniu jedzenie - konserwy, makarony, przekąski.
Kuchenka gazowa lub elektryczna - jeśli jest dostępna na łodzi.
Naczynia i sztućce.
Różne
Worki wodoszczelne - na odzież i sprzęt elektroniczny.
Notatnik i długopis - do zapisywania nawigacyjnych notatek i wrażeń.
Książki, e-booki, muzyka - na czas relaksu.




// ACTIVE Windsurfing
Sprzęt Windsurfingowy
Deska windsurfingowa - odpowiednia dla Twojego poziomu umiejętności i warunków.
Żagiel - różne rozmiary w zależności od warunków wietrznych.
Boom (drążek) i maszt.
Uprząż - do długich sesji na wodzie.
Pianka neoprenowa - odpowiednia do temperatury wody.
Buty neoprenowe - ochrona stóp i lepsza przyczepność.
Rękawiczki neoprenowe - jeśli woda jest zimna lub dla ochrony dłoni.
Odzież i Akcesoria
Kurtka przeciwdeszczowa/wiatrówka - na czas poza wodą.
Strój kąpielowy - do noszenia pod pianką.
Czapka z daszkiem lub bandana - ochrona przed słońcem.
Okulary przeciwsłoneczne - najlepiej z paskiem, aby nie spadły do wody.
Ręcznik szybkoschnący.
Elektronika
Zegarek wodoszczelny - najlepiej z funkcją pomiaru czasu.
Aparat wodoszczelny lub kamera sportowa - do dokumentowania przygód.
Telefon komórkowy w wodoszczelnej obudowie i ładowarka.
Power bank.
Zdrowie i Higiena
Apteczka pierwszej pomocy - plastry, środki przeciwbólowe, bandaże.
Krem z filtrem UV - ochrona przed słońcem.
Balsam do ust - ochrona przed wiatrem i słońcem.
Środki higieniczne - mydło, szampon, szczoteczka i pasta do zębów.
Żywność i Płyny
Woda pitna - aby uniknąć odwodnienia.
Przekąski energetyczne - batony, orzechy, owoce.
Izotoniczne napoje sportowe - do uzupełnienia elektrolitów.
Różne
Plecak lub torba - do przenoszenia sprzętu i akcesoriów.
Mapy i informacje o miejscu - zwłaszcza jeśli to nowe miejsce windsurfingowe.
Notatnik i długopis - do zapisywania wrażeń i postępów.
Dla początkujących
Kurs windsurfingu - jeśli dopiero zaczynasz swoją przygodę.
Instruktor - dla poprawy umiejętności i bezpieczeństwa na wodzie.




// ACTIVE Nurkowanie
Sprzęt Nurkowy
Maska nurkowa - dobrze dopasowana, zapewniająca dobrą widoczność.
Płetwy - odpowiednie do stylu nurkowania i warunków wodnych.
Rurka do oddychania (snorkel) - przydatna podczas pływania na powierzchni.
Skrzela (BCD) - uprząż z balastem, która pozwala kontrolować pływalność.
Regulator - do oddychania pod wodą, z odpowiednimi wężykami.
Kombinezon nurkowy - neoprenowy, dostosowany do temperatury wody.
Komputer nurkowy - do monitorowania głębokości, czasu nurkowania i dekompresji.
Butelka z powietrzem - jeśli nie wypożyczasz na miejscu.
Dodatkowe Wyposażenie
Latarka nurkowa - w przypadku nurkowań w ciemnych miejscach lub nocnych.
Nóż nurkowy - jako środek bezpieczeństwa.
Boja z linią - do sygnalizacji pozycji na powierzchni.
Ręcznik szybkoschnący.
Torba na sprzęt nurkowy - wodoodporna, do przenoszenia sprzętu.
Odzież i Akcesoria
Lekka odzież - na czas poza wodą.
Kapelusz lub czapka - ochrona przed słońcem.
Okulary przeciwsłoneczne.
Wygodne obuwie - sandały lub klapki.
Elektronika
Aparat fotograficzny podwodny lub kamera - z wodoszczelną obudową.
Telefon komórkowy i ładowarka.
Power bank.
Zdrowie i Higiena
Apteczka pierwszej pomocy - z podstawowymi środkami opatrunkowymi.
Krem z filtrem UV - do stosowania przed i po nurkowaniu.
Środki higieniczne - mydło, szampon, dezodorant.
Żywność i Płyny
Woda pitna - aby uniknąć odwodnienia.
Przekąski energetyczne - do szybkiego uzupełnienia energii.
Dokumenty i Certyfikaty
Certyfikat nurkowy - jeśli masz uprawnienia.
Dziennik nurkowy - do zapisywania przebiegu nurkowań.
Ubezpieczenie nurkowe - sprawdź, czy obejmuje specyficzne ryzyka związane z nurkowaniem.
Różne
Plecak lub torba - na osobiste rzeczy i dokumenty.
Notatnik i długopis - do zapisywania wrażeń i szczegółów nurkowania.




// ACTIVE Joga i medytacja
Wyposażenie do Jogi i Medytacji
Mata do jogi - lekka i łatwa do transportu.
Blok do jogi i pasek - dla wsparcia w różnych pozycjach.
Poduszka do medytacji - dla wygodniejszego siedzenia w ciszy.
Koc lub szal - do przykrycia się podczas relaksacji lub medytacji.
Odzież
Wygodne ubrania do jogi - elastyczne legginsy, luźne spodnie, przewiewne koszulki.
Ciepłe ubrania - swetry, bluzy, szczególnie jeśli sesje odbywają się na zewnątrz lub wcześnie rano.
Kapelusz lub bandana - ochrona przed słońcem podczas praktyk na zewnątrz.
Buty sportowe - jeśli planujesz także aktywność fizyczną poza jogą.
Elektronika
Telefon komórkowy i ładowarka - może być używany do prowadzenia sesji z aplikacji jogi/medytacji.
Słuchawki - do słuchania muzyki relaksacyjnej lub prowadzonych medytacji.
Power bank - do ładowania urządzeń elektronicznych.
Zdrowie i Higiena
Butelka na wodę - aby utrzymać nawodnienie.
Krem z filtrem UV - jeśli planujesz praktykę na zewnątrz.
Artykuły higieniczne - naturalne mydło, szampon, dezodorant.
Ręcznik szybkoschnący.
Różne
Dziennik lub notatnik - do zapisywania myśli i refleksji.
Książki o jodze i medytacji - dla inspiracji i pogłębiania praktyki.
Muzyka relaksacyjna lub dźwięki natury - do stworzenia odpowiedniej atmosfery.
Plecak lub torba - na osobiste rzeczy i sprzęt do jogi.
Dla Początkujących
Instrukcje lub przewodniki - książki lub aplikacje dla osób zaczynających swoją przygodę z jogą i medytacją.




// ACTIVE Survival
Podstawowy Sprzęt Survivalowy
Plecak turystyczny - wytrzymały i pojemny.
Nóż survivalowy - najlepiej z dodatkowymi funkcjami.
Multitool - wszechstronne narzędzie wielofunkcyjne.
Koc ratunkowy - lekki, ale efektywnie utrzymujący ciepło.
Kompas - podstawowe narzędzie do nawigacji.
Mapa terenu - w wersji papierowej, na wypadek braku sygnału GPS.
Latarka czołowa - z dodatkowymi bateriami lub akumulatorem.
Odzież i Obuwie
Wygodne, trwałe ubrania - najlepiej w warstwach, dostosowane do warunków pogodowych.
Buty trekkingowe - dobrze wyprofilowane, wodoodporne.
Czapka, rękawiczki, szalik - na chłodniejsze noce i poranki.
Kurtka przeciwdeszczowa/wiatrówka.
Sprzęt Biwakowy
Namiot - lekki i łatwy w montażu.
Śpiwór - dostosowany do temperatury, w której będziesz spać.
Mata izolacyjna - do spania na twardym podłożu.
Wyposażenie do Gotowania
Kuchenka turystyczna - kompaktowa i przenośna.
Naczynia turystyczne - lekkie i łatwe do czyszczenia.
Proste, szybkie w przygotowaniu jedzenie - np. liofilizowane posiłki.
Butelka na wodę - najlepiej z filtrem.
Zdrowie i Higiena
Apteczka pierwszej pomocy - z podstawowymi lekami i bandażami.
Środek przeciw kleszczom i komarom.
Filtr do wody lub tabletki do oczyszczania wody.
Artykuły higieniczne - biodegradowalne mydło, papier toaletowy.
Pozostałe Akcesoria
Zapalniczka/Bidony na wodę - do rozpalania ogniska i przechowywania wody.
Gwizdek ratunkowy - na wypadek awaryjnych sytuacji.
Notatnik i długopis - do zapisywania ważnych informacji i refleksji.
Siatka na owady - jeśli będziesz w miejscu o dużej liczbie owadów.
Dodatkowo
Książki lub przewodniki survivalowe - do nauki i rozwijania umiejętności.
Pakiet energetyczny - batony energetyczne, orzechy.





// ZIMA Narty
Sprzęt Narciarski
Narty i wiązania narciarskie lub snowboard.
Buty narciarskie lub buty snowboardowe.
Kijki narciarskie.
Gogle narciarskie - ochrona przed słońcem i śniegiem.
Kask narciarski - dla bezpieczeństwa.
Wosk do nart - jeśli samodzielnie przygotowujesz narty.
Odzież Narciarska
Kurtka narciarska - najlepiej wodoodporna i oddychająca.
Spodnie narciarskie - również wodoodporne.
Warstwa termoaktywna - bielizna termiczna, która odprowadza wilgoć.
Polar lub inna ciepła warstwa pośrednia.
Skarpety narciarskie - długie, ciepłe, zapewniające komfort.
Rękawice narciarskie - najlepiej wodoodporne.
Czapka lub opaska na głowę - pod kask lub na czas po nartach.
Szalik, komin lub maska na twarz - ochrona przed zimnem.
Inne Akcesoria
Okulary przeciwsłoneczne - na słoneczne dni.
Plecak narciarski - na przekąski, wodę i dodatkowe warstwy ubrań.
Krem z filtrem UV - silne słońce na stokach może szybko spowodować oparzenia.
Balsam ochronny na usta.
Osobiste i Bezpieczeństwo
Dokumenty tożsamości i ubezpieczenie narciarskie.
Telefon komórkowy i ładowarka.
Apteczka pierwszej pomocy - plastry, środki przeciwbólowe, bandaże.
Gotówka i karty płatnicze.
Dla Dzieci (jeśli podróżujesz z dziećmi)
Kaski i gogle dla dzieci.
Dodatkowe ubrania na zmianę - dzieci szybciej przemakają i marzną.
Gry i zabawki - na czas poza stokiem.
Różne
Mapa tras narciarskich regionu, w którym będziesz jeździć.
Książki, e-booki, muzyka - na relaks po dniu na stoku.
Kamera sportowa - jeśli chcesz nagrywać swoje zjazdy.




// ZIMA Snowboard
Sprzęt Snowboardowy
Snowboard - odpowiednio dobrany do Twojego stylu jazdy i umiejętności.
Buty snowboardowe - dobrze dopasowane, zapewniające komfort i wsparcie.
Wiązania snowboardowe.
Kask snowboardowy - dla bezpieczeństwa.
Gogle snowboardowe - chroniące oczy przed śniegiem, wiatrem i promieniami UV.
Pokrowiec na snowboard - ułatwia transport sprzętu.
Odzież na Snowboard
Kurtka snowboardowa - najlepiej wodoodporna i oddychająca.
Spodnie snowboardowe - wodoodporne i wytrzymałe.
Warstwa bazowa - termoaktywna bielizna, która odprowadza wilgoć.
Warstwa izolacyjna - np. polar, dla dodatkowego ciepła.
Rękawice snowboardowe - wodoodporne, z dobrą izolacją.
Skarpety snowboardowe - ciepłe i komfortowe.
Czapka lub opaska - pod kask lub na relaks po jeździe.
Maska na twarz lub komin - ochrona przed mrozem.
Akcesoria Dodatkowe
Plecak snowboardowy - na wodę, przekąski i dodatkowe warstwy ubrań.
Krem z filtrem UV - silne słońce na stokach może szybko spowodować oparzenia.
Balsam ochronny na usta.
Osobiste i Bezpieczeństwo
Dokumenty tożsamości i ubezpieczenie sportowe.
Telefon komórkowy i ładowarka.
Apteczka pierwszej pomocy - plastry, środki przeciwbólowe, bandaże.
Dla Dzieci (jeśli podróżujesz z dziećmi)
Kaski i gogle dla dzieci.
Dodatkowe ubrania na zmianę - dzieci szybciej przemakają i marzną.
Zabawki i gry - na czas poza stokiem.
Różne
Mapa tras snowboardowych regionu, w którym będziesz jeździć.
Książki, e-booki, muzyka - na relaks po dniu na stoku.
Kamera sportowa - jeśli chcesz nagrywać swoje zjazdy.





// ZIMA Citybreak
Odzież i Obuwie
Ciepła kurtka - najlepiej puchowa lub z innym izolacyjnym wypełnieniem.
Warstwy ubrań - bielizna termoaktywna, swetry, bluzy.
Spodnie - wygodne, najlepiej ciepłe.
Buty zimowe - wodoodporne i izolujące.
Czapka, szalik, rękawiczki - niezbędne w chłodne dni.
Okulary przeciwsłoneczne - zwłaszcza jeśli śnieg odbija światło słoneczne.
Akcesoria
Plecak lub torba - na zakupy i niezbędne przedmioty podczas zwiedzania.
Parasolka - na wypadek śniegu lub deszczu.
Ciepła czapka i szalik - dla dodatkowej ochrony przed zimnem.
Termos - na gorące napoje, które pomogą Ci się ogrzać.
Elektronika
Smartfon i ładowarka - do nawigacji i robienia zdjęć.
Power bank - na dłuższe dni poza hotelem.
Adapter do gniazdka elektrycznego - jeśli podróżujesz za granicę.
Zdrowie i Higiena
Mała apteczka pierwszej pomocy - plastry, środki przeciwbólowe.
Krem nawilżający i balsam do ust - ochrona skóry przed zimnem.
Środki higieniczne - szczoteczka i pasta do zębów, dezodorant.
Dokumenty i Bezpieczeństwo
Dokumenty tożsamości i paszport - jeśli podróżujesz za granicę.
Portfel z gotówką i kartami.
Mapa miasta lub aplikacja z mapą - do łatwiejszego poruszania się.
Różne
Przewodnik po mieście - aby w pełni wykorzystać czas citybreaku.
Notatnik i długopis - do zapisywania ważnych informacji i wrażeń.
Książka lub e-book - na relaks w kawiarni lub w hotelu.






]




