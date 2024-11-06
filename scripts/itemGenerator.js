// Rozbudowane listy przymiotników i rzeczowników dla nazwy artefaktów
const adjectives = [
    "Mroczny", "Wieczny", "Lodowy", "Ognisty", "Błyskawiczny", 
    "Święty", "Przeklęty", "Niebiański", "Podziemny", "Krwawy", 
    "Cichy", "Potężny", "Zatruty", "Magiczny", "Prastary",
    "Srebrny", "Złoty", "Kamienny", "Żelazny", "Cierpiący", 
    "Gniewny", "Złowieszczy", "Upiorny", "Zakazany", "Nawiedzony"
];

const nouns = [
    "Miecz", "Pierścień", "Amulet", "Zbroja", "Laska", 
    "Topór", "Hełm", "Puklerz", "Naszyjnik", "Tarcza", 
    "Kosa", "Rękawice", "Buty", "Płaszcz", "Bransoleta",
    "Sztylet", "Kostur", "Rękojeść", "Łuk", "Korona",
    "Księga", "Tunika", "Pas", "Kolczuga", "Maska",
    "Kostur", "Pancerz Płytowy",
];

const rarities = [
    "pospolity","pospolity","pospolity","pospolity","pospolity", "rzadki", "bardzo rzadki", "epicki", "mityczny",
];


function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Funkcja generująca losową nazwę
function generateName() {
    const adjective = randomElement(adjectives);
    const noun = randomElement(nouns);
    return `${adjective} ${noun}`;
}

// Funkcja generująca cechy przedmiotu z uwzględnieniem motywu
function generateAttributes(name, type) {
    const attributes = [];

    // Dopasowanie efektów do przymiotników w nazwie
    if (name.includes("Lodowy")) {
        attributes.push("obrażenia od lodu +5");
        attributes.push("szansa na zamrożenie przeciwnika");
        attributes.push("odporność na ogień +5");
    } 
    if (name.includes("Ognisty")) {
        attributes.push("obrażenia od ognia +5");
        attributes.push("szansa na podpalenie przeciwnika");
        attributes.push("odporność na lód +5");
    } 
    if (name.includes("Błyskawiczny")) {
        attributes.push("obrażenia od błyskawic +5");
        attributes.push("szansa na ogłuszenie przeciwnika");
        attributes.push("szybsze rzucanie zaklęć");
    } 
    if (name.includes("Mroczny")) {
        attributes.push("obrażenia od mroku +5");
        attributes.push("szansa na efekt strachu");
        attributes.push("dodatkowe obrażenia dla świętych przeciwników");
    } 
    if (name.includes("Wieczny")) {
        attributes.push("zwiększona trwałość");
        attributes.push("samoregeneracja o 1 punkt co minutę");
        attributes.push("odporność na rozpad");
    } 
    if (name.includes("Przeklęty")) {
        attributes.push("bonus do mocy kosztem zdrowia");
        attributes.push("szansa na klątwę przeciwnika");
        attributes.push("odporność na święte obrażenia");
    }
    if (name.includes("Święty")) {
        attributes.push("odporność na trucizny");
        attributes.push("szansa na odnowienie życia +5");
        attributes.push("dodatkowe obrażenia przeciwko demonom");
    }
    if (name.includes("Krwawy")) {
        attributes.push("drenowanie życia przeciwnika");
        attributes.push("szansa na efekt krwawienia");
        attributes.push("bonus do obrażeń, gdy zdrowie jest niskie");
    }
    if (name.includes("Niebiański")) {
        attributes.push("regeneracja many +5");
        attributes.push("odporność na mroczne obrażenia");
        attributes.push("dodatkowe obrażenia przeciwko demonom");
    }
    if (name.includes("Podziemny")) {
        attributes.push("obrażenia od trucizny +5");
        attributes.push("odporność na oślepienie");
        attributes.push("bonus do obrony w ciemnych miejscach");
    }
    if (name.includes("Zatruty")) {
        attributes.push("obrażenia od trucizny +5");
        attributes.push("szansa na zatrucie przeciwnika");
        attributes.push("odporność na trucizny");
    }
    if (name.includes("Złowieszczy")) {
        attributes.push("szansa na wywołanie strachu");
        attributes.push("zwiększone obrażenia nocą");
        attributes.push("dodatkowe obrażenia przeciwko świętym przeciwnikom");
    }
    if (name.includes("Upiorny")) {
        attributes.push("szansa na efekt strachu");
        attributes.push("zwiększona skuteczność przeciwko nieumarłym");
        attributes.push("odporność na strach");
    }
    if (name.includes("Cichy")) {
        attributes.push("zwiększona szansa na unik");
        attributes.push("cichsze poruszanie się");
        attributes.push("bonus do ataków z ukrycia");
    }
    if (name.includes("Potężny")) {
        attributes.push("zwiększenie obrażeń o 10%");
        attributes.push("zwiększona siła fizyczna");
        attributes.push("zmniejszona szansa na ogłuszenie");
    }
    if (name.includes("Prastary")) {
        attributes.push("odporność na czasowe klątwy");
        attributes.push("zwiększona moc zaklęć o 5%");
        attributes.push("odporność na mroczne obrażenia");
    }
    if (name.includes("Srebrny")) {
        attributes.push("obrażenia od srebra +5");
        attributes.push("zwiększona skuteczność przeciwko nieumarłym");
        attributes.push("odporność na korozję");
    }
    if (name.includes("Żelazny")) {
        attributes.push("zwiększona odporność na ogłuszenie");
        attributes.push("zwiększona wytrzymałość pancerza");
        attributes.push("odporność na trucizny +5");
    }
    if (name.includes("Cierpiący")) {
        attributes.push("bonus do obrażeń przy niskim zdrowiu");
        attributes.push("drenowanie życia przeciwnika");
        attributes.push("szansa na wywołanie efektu krwawienia");
    }
    if (name.includes("Gniewny")) {
        attributes.push("zwiększona siła przy niskim zdrowiu");
        attributes.push("obrażenia od ognia +3");
        attributes.push("szansa na wywołanie efektu strachu");
    }
    if (name.includes("Zakazany")) {
        attributes.push("bonus do mocy kosztem zdrowia");
        attributes.push("szansa na wywołanie losowej klątwy");
        attributes.push("zwiększona moc zaklęć kosztem wytrzymałości");
    }
    if (name.includes("Nawiedzony")) {
        attributes.push("szansa na przyzwanie duchów");
        attributes.push("zwiększona skuteczność przeciwko żywym przeciwnikom");
        attributes.push("odporność na efekty strachu");
    }
    return attributes;
}


// Główna funkcja generująca artefakt i wstrzykująca wynik do HTML
function generateArtifact() {
    const name = generateName();
    const rarity = randomElement(rarities);
    const attributes = generateAttributes(name);
    
    // Tworzymy obiekt artefaktu
    const artifact = {
        name,
        rarity,
        attributes
    };
    
    // Wstrzyknięcie wyniku do elementu div#randomItem
    document.getElementById("randomItem").innerHTML = `
        <h2>${artifact.name}</h2>
        <p><strong>Rzadkość:</strong> ${artifact.rarity}</p>
        <p><strong>Cechy:</strong></p>
        <p>
            ${artifact.attributes.map(attr => `<p>${attr}</p>`).join('')}
        </p>
    `;
}

document.querySelector(".item-generator-toggle").addEventListener("click", function() {
    generateArtifact();
});