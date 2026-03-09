# Webler-ticketing
A Webleres Junior Frontend fejlesztő képzésen egy JS alapú ticketing rendszer elkészítése

# A rendszernek tudnia kell az alábbiakat:
- problémát bejelenteni (leírást, bejelentő, [létrehozás dátuma - automatikus], [id - automatikusan], [státusz - automatikusan nyitott])
- problémára válaszolni és lezárni (válasz, [státusz - automatikusan lezárt]
- egy probléma jellemzői: id, leírás, bejelentő, létrehozás dátuma, válasz, státusz (nyitott, lezárt)
- a problémákat listázni (zöld - lezárt, piros - nyitott) és minden probléma mellett rákattintani a lezárás gombra
- problémákat szűrni (lezárt/nyitott, bejelentő neve)
- a problémák legyenek rendezhetőek dátuma alapján növekvőbe vagy csökkenőbe
- a hibajegyeket meg kell őrizni a localstorage-ben

# Taskosítás - apró részfeladatokra bontás
1) ticket class létrehozása (id - string(uuid), description - string, user - string, createdAt - Date, response - string, isClosed - bool)
2) ticket class-nak konstruktor készítése (paraméterek: description, user, kitöltendő a konstruktorban: id, createdAt, isClosed)
3) tickets tömb létrehozása
4) save függvény létrehozása
5) load függvény létrehozása
6) UI: táblázat létrehozása, ahol megjelennek a ticketek
7) display függvény létrehozása, amelyik kirajzolja a táblázatot

10) create függvény elkészítése: 2db input mezőt kikeres és példányosít egy ticketet a beírt adatokból és elhelyezi a tömbben
11) close függvény elkészítése: ez a függvény a felületről egy id paraméterrel lesz meghívva, ezen id-hoz tartozó ticketet ki kell keresni a tömbből és beleírni a választ és lezárttá tenni


