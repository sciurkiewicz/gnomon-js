    // Tablice z członami imion
    const firstNames = [
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
        "Borysław", "Mirosław", "Witosław", "Dobromir", "Gniewosz", "Bożydar", "Strachota", "Jarek", "Zbigniew", "Czcibor"
      ];
    const lastNames = [
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

    // Funkcja generująca i wstrzykująca losowe imię do diva o id "name-generator"
    function generateRandomName() {
      // Losowanie członów z tablic
      const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

      // Łączenie imienia i nazwiska
      const fullName = `Męskie: ${randomFirstName} Damskie: ${randomLastName}`;

      // Wstrzykiwanie imienia do diva o id "name-generator"
      document.getElementById("name-generator").innerText = fullName;
    }

    document.querySelector(".name-generator-toggle").addEventListener("click", function() {
        generateRandomName()
      });

      export { generateRandomName };