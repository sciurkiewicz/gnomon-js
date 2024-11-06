// Tablica do losowania imion - uzupełnij własnymi imionami
const imiona = [


        // Gockie
        "Alaric", "Amalric", "Athalaric", "Vidar", "Eberulf", "Gunther", "Theoderic", "Gisli", "Valdar", "Sigismund",
        "Thrand", "Wulfram", "Thorir", "Radgais", "Amalar", "Hunferth", "Athalwolf", "Ragnar", "Beowulf", "Fridrek",
        "Baldarich", "Ansgar", "Vilmar", "Aldrad", "Roderic", "Wulfgar", "Geirod", "Ardgar", "Vidrik", "Gotram",
        "Gunter", "Haraldr", "Alrek", "Ermanaric", "Sigurd", "Arnfinn", "Sigvald", "Ingvar", "Vidkun", "Svanhildr",
        
        // Germańskie
        "Armin", "Baldur", "Leif", "Knut", "Sigrid", "Thidrek", "Wulfstan", "Eirik", "Thorsten", "Gunnar",
        "Berengar", "Oswin", "Dagmar", "Frederik", "Ulf", "Harald", "Gerhard", "Helmut", "Konrad", "Roderick",
        "Rudiger", "Werner", "Dietrich", "Guntram", "Hartwin", "Leopold", "Ottokar", "Reinhold", "Sigmar", "Volker",
        "Erhard", "Folke", "Gustav", "Egbert", "Dietmar", "Engelbert", "Herman", "Bernhard", "Reinhardt", "Wilhelm",
        "Wigbert", "Lothar", "Rudolf", "Hartmut", "Wolfgang", "Arnfried", "Sigismund", "Adelbert", "Gerulf", "Hrothgar",
        
        // Celtyckie
        "Aidan", "Cillian", "Conan", "Eoghan", "Finn", "Lugh", "Padrig", "Rowan", "Taliesin", "Cian",
        "Fergus", "Lir", "Angus", "Ronan", "Niall", "Oisin", "Donovan", "Keiran", "Ciaran", "Diarmuid",
        "Colm", "Cathal", "Donnchadh", "Dylan", "Eamon", "Fionn", "Gawain", "Ivor", "Malachy", "Morgan",
        "Owain", "Parthalán", "Tadhg", "Turlough", "Uilliam", "Artair", "Brychan", "Culhwch", "Daithi", "Dewi",
        "Emrys", "Fiachra", "Gareth", "Gwydion", "Idris", "Lochlann", "Macsen", "Nevan", "Riordan", "Ruadhri",
        "Seamus", "Uther", "Brogan", "Cathmor", "Cormac", "Odran", "Torin", "Caedmon", "Galvyn", "Cathair",
      
        // Słowiańskie
        "Bogdan", "Dobrosław", "Mirosław", "Jarosław", "Radosław", "Dragomir", "Radomir", "Svetomir", "Władysław", "Vladan",
        "Radek", "Zbyszek", "Wiesław", "Lubomir", "Sławomir", "Witold", "Borzygniew", "Ziemowit", "Zdzisław", "Kazimierz",
        "Dobrogost", "Gniewomir", "Leszek", "Mieczysław", "Przemysław", "Bolesław", "Siemomysł", "Wacław", "Krzysztof", "Ścibor",
        "Bronimir", "Zbygniew", "Zygfryd", "Gniewko", "Bogusław", "Rostislav", "Stanisław", "Jaromir", "Radomil", "Witosław",
        "Sławomir", "Żytomir", "Dobrywoj", "Włodzimierz", "Miłosław", "Krzesisław", "Radovan", "Mścibor", "Olgierd", "Jarema",
        "Lubomysł", "Władomir", "Przedsław", "Wojsław", "Swiatopolk", "Zadruga", "Wojciech", "Żyrosław", "Świętomir", "Sambor",
        "Borysław", "Mirosław", "Witosław", "Dobromir", "Gniewosz", "Bożydar", "Strachota", "Jarek", "Zbigniew", "Czcibor",
      
            // Gockie
            "Amala", "Gisela", "Hilda", "Bertha", "Roswitha", "Theodelinda", "Ermina", "Fredegund", "Gundrada", "Swanhild",
            "Elswida", "Alftruda", "Gerlinda", "Ragnhilda", "Ostrogotha", "Arianna", "Vilhelma", "Wulfilda", "Alvilda", "Gotelina",
            "Gotilda", "Teodilda", "Ermingard", "Aldgisa", "Arilda", "Rothruda", "Frigga", "Wandilgard", "Otterlinda", "Rosmunda",
          
            // Germańskie
            "Adelheid", "Brunhild", "Freyja", "Ida", "Inga", "Frida", "Hildegard", "Bertha", "Sigrun", "Astrid", 
            "Gudrun", "Elfriede", "Hedwig", "Ermengarde", "Gerlinde", "Alfhild", "Hulda", "Ragna", "Leofwen", "Alwine",
            "Adela", "Edwina", "Isolde", "Hilda", "Irmingard", "Margrit", "Wilhelmine", "Elsbeth", "Luitgard", "Siglinde", 
            "Mathilda", "Irmina", "Gertrud", "Iduna", "Ragnhild", "Swanhilde", "Berengaria", "Oda", "Gisela", "Bodil",
          
            // Celtyckie
            "Brigid", "Niamh", "Maeve", "Grainne", "Aoife", "Siobhan", "Rhiannon", "Eithne", "Fionnuala", "Deirdre", 
            "Caitlin", "Ailbhe", "Morwenna", "Morgana", "Orlaith", "Saoirse", "Tara", "Enya", "Aine", "Morna",
            "Caoimhe", "Aislinn", "Sinead", "Blathnaid", "Fiadh", "Etain", "Sorcha", "Branwen", "Bronagh", "Carwen", 
            "Dervla", "Ealasaid", "Ferelith", "Lynette", "Nessa", "Maebh", "Carys", "Dilys", "Gwynn", "Isolde",
            "Nerys", "Nesta", "Alana", "Danu", "Eluned", "Keridwen", "Llinos", "Olwen", "Tanith", "Yseult",
          
            // Słowiańskie
            "Bożena", "Milena", "Ludmila", "Svetlana", "Vesna", "Radmila", "Zofia", "Bronisława", "Jadwiga", "Wanda", 
            "Dobromiła", "Danuta", "Żywia", "Mirosława", "Bogusława", "Jaromira", "Radosława", "Lubomira", "Stanislawa", "Krasimira",
            "Dobromira", "Zdzisława", "Jarogniewa", "Kwitomira", "Sławomira", "Zorica", "Przemysława", "Mieczysława", "Borzysława", "Wisława",
            "Lechosława", "Dobrzyca", "Sławomira", "Żywia", "Bronimira", "Czesława", "Mirogniewa", "Więcesława", "Świętosława", "Dobromira",
            "Włodzimira", "Radogosta", "Wacława", "Stronisława", "Radzimira", "Dobiesława", "Krzesława", "Miłosława", "Witosława", "Jasna"
          
];

// Tablice z dostępnymi opcjami broni i ekwipunku
const bronie = [
    "Miecz krótki 1d6",
    "Miecz długi 1d8",
    "Topór bojowy 1d12",
    "Toporek 1d6",
    "Sztylet 1d4",
    "Kusza ręczna 1d6",
    "Kusza ciężka 1d10",
    "Łuk krótki 1d6",
    "Łuk długi 1d8",
    "Włócznia 1d6",
    "Maczuga 1d6",
    "Młot bojowy 1d8",
    "Młot dwuręczny 1d10",
    "Buława 1d8",
    "Pika 1d10",
    "Rapier 1d8",
    "Kij bojowy 1d6",
    "Kij długi 1d8",
    "Proca 1d4",
    "Trójząb 1d6",
    "Halabarda 1d10",
    "Korbacz 1d8",
    "Bat 1d4",
    "Kosa 1d10",
    "Szabla 1d8",
    "Miecz dwuręczny 2d6",
    "Maczuga ciężka 1d8",
    "Berdysz 2k6"
];
const ekwipunek = [
    "Ubranie podróżnika KP 9",            // 8 + 1
    "Zwykłe ubranie KP 8",           // 8 + 0
    "Zbroja skórzana KP 10",         // 8 + 2
    "Zbroja ćwiekowana KP 11",       // 8 + 3
    "Kolczuga KP 13",                // 8 + 5
    "Zbroja kolcza KP 12",           // 8 + 4
    "Zbroja płytowa KP 16",          // 8 + 8
    "Zbroja półpłytowa KP 15",       // 8 + 7
    "Zbroja łuskowa KP 14",          // 8 + 6
    "Zbroja pełna KP 18",            // 8 + 10
    "Kaftan ćwiekowany KP 10",       // 8 + 2
    "Napierśnik KP 14",              // 8 + 6
    "Zbroja elastyczna KP 13",       // 8 + 5
    "Zbroja magiczna KP 15",         // 8 + 7
    "Kaftan skórzany KP 9",          // 8 + 1
    "Zbroja lekka KP 10",            // 8 + 2
    "Zbroja rycerska KP 17",         // 8 + 9
    "Kaftan płócienny KP 9",         // 8 + 1
    "Kaftan kolczy KP 12",           // 8 + 4
    "Napierśnik żelazny KP 13",      // 8 + 5
    "Płaszcz ochronny KP 9"          // 8 + 1
];

const przedmiotyWartosciowe = [
    "Pierścień z rubinem 100 SZ",
    "Naszyjnik z szafirem 150 SZ",
    "Starożytny medalion 200 SZ",
    "Złota bransoleta 75 SZ",
    "Szlachetny diament 500 SZ",
    "Korona króla 1000 SZ",
    "Srebrny kielich 80 SZ",
    "Szmaragdowy amulet 250 SZ",
    "Złoty miecz ceremonialny 300 SZ",
    "Zbroja rytualna 400 SZ",
    "Złota broszka 60 SZ",
    "Kamień filozoficzny 1000 SZ",
    "Złoty zegarek kieszonkowy 120 SZ",
    "Złoty medalion z wygrawerowaną różą 90 SZ",
    "Perłowy naszyjnik 200 SZ",
    "Ręcznie zdobiona tiara 150 SZ",
    "Kryształowa kula 180 SZ",
    "Amulet ochrony 220 SZ",
    "Puchar z wizerunkiem smoka 110 SZ",
    "Starożytna mapa skarbów 300 SZ",
    "Szafirowa brosza 130 SZ",
    "Złota figurka smoka 160 SZ",
    "Oprawiony w srebro topaz 95 SZ",
    "Naszyjnik z wizerunkiem feniksa 210 SZ",
    "Smocze oko - kamień magiczny 450 SZ",
    "Złote pióro 85 SZ",
    "Złoty sygnet z herbem 140 SZ",
    "Kryształowy diadem 400 SZ",
    "Rubinowy pierścień z magicznymi runami 350 SZ",
    "Złoty kielich ozdobiony diamentami 600 SZ",
    "Pierścień z rubinem 100 SZ",
    "Naszyjnik z szafirem 150 SZ",
    "Starożytny medalion 200 SZ",
    "Złota bransoleta 75 SZ",
    "Szlachetny diament 500 SZ",
    "Srebrna łyżka 10 SZ",
    "Miska porcelanowa 8 SZ",
    "Skóra wilka 15 SZ",
    "Koc z wełny 5 SZ",
    "Amulet z drewna dębowego 12 SZ",
    "Zwykły naszyjnik ze szkła 4 SZ",
    "Worek ziół leczniczych 7 SZ",
    "Kawałek bursztynu 9 SZ",
    "Kryształ górski 6 SZ",
    "Złoty sygnet z herbem 140 SZ",
    "Porcelanowy kubek 3 SZ",
    "Ręcznie robiony gliniany wazon 5 SZ",
    "Stare pergaminowe zwoje 6 SZ",
    "Srebrna zapinka do płaszcza 20 SZ",
    "Skóra niedźwiedzia 25 SZ",
    "Naszyjnik z muszelek 3 SZ",
    "Ozdobna fajka z drewna 10 SZ",
    "Kawałek węgla 1 SZ",
    "Skrzynka na biżuterię z mosiądzu 18 SZ",
    "Miedziana bransoleta 8 SZ",
    "Zwykły szklany koralik 1 SZ",
    "Kostur z hebanu 30 SZ",
    "Kawałek futra lisa 7 SZ",
    "Srebrny pierścionek 15 SZ",
    "Płócienna torba 2 SZ",
    "Ceramiczny dzbanek 5 SZ",
    "Skóra jelenia 20 SZ",
    "Szpila z kości słoniowej 12 SZ",
    "Pióro sokola 3 SZ",
    "Zwykła złota moneta 1 SZ",
    "Ozdobny kawałek tkaniny jedwabnej 10 SZ",
    "Kość słoniowa 15 SZ",
    "Drewniana figurka sowy 8 SZ",
    "Kamień półszlachetny - agat 7 SZ",
    "Łyżka drewniana 1 SZ",
    "Koc z wełny 5 SZ",
    "Sznur konopny 1 SZ",
    "Worek na zboże 2 SZ",
    "Czapka z wełny 3 SZ",
    "Miska gliniana 2 SZ",
    "Dzbanek ceramiczny 4 SZ",
    "Ręcznie robiony garnek 3 SZ",
    "Świeca woskowa 1 SZ",
    "Igła z nicią 1 SZ",
    "Pas skórzany 6 SZ",
    "Stara książka 8 SZ",
    "Płócienny worek 1 SZ",
    "Butelka na wodę 2 SZ",
    "Sakwa z lnu 1 SZ",
    "Łyżka metalowa 2 SZ",
    "Widelec z mosiądzu 2 SZ",
    "Nożyk do chleba 3 SZ",
    "Lampa olejna 7 SZ",
    "Mała fiolka 1 SZ",
    "Kawałek kredy 1 SZ",
    "Rękawiczki ze skóry 5 SZ",
    "Kapelusz słomkowy 3 SZ",
    "Kubek metalowy 2 SZ",
    "Zegar kieszonkowy 15 SZ",
    "Drewniana deska do krojenia 2 SZ",
    "Łyżka stołowa 1 SZ",
    "Szczotka do włosów 3 SZ",
    "Lusterko ręczne 4 SZ",
    "Zestaw nici w różnych kolorach 3 SZ",
    "Wosk do pieczęci 1 SZ",
    "Butelka atramentu 2 SZ",
    "Pióro do pisania 1 SZ",
    "Mały notatnik 3 SZ",
    "Kreda rysunkowa 1 SZ",
    "Gliniany dzbanek na wodę 2 SZ",
    "Pusty bukłak 3 SZ",
    "Szpula nici 1 SZ",
    "Drewniany widelec 1 SZ",
    "Obrus lniany 4 SZ",
    "Kołnierz skórzany 5 SZ",
    "Ceramiczny talerz 2 SZ",
    "Sakwa na monety 1 SZ",
    "Łańcuch z żelaza 7 SZ",
    "Skórzany pasek na narzędzia 6 SZ",
    "Siekiera mała 10 SZ",
    "Kawałek mydła 1 SZ",
    "Kubek z cyny 3 SZ",
    "Parasol 4 SZ",
    "Miotła 2 SZ"
];

const pochodzenie = [
    "Pochodzi z małej, zagubionej wśród gór wioski, gdzie życie toczy się spokojnie, a każdy zna każdego. Rodzice bohatera byli prostymi rzemieślnikami, wyrabiającymi narzędzia i bronie z żelaza, co było rzadkością w tym odległym regionie. Od najmłodszych lat wpojono mu, że ciężka praca i honor są najważniejsze.",
    "Urodził się w zamożnej rodzinie kupieckiej w jednym z największych miast królestwa. Od najmłodszych lat otaczał go przepych i bogactwo, lecz życie w cieniu fortuny nie było łatwe. Jego rodzice byli wymagający i surowi, zawsze oczekując, że podtrzyma rodzinny biznes i stanie się wpływowym człowiekiem.",
    "Dorastał w rybackiej osadzie na północy, gdzie zimy są długie i surowe, a ludzie twardzi i zahartowani. Jego ojciec był rybakiem, a matka tkaczką, i od dzieciństwa pomagał w pracy, zmagając się z morskimi falami i lodowatym wiatrem. Nauczył się, że życie jest nieustanną walką, a przetrwanie wymaga determinacji.",
    "Pochodzi z wędrownego plemienia, które nieustannie przemieszcza się po równinach. Wychowany na łonie natury, nauczył się rozpoznawać ślady zwierząt, orientować się w terenie i zdobywać pożywienie. Jego plemię wierzyło w harmonię z przyrodą, a każdy członek społeczności miał swoją rolę w ochronie i opiece nad ziemią.",
    "Urodził się w niskiej warstwie społecznej w wielkim, brudnym mieście, gdzie przetrwanie każdego dnia było wyzwaniem. Jego rodzice byli prostymi robotnikami, a on od najmłodszych lat widział, jak nierówności i ubóstwo dotykają jego najbliższych. Mimo trudności, nauczył się doceniać małe rzeczy i pomagać innym w potrzebie.",
    "Pochodzi z arystokratycznej rodziny, wychowanej w dworskim przepychu i tradycjach sięgających wielu pokoleń wstecz. Jego rodzice należeli do najbogatszych w królestwie, a on od młodości miał dostęp do najlepszych nauczycieli, uczył się etykiety, polityki i sztuki walki. Jednak życie w złotej klatce nigdy go nie satysfakcjonowało.",
    "Urodził się w samotnej chacie pośrodku lasu, gdzie jego rodzina prowadziła spokojne, samowystarczalne życie z dala od innych ludzi. Rodzice nauczyli go wszystkiego, co potrzebne do przetrwania w dziczy – tropienia zwierzyny, rozpalania ognia i zbierania jadalnych roślin. Choć rzadko widywał obcych, świat za lasem zawsze budził jego ciekawość.",
    "Dorastał na farmie, pośród pól i łąk, gdzie codzienne obowiązki od najmłodszych lat były częścią życia. Jego rodzina zajmowała się hodowlą zwierząt i uprawą roli, a on często pomagał w stajniach lub na polu. Wpojono mu, że ciężka praca i szacunek do ziemi są najważniejszymi wartościami, co uczyniło go człowiekiem skromnym i oddanym pracy.",
    "Pochodzi z tajemniczej wyspy otoczonej legendami, gdzie magia była częścią codzienności. Jego przodkowie należeli do zakonu magów, którzy strzegli starożytnych sekretów. Od najmłodszych lat uczył się o magii i historii swego ludu, lecz obowiązki związane z jego pochodzeniem zawsze wydawały mu się nieco przytłaczające.",
    "Urodził się na stepie, w surowym klimacie. Jego rodzina należała do koczowniczego plemienia, które żyło z wypasu wielbłądów i handlu z karawanami. Jego dzieciństwo było pełne wyzwań, a codzienność wymagała hartu ducha i umiejętności przetrwania w ekstremalnych warunkach."
];

const dorosłeZycie = [
    "Obecnie pracuje jako znany rzemieślnik, tworząc unikalne przedmioty z metalu. Jego prace są cenione w całym królestwie, a on sam zyskał reputację mistrza swojego fachu. Mimo sukcesów, często wspomina skromne początki i stara się pomagać lokalnej społeczności.",
    "Został wpływowym kupcem, który prowadzi własny biznes, sprzedając egzotyczne towary z dalekich krain. Jego sklep jest pełen niezwykłych przedmiotów, a on sam podróżuje po świecie, szukając nowych okazji. Jednak nigdy nie zapomina o wartościach wyniesionych z dzieciństwa.",
    "Obecnie jest doświadczonym rybakiem, który prowadzi własną łódź. Mimo że życie na morzu jest trudne, odnalazł w nim spełnienie. Pracuje razem z rodziną i przekazuje wiedzę o sztuce rybołówstwa swoim dzieciom.",
    "Został wędrownym wojownikiem, który przemierza krainy, walcząc w imieniu sprawiedliwości. Jego umiejętności przetrwania w trudnych warunkach czynią go cenionym towarzyszem, a historie o jego odwadze i honorze szybko się rozchodzą.",
    "Obecnie jest liderem ruchu społecznego, który walczy o prawa ludzi z niskich warstw społecznych. Jego doświadczenia z dzieciństwa zmotywowały go do działania na rzecz zmiany i sprawiedliwości. Zyskał wielu zwolenników i staje się coraz bardziej wpływowy.",
    "Jako arystokrata, zarządza rodzinnymi posiadłościami i angażuje się w politykę. Choć życie na dworze może być pełne intryg, wykorzystuje swoją pozycję, aby wspierać potrzebujących i wprowadzać pozytywne zmiany w królestwie.",
    "Obecnie mieszka w lesie, prowadząc życie zgodne z naturą. Jest znanym zielarzem i myśliwym, który pomaga lokalnej społeczności w trudnych czasach. Jego umiejętności przetrwania są cenione przez tych, którzy znają go i ufają jego wiedzy.",
    "Został farmerem, który odziedziczył rodzinną farmę. Pracuje ciężko, by zapewnić utrzymanie rodzinie. Jego życie wypełnione jest radością z prostych rzeczy, a ciężka praca przynosi mu satysfakcję i spełnienie.",
    "Obecnie jest członkiem zakonu magów, gdzie studiuje starożytne tajemnice magii. Choć obciążają go obowiązki, jego pasja do magii i odkrywania nowych tajemnic sprawia, że czuje się spełniony. Jego przodkowie są źródłem dumy, a on stara się nie zawieść ich dziedzictwa.",
    "Został przewodnikiem po niebezpiecznych dzikich ostępach, pomagając podróżnikom w dotarciu do oaz i bezpiecznych miejsc. Jego znajomość terenu i umiejętności przetrwania sprawiają, że jest niezastąpionym towarzyszem dla każdego, kto wyrusza w niebezpieczną podróż.",
    "Obecnie pracuje jako wojownik w armii, broniąc swojego królestwa przed zagrożeniami. Jego umiejętności bojowe i determinacja sprawiają, że jest jednym z najbardziej cenionych żołnierzy.",
    "Został badaczem, który podróżuje po świecie, poszukując starożytnych ruin i zapomnianych tajemnic. Jego pasja do odkryć prowadzi go w niebezpieczne miejsca, gdzie stawia czoła zagrożeniom.",
    "Obecnie jest uzdrowicielem, który stosuje swoje umiejętności do pomocy potrzebującym. Jego wiedza o ziołach i medycynie naturalnej czyni go cenionym członkiem społeczności.",
    "Jako artysta, poświęca swoje życie tworzeniu piękna. Maluje, rzeźbi i wystawia swoje prace, zdobywając uznanie w kręgach artystycznych. Jego twórczość często odzwierciedla jego przeżycia z dzieciństwa.",
    "Obecnie jest poszukiwaczem przygód, podróżującym po krainach w poszukiwaniu skarbów i niezwykłych przygód. Jego zapał do odkryć sprawia, że wciąż znajduje się w centrum ekscytujących wydarzeń.",
    "Został nauczycielem, dzieląc się swoją wiedzą z młodszym pokoleniem. Jego pasja do nauczania sprawia, że jest szanowany w lokalnej społeczności, a uczniowie chętnie uczą się od niego.",
    "Obecnie pracuje jako ochroniarz ważnych osób, wykorzystując swoje umiejętności walki i lojalność. Jego doświadczenie w trudnych sytuacjach czyni go niezawodnym towarzyszem.",
    "Jako posłaniec, przemieszcza się między miastami, dostarczając ważne wiadomości i informacje. Jego szybkość i sprawność sprawiają, że jest jednym z najlepszych w swoim fachu.",
    "Obecnie jest badaczem magicznych zjawisk, który zgłębia tajemnice arcydzieł magii. Jego prace przyciągają uwagę wielu uczonych, a on sam staje się coraz bardziej rozpoznawalny w swoim środowisku."
];

const przyszłePlany = [
    "Planuje otworzyć własny warsztat, gdzie będzie mógł tworzyć unikalne przedmioty i szkolić młodych rzemieślników, przekazując im swoje umiejętności.",
    "Marzy o podróżach do egzotycznych krain, gdzie ma zamiar odkrywać nowe towary i zawierać korzystne umowy handlowe.",
    "Chce założyć rodzinę i przekazać dzieciom swoje umiejętności rybackie, ucząc je, jak przetrwać w trudnych warunkach.",
    "Pragnie stać się legendą wśród wojowników, a jego celem jest zjednoczenie rozbitych plemion i walka o pokój w krainie.",
    "Zamierza zaangażować się w politykę, aby wprowadzić reformy mające na celu poprawę życia ludzi z niskich warstw społecznych.",
    "Marzy o budowie szkoły, gdzie dzieci z różnych środowisk będą mogły zdobywać edukację i rozwijać swoje talenty.",
    "Chce wyruszyć na poszukiwanie zaginionych artefaktów, wierząc, że jego odkrycia mogą przynieść nowe możliwości dla jego ludu.",
    "Planowałby znaleźć sposób na połączenie sztuki z magią, aby tworzyć niezwykłe dzieła, które zachwycą zarówno artystów, jak i magów.",
    "Zamierza rozwinąć swoje umiejętności zielarskie i stworzyć lekarstwa, które pomogą wyleczyć ciężkie choroby w swojej społeczności.",
    "Marzy o stworzeniu organizacji, która będzie wspierać koczownicze plemiona i pomagać im w zachowaniu ich tradycji.",
    "Planuje napisać książkę o swoich przygodach, aby zainspirować innych do odważnego podążania za swoimi marzeniami.",
    "Chce osiedlić się w spokojnej wiosce, gdzie mógłby prowadzić życie zgodne z naturą i dzielić się swoją wiedzą z innymi.",
    "Zamierza poświęcić się badaniom nad starożytną magią, wierząc, że jego odkrycia mogą zmienić losy krainy.",
    "Pragnie zostać mistrzem w swoim fachu, dążąc do perfekcji w sztuce walki, aby móc stanąć w obronie słabszych.",
    "Marzy o organizacji festiwalu sztuki, który połączy artystów z różnych regionów i pozwoli im na wymianę doświadczeń.",
    "Chce stworzyć fundację, która będzie wspierać młodych naukowców i artystów w ich dążeniach do osiągnięcia sukcesu.",
    "Planowałby rozwinąć swoje umiejętności w alchemii, aby odkryć nowe formuły i substancje, które mogą zrewolucjonizować magię.",
    "Marzy o odkryciu nowego lądu, gdzie mógłby założyć nową społeczność opartą na równych prawach i sprawiedliwości.",
    "Chce zostać mentorem dla młodych wojowników, ucząc ich wartości honoru i odwagi, aby kształcić nowe pokolenie.",
    "Zamierza stworzyć społeczność artystyczną, w której twórcy będą mogli wspierać się nawzajem i dzielić swoimi pomysłami.",
    "Pragnie zorganizować wyprawę, aby zdobyć nieznane krainy, odkrywając nowe zasoby i możliwości dla swojej społeczności."
];
// Funkcja losująca liczbę w przedziale min-max
function losuj(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funkcja generująca i wyświetlająca postać
function generujIWyswietlPostac() {
    const postac = {
        imie: imiona.length > 0 ? imiona[losuj(0, imiona.length - 1)] : "Brak imienia",
        statystyki: {
            sprawnosc: losuj(6, 14),
            percepcja: losuj(6, 14),
            zrecznosc: losuj(6, 14),
            inteligencja: losuj(6, 14),
            wiedza: losuj(6, 14),
            charyzma: losuj(6, 14)
        },
        bron: bronie[losuj(0, bronie.length - 1)],
        ekwipunek: ekwipunek[losuj(0, ekwipunek.length - 1)],
        przedmiotyWartosciowe: przedmiotyWartosciowe[losuj(0, przedmiotyWartosciowe.length - 1)],
        pochodzenie: pochodzenie[losuj(0, pochodzenie.length - 1)],
        dorosłeZycie: dorosłeZycie[losuj(0, dorosłeZycie.length - 1)],
        przyszłePlany: przyszłePlany[losuj(0, przyszłePlany.length - 1)],
    };

    // Wyświetlanie wyników w divie randomHero
    document.getElementById("randomHero").innerHTML = `
        <h2>Imię: ${postac.imie}</h2>
        <p><strong>Statystyki:</strong></p>
        <p>Sprawność: ${postac.statystyki.sprawnosc}</p>
        <p>Percepcja: ${postac.statystyki.percepcja}</p>
        <p>Zręczność: ${postac.statystyki.zrecznosc}</p>
        <p>Inteligencja: ${postac.statystyki.inteligencja}</p>
        <p>Wiedza: ${postac.statystyki.wiedza}</p>
        <p>Charyzma: ${postac.statystyki.charyzma}</p>
        <p><strong>Broń:</strong> ${postac.bron}</p>
        <p><strong>Ekwipunek:</strong> ${postac.ekwipunek}</p>
        <p><strong>Przedmiot z ekwipunku:</strong> ${postac.przedmiotyWartosciowe}</p>
        <p>${postac.pochodzenie} ${postac.dorosłeZycie} ${postac.przyszłePlany}</p>
        <button id="downloadJson">Pobierz statystyki jako JSON</button>
    `;

    // Dodaj listener do przycisku pobierania JSON po dodaniu przycisku do DOM
    document.getElementById("downloadJson").addEventListener("click", function() {
        pobierzJSON(postac);
    });
}

// Funkcja pobierająca statystyki postaci jako plik JSON
function pobierzJSON(postac) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(postac, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "statystyki_postaci.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
}

// Event listener do przycisku generowania postaci
document.querySelector(".hero-generator-toggle").addEventListener("click", function() {
    generujIWyswietlPostac();
});