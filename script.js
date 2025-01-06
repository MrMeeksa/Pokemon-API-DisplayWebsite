let pokemonNames = [
"Bulbasaur",
"Ivysaur",
"Venusaur",
"Charmander",
"Charmeleon",
"Charizard",
"Squirtle",
"Wartortle",
"Blastoise",
"Caterpie",
"Metapod",
"Butterfree",
"Weedle",
"Kakuna",
"Beedrill",
"Pidgey",
"Pidgeotto",
"Pidgeot",
"Rattata",
"Raticate",
"Spearow",
"Fearow",
"Ekans",
"Arbok",
"Pikachu",
"Raichu",
"Sandshrew",
"Sandslash",
"Nidoran♀",
"Nidorina",
"Nidoqueen",
"Nidoran♂",
"Nidorino",
"Nidoking",
"Clefairy",
"Clefable",
"Vulpix",
"Ninetales",
"Jigglypuff",
"Wigglytuff",
"Zubat",
"Golbat",
"Oddish",
"Gloom",
"Vileplume",
"Paras",
"Parasect",
"Venonat",
"Venomoth",
"Diglett",
"Dugtrio",
"Meowth",
"Persian",
"Psyduck",
"Golduck",
"Mankey",
"Primeape",
"Growlithe",
"Arcanine",
"Poliwag",
"Poliwhirl",
"Poliwrath",
"Abra",
"Kadabra",
"Alakazam",
"Machop",
"Machoke",
"Machamp",
"Bellsprout",
"Weepinbell",
"Victreebel",
"Tentacool",
"Tentacruel",
"Geodude",
"Graveler",
"Golem",
"Ponyta",
"Rapidash",
"Slowpoke",
"Slowbro",
"Magnemite",
"Magneton",
"Farfetch'd",
"Doduo",
"Dodrio",
"Seel",
"Dewgong",
"Grimer",
"Muk",
"Shellder",
"Cloyster",
"Gastly",
"Haunter",
"Gengar",
"Onix",
"Drowzee",
"Hypno",
"Krabby",
"Kingler",
"Voltorb",
"Electrode",
"Exeggcute",
"Exeggutor",
"Cubone",
"Marowak",
"Hitmonlee",
"Hitmonchan",
"Lickitung",
"Koffing",
"Weezing",
"Rhyhorn",
"Rhydon",
"Chansey",
"Tangela",
"Kangaskhan",
"Horsea",
"Seadra",
"Goldeen",
"Seaking",
"Staryu",
"Starmie",
"Mr. Mime",
"Scyther",
"Jynx",
"Electabuzz",
"Magmar",
"Pinsir",
"Tauros",
"Magikarp",
"Gyarados",
"Lapras",
"Ditto",
"Eevee",
"Vaporeon",
"Jolteon",
"Flareon",
"Porygon",
"Omanyte",
"Omastar",
"Kabuto",
"Kabutops",
"Aerodactyl",
"Snorlax",
"Articuno",
"Zapdos",
"Moltres",
"Dratini",
"Dragonair",
"Dragonite",
"Mewtwo",
"Mew",
"Chikorita",
"Bayleef",
"Meganium",
"Cyndaquil",
"Quilava",
"Typhlosion",
"Totodile",
"Croconaw",
"Feraligatr",
"Sentret",
"Furret",
"Hoothoot",
"Noctowl",
"Ledyba",
"Ledian",
"Spinarak",
"Ariados",
"Crobat",
"Chinchou",
"Lanturn",
"Pichu",
"Cleffa",
"Igglybuff",
"Togepi",
"Togetic",
"Natu",
"Xatu",
"Mareep",
"Flaaffy",
"Ampharos",
"Bellossom",
"Marill",
"Azumarill",
"Sudowoodo",
"Politoed",
"Hoppip",
"Skiploom",
"Jumpluff",
"Aipom",
"Sunkern",
"Sunflora",
"Yanma",
"Wooper",
"Quagsire",
"Espeon",
"Umbreon",
"Murkrow",
"Slowking",
"Misdreavus",
"Unown",
"Wobbuffet",
"Girafarig",
"Pineco",
"Forretress",
"Dunsparce",
"Gligar",
"Steelix",
"Snubbull",
"Granbull",
"Qwilfish",
"Scizor",
"Shuckle",
"Heracross",
"Sneasel",
"Teddiursa",
"Ursaring",
"Slugma",
"Magcargo",
"Swinub",
"Piloswine",
"Corsola",
"Remoraid",
"Octillery",
"Delibird",
"Mantine",
"Skarmory",
"Houndour",
"Houndoom",
"Kingdra",
"Phanpy",
"Donphan",
"Porygon2",
"Stantler",
"Smeargle",
"Tyrogue",
"Hitmontop",
"Smoochum",
"Elekid",
"Magby",
"Miltank",
"Blissey",
"Raikou",
"Entei",
"Suicune",
"Larvitar",
"Pupitar",
"Tyranitar",
"Lugia",
"Ho-oh",
"Celebi",
"Treecko",
"Grovyle",
"Sceptile",
"Torchic",
"Combusken",
"Blaziken",
"Mudkip",
"Marshtomp",
"Swampert",
"Poochyena",
"Mightyena",
"Zigzagoon",
"Linoone",
"Wurmple",
"Silcoon",
"Beautifly",
"Cascoon",
"Dustox",
"Lotad",
"Lombre",
"Ludicolo",
"Seedot",
"Nuzleaf",
"Shiftry",
"Taillow",
"Swellow",
"Wingull",
"Pelipper",
"Ralts",
"Kirlia",
"Gardevoir",
"Surskit",
"Masquerain",
"Shroomish",
"Breloom",
"Slakoth",
"Vigoroth",
"Slaking",
"Nincada",
"Ninjask",
"Shedinja",
"Whismur",
"Loudred",
"Exploud",
"Makuhita",
"Hariyama",
"Azurill",
"Nosepass",
"Skitty",
"Delcatty",
"Sableye",
"Mawile",
"Aron",
"Lairon",
"Aggron",
"Meditite",
"Medicham",
"Electrike",
"Manectric",
"Plusle",
"Minun",
"Volbeat",
"Illumise",
"Roselia",
"Gulpin",
"Swalot",
"Carvanha",
"Sharpedo",
"Wailmer",
"Wailord",
"Numel",
"Camerupt",
"Torkoal",
"Spoink",
"Grumpig",
"Spinda",
"Trapinch",
"Vibrava",
"Flygon",
"Cacnea",
"Cacturne",
"Swablu",
"Altaria",
"Zangoose",
"Seviper",
"Lunatone",
"Solrock",
"Barboach",
"Whiscash",
"Corphish",
"Crawdaunt",
"Baltoy",
"Claydol",
"Lileep",
"Cradily",
"Anorith",
"Armaldo",
"Feebas",
"Milotic",
"Castform",
"Kecleon",
"Shuppet",
"Banette",
"Duskull",
"Dusclops",
"Tropius",
"Chimecho",
"Absol",
"Wynaut",
"Snorunt",
"Glalie",
"Spheal",
"Sealeo",
"Walrein",
"Clamperl",
"Huntail",
"Gorebyss",
"Relicanth",
"Luvdisc",
"Bagon",
"Shelgon",
"Salamence",
"Beldum",
"Metang",
"Metagross",
"Regirock",
"Regice",
"Registeel",
"Latias",
"Latios",
"Kyogre",
"Groudon",
"Rayquaza",
"Jirachi",
"Deoxys",
"Turtwig",
"Grotle",
"Torterra",
"Chimchar",
"Monferno",
"Infernape",
"Piplup",
"Prinplup",
"Empoleon",
"Starly",
"Staravia",
"Staraptor",
"Bidoof",
"Bibarel",
"Kricketot",
"Kricketune",
"Shinx",
"Luxio",
"Luxray",
"Budew",
"Roserade",
"Cranidos",
"Rampardos",
"Shieldon",
"Bastiodon",
"Burmy",
"Wormadam",
"Mothim",
"Combee",
"Vespiquen",
"Pachirisu",
"Buizel",
"Floatzel",
"Cherubi",
"Cherrim",
"Shellos",
"Gastrodon",
"Ambipom",
"Drifloon",
"Drifblim",
"Buneary",
"Lopunny",
"Mismagius",
"Honchkrow",
"Glameow",
"Purugly",
"Chingling",
"Stunky",
"Skuntank",
"Bronzor",
"Bronzong",
"Bonsly",
"Mime Jr.",
"Happiny",
"Chatot",
"Spiritomb",
"Gible",
"Gabite",
"Garchomp",
"Munchlax",
"Riolu",
"Lucario",
"Hippopotas",
"Hippowdon",
"Skorupi",
"Drapion",
"Croagunk",
"Toxicroak",
"Carnivine",
"Finneon",
"Lumineon",
"Mantyke",
"Snover",
"Abomasnow",
"Weavile",
"Magnezone",
"Lickilicky",
"Rhyperior",
"Tangrowth",
"Electivire",
"Magmortar",
"Togekiss",
"Yanmega",
"Leafeon",
"Glaceon",
"Gliscor",
"Mamoswine",
"Porygon-Z",
"Gallade",
"Probopass",
"Dusknoir",
"Froslass",
"Rotom",
"Uxie",
"Mesprit",
"Azelf",
"Dialga",
"Palkia",
"Heatran",
"Regigigas",
"Giratina",
"Cresselia",
"Phione",
"Manaphy",
"Darkrai",
"Shaymin",
"Arceus",
"Victini",
"Snivy",
"Servine",
"Serperior",
"Tepig",
"Pignite",
"Emboar",
"Oshawott",
"Dewott",
"Samurott",
"Patrat",
"Watchog",
"Lillipup",
"Herdier",
"Stoutland",
"Purrloin",
"Liepard",
"Pansage",
"Simisage",
"Pansear",
"Simisear",
"Panpour",
"Simipour",
"Munna",
"Musharna",
"Pidove",
"Tranquill",
"Unfezant",
"Blitzle",
"Zebstrika",
"Roggenrola",
"Boldore",
"Gigalith",
"Woobat",
"Swoobat",
"Drilbur",
"Excadrill",
"Audino",
"Timburr",
"Gurdurr",
"Conkeldurr",
"Tympole",
"Palpitoad",
"Seismitoad",
"Throh",
"Sawk",
"Sewaddle",
"Swadloon",
"Leavanny",
"Venipede",
"Whirlipede",
"Scolipede",
"Cottonee",
"Whimsicott",
"Petilil",
"Lilligant",
"Basculin",
"Sandile",
"Krokorok",
"Krookodile",
"Darumaka",
"Darmanitan",
"Maractus",
"Dwebble",
"Crustle",
"Scraggy",
"Scrafty",
"Sigilyph",
"Yamask",
"Cofagrigus",
"Tirtouga",
"Carracosta",
"Archen",
"Archeops",
"Trubbish",
"Garbodor",
"Zorua",
"Zoroark",
"Minccino",
"Cinccino",
"Gothita",
"Gothorita",
"Gothitelle",
"Solosis",
"Duosion",
"Reuniclus",
"Ducklett",
"Swanna",
"Vanillite",
"Vanillish",
"Vanilluxe",
"Deerling",
"Sawsbuck",
"Emolga",
"Karrablast",
"Escavalier",
"Foongus",
"Amoonguss",
"Frillish",
"Jellicent",
"Alomomola",
"Joltik",
"Galvantula",
"Ferroseed",
"Ferrothorn",
"Klink",
"Klang",
"Klinklang",
"Tynamo",
"Eelektrik",
"Eelektross",
"Elgyem",
"Beheeyem",
"Litwick",
"Lampent",
"Chandelure",
"Axew",
"Fraxure",
"Haxorus",
"Cubchoo",
"Beartic",
"Cryogonal",
"Shelmet",
"Accelgor",
"Stunfisk",
"Mienfoo",
"Mienshao",
"Druddigon",
"Golett",
"Golurk",
"Pawniard",
"Bisharp",
"Bouffalant",
"Rufflet",
"Braviary",
"Vullaby",
"Mandibuzz",
"Heatmor",
"Durant",
"Deino",
"Zweilous",
"Hydreigon",
"Larvesta",
"Volcarona",
"Cobalion",
"Terrakion",
"Virizion",
"Tornadus",
"Thundurus",
"Reshiram",
"Zekrom",
"Landorus",
"Kyurem",
"Keldeo",
"Meloetta",
"Genesect",
"Chespin",
"Quilladin",
"Chesnaught",
"Fennekin",
"Braixen",
"Delphox",
"Froakie",
"Frogadier",
"Greninja",
"Bunnelby",
"Diggersby",
"Fletchling",
"Fletchinder",
"Talonflame",
"Scatterbug",
"Spewpa",
"Vivillon",
"Litleo",
"Pyroar",
"Flabébé",
"Floette",
"Florges",
"Skiddo",
"Gogoat",
"Pancham",
"Pangoro",
"Furfrou",
"Espurr",
"Meowstic",
"Honedge",
"Doublade",
"Aegislash",
"Spritzee",
"Aromatisse",
"Swirlix",
"Slurpuff",
"Inkay",
"Malamar",
"Binacle",
"Barbaracle",
"Skrelp",
"Dragalge",
"Clauncher",
"Clawitzer",
"Helioptile",
"Heliolisk",
"Tyrunt",
"Tyrantrum",
"Amaura",
"Aurorus",
"Sylveon",
"Hawlucha",
"Dedenne",
"Carbink",
"Goomy",
"Sliggoo",
"Goodra",
"Klefki",
"Phantump",
"Trevenant",
"Pumpkaboo",
"Gourgeist",
"Bergmite",
"Avalugg",
"Noibat",
"Noivern",
"Xerneas",
"Yveltal",
"Zygarde",
"Diancie",
"Hoopa",
"Volcanion",
"Rowlet",
"Dartrix",
"Decidueye",
"Litten",
"Torracat",
"Incineroar",
"Popplio",
"Brionne",
"Primarina",
"Pikipek",
"Trumbeak",
"Toucannon",
"Yungoos",
"Gumshoos",
"Grubbin",
"Charjabug",
"Vikavolt",
"Crabrawler",
"Crabominable",
"Oricorio",
"Cutiefly",
"Ribombee",
"Rockruff",
"Lycanroc",
"Wishiwashi",
"Mareanie",
"Toxapex",
"Mudbray",
"Mudsdale",
"Dewpider",
"Araquanid",
"Fomantis",
"Lurantis",
"Morelull",
"Shiinotic",
"Salandit",
"Salazzle",
"Stufful",
"Bewear",
"Bounsweet",
"Steenee",
"Tsareena",
"Comfey",
"Oranguru",
"Passimian",
"Wimpod",
"Golisopod",
"Sandygast",
"Palossand",
"Pyukumuku",
"Type: Null",
"Silvally",
"Minior",
"Komala",
"Turtonator",
"Togedemaru",
"Mimikyu",
"Bruxish",
"Drampa",
"Dhelmise",
"Jangmo-o",
"Hakamo-o",
"Kommo-o",
"Tapu Koko",
"Tapu Lele",
"Tapu Bulu",
"Tapu Fini",
"Cosmog",
"Cosmoem",
"Solgaleo",
"Lunala",
"Nihilego",
"Buzzwole",
"Pheromosa",
"Xurkitree",
"Celesteela",
"Kartana",
"Guzzlord",
"Necrozma",
"Magearna",
"Marshadow",
"Poipole",
"Naganadel",
"Stakataka",
"Blacephalon",
"Zeraora",
"Meltan",
"Melmetal",
"Grookey",
"Thwackey",
"Rillaboom",
"Scorbunny",
"Raboot",
"Cinderace",
"Sobble",
"Drizzile",
"Inteleon",
"Skwovet",
"Greedent",
"Rookidee",
"Corvisquire",
"Corviknight",
"Blipbug",
"Dottler",
"Orbeetle",
"Nickit",
"Thievul",
"Gossifleur",
"Eldegoss",
"Wooloo",
"Dubwool",
"Chewtle",
"Drednaw",
"Yamper",
"Boltund",
"Rolycoly",
"Carkol",
"Coalossal",
"Applin",
"Flapple",
"Appletun",
"Silicobra",
"Sandaconda",
"Cramorant",
"Arrokuda",
"Barraskewda",
"Toxel",
"Toxtricity",
"Sizzlipede",
"Centiskorch",
"Clobbopus",
"Grapploct",
"Sinistea",
"Polteageist",
"Hatenna",
"Hattrem",
"Hatterene",
"Impidimp",
"Morgrem",
"Grimmsnarl",
"Obstagoon",
"Perrserker",
"Cursola",
"Sirfetch'd",
"Mr. Rime",
"Runerigus",
"Milcery",
"Alcremie",
"Falinks",
"Pincurchin",
"Snom",
"Frosmoth",
"Stonjourner",
"Eiscue",
"Indeedee",
"Morpeko",
"Cufant",
"Copperajah",
"Dracozolt",
"Arctozolt",
"Dracovish",
"Arctovish",
"Duraludon",
"Dreepy",
"Drakloak",
"Dragapult",
"Zacian",
"Zamazenta",
"Eternatus",
"Kubfu",
"Urshifu",
"Zarude",
"Regieleki",
"Regidrago",
"Glastrier",
"Spectrier",
"Calyrex",
"Wyrdeer",
"Kleavor",
"Ursaluna",
"Basculegion",
"Sneasler",
"Overqwil",
"Enamorus",
"Sprigatito",
"Floragato",
"Meowscarada",
"Fuecoco",
"Crocalor",
"Skeledirge",
"Quaxly",
"Quaxwell",
"Quaquaval",
"Lechonk",
"Oinkologne",
"Tarountula",
"Spidops",
"Nymble",
"Lokix",
"Pawmi",
"Pawmo",
"Pawmot",
"Tandemaus",
"Maushold",
"Fidough",
"Dachsbun",
"Smoliv",
"Dolliv",
"Arboliva",
"Squawkabilly",
"Nacli",
"Naclstack",
"Garganacl",
"Charcadet",
"Armarouge",
"Ceruledge",
"Tadbulb",
"Bellibolt",
"Wattrel",
"Kilowattrel",
"Maschiff",
"Mabosstiff",
"Shroodle",
"Grafaiai",
"Bramblin",
"Brambleghast",
"Toedscool",
"Toedscruel",
"Klawf",
"Capsakid",
"Scovillain",
"Rellor",
"Rabsca",
"Flittle",
"Espathra",
"Tinkatink",
"Tinkatuff",
"Tinkaton",
"Wiglett",
"Wugtrio",
"Bombirdier",
"Finizen",
"Palafin",
"Varoom",
"Revavroom",
"Cyclizar",
"Orthworm",
"Glimmet",
"Glimmora",
"Greavard",
"Houndstone",
"Flamigo",
"Cetoddle",
"Cetitan",
"Veluza",
"Dondozo",
"Tatsugiri",
"Annihilape",
"Clodsire",
"Farigiraf",
"Dudunsparce",
"Kingambit",
"Great Tusk",
"Scream Tail",
"Brute Bonnet",
"Flutter Mane",
"Slither Wing",
"Sandy Shocks",
"Iron Treads",
"Iron Bundle",
"Iron Hands",
"Iron Jugulis",
"Iron Moth",
"Iron Thorns",
"Frigibax",
"Arctibax",
"Baxcalibur",
"Gimmighoul",
"Gholdengo",
"Wo-Chien",
"Chien-Pao",
"Ting-Lu",
"Chi-Yu",
"Roaring Moon",
"Iron Valiant",
"Koraidon",
"Miraidon",
"Walking Wake",
"Iron Leaves",
"Dipplin",
"Poltchageist",
"Sinistcha",
"Okidogi",
"Munkidori",
"Fezandipiti",
"Ogerpon",
"Archaludon",
"Hydrapple",
"Gouging Fire",
"Raging Bolt",
"Iron Boulder",
"Iron Crown",
"Terapagos",
"Pecharunt"
];

let sortedPokemonNames = pokemonNames.sort();
//console.log(sortedPokemonNames);

let searchBar = document.getElementById("pokemon-search-bar");


let pokemonShown = 0;
let maxPokemonToShow = 5;

document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    goFetch();
    for(i = 0; i < pokemonShown; i++){
        document.querySelector(".list-of-pokemons").removeChild(document.querySelector(".list-of-pokemons").lastChild);
    };
    pokemonShown = 0;
    searchBar.value = "";
});

searchBar.addEventListener("keyup", (e) => {
    for(i = 0; i < pokemonShown; i++){
        document.querySelector(".list-of-pokemons").removeChild(document.querySelector(".list-of-pokemons").lastChild);
    }

    //reset list
    pokemonShown = 0;
    
    for(let i of sortedPokemonNames){ //ariavaluemax
        if(i.toLowerCase().startsWith(searchBar.value.toLowerCase()) && searchBar.value != ""){
            if(pokemonShown >= maxPokemonToShow){
                break;
            }
            let listItem = document.createElement("li");
            listItem.className = "list-items";
            listItem.style.cursor = "pointer";
            
            //fetch + clear list + display part in bold onclick
            listItem.setAttribute("onclick", "displayPokemonNames('" + i + "'); goFetch(); clearPokemonList();");
            

            //display part in bold
            let word = "<b>" + i.substring(0, searchBar.value.length) + "</b>";
            word +=  i.substring(searchBar.value.length);

            //display the word in the list
            listItem.innerHTML = word;
            document.querySelector(".list-of-pokemons").appendChild(listItem);
            pokemonShown++;
        }
    }
});

function clearPokemonList() {
    const list = document.querySelector(".list-of-pokemons");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    pokemonShown = 0;
    searchBar.value = "";
}

function displayPokemonNames(pName){
    searchBar.value = pName;
}

//SECOND PART FROM HTML PASTED HERE ---------------------------------------------------------------------------------
var animationsEnded = false;
const url = 'https://pokeapi.co/api/v2/pokemon/';
goFetch();
var pName, pID, pBaseExperience, pHeight, pWeight, pHp, pAttack, pDefense, pSpecialAttack, pSpecialDefense, pSpeed, pPicture, pGif1, pGif2, pGif3, pGif4;

let ignoreFirstTime = 1;
function goFetch(){

    var pokemonNameSearched = searchBar.value.toLowerCase();

    if(pokemonNameSearched == ""){
        pokemonNameSearched = "bulbasaur";
    }

fetch(url + pokemonNameSearched)
.then(response => response.json())
.then(data => {

    var mainContainerElement = document.getElementById("main-container");
    var formElement = document.getElementById("search-form");
    let isMouseInside = false;
    var imgelement1 = document.getElementById("img1");
    var imgelement2 = document.getElementById("img2");
    var searchBarElement = document.getElementById("pokemon-search-bar");
    var timeleft,animationTimer;

    
    if(ignoreFirstTime == 1){
        ignoreFirstTime = 0;
        mainContainerElement.classList.add("doAnimation");
        // mainContainerElement.style.animation = "showcontainer 1s forwards";
    }
    else{
        console.log("not first time");
        animationsEnded = false;
        StartClosingSearchAnimations(imgelement1,imgelement2,searchBarElement);
        const elm = mainContainerElement;
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        // mainContainerElement.style.animation = "";
        // mainContainerElement.style.animation = "showcontainer 1s forwards";

        timeleft = 0.75;
        animationTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(animationTimer);
            ReopenPokeballAnimation(imgelement1,imgelement2,searchBarElement);
        }
        timeleft -= 1;
        }, 400);

        imgelement1.addEventListener("animationend", () => {
            animationsEnded = true;
        });

        // console.log("animationsEnded: " + animationsEnded); this doesnt work bcuz its insnatnly called
        // animationsEnded = SetAnimationState();
        MouseCheck(formElement, imgelement1, imgelement2, searchBarElement, isMouseInside);
        //MouseCheck(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside,timeleft);
        // if(isMouseInside){
        //     imgelement1.style.animation="openTopPart .25s linear forwards";
        //     imgelement2.style.animation="openBottomPart .25s linear forwards";
        //     searchBarElement.style.animation="resizeBack 0.3s linear forwards";
        // }
        
        // MouseEnteredFormAnimate(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside);
        // MouseLeftFormAnimate(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside);

    }

//#region  ConsoleLogs
/*
//     const styleSheet = document.styleSheets[0];
//     styleSheet.insertRule(`
//         form:hover #img1 {
//     animation: openTopPart .25s linear forwards;
//     transform-origin: bottom center;
// }`);
    
    
    //searchBar.value = "";
    //pokemon.textContent = data.name;

    // name =(data.name);
    // console.log(data.base_experience);
    // console.log(data.height);
    // console.log(data.stats[0].base_stat); //hp
    // console.log(data.stats[1].base_stat); //attack
    // console.log(data.stats[2].base_stat); //defense
    // console.log(data.stats[3].base_stat); //special-attack
    // console.log(data.stats[4].base_stat); //special-defense
    // console.log(data.stats[5].base_stat); //speed*/

        // //picture
    // console.log(data.sprites.other['official-artwork'].front_default);

    // //gifs
    // console.log(data.sprites.other.showdown.front_default);
    // console.log(data.sprites.other.showdown.back_default);
    // console.log(data.sprites.other.showdown.front_shiny);
    // console.log(data.sprites.other.showdown.back_shiny);

//#endregion
    

//#region Assigning values to variables and displaying them
    pName = data.name;
    pID = data.id;
    pHp = data.stats[0].base_stat;
    pAttack = data.stats[1].base_stat;
    pDefense = data.stats[2].base_stat;
    pSpecialAttack = data.stats[3].base_stat;
    pSpecialDefense = data.stats[4].base_stat;
    pSpeed = data.stats[5].base_stat;
    pBaseExperience = data.base_experience;
    pHeight = data.height;
    pWeight = data.weight;

    pPicture = data.sprites.other['official-artwork'].front_default;

    //capitalize first letter of pokemon name
    pName = pName.charAt(0).toUpperCase() + pName.slice(1);
    //make id look right
    pID = organizeID(pID);

    document.getElementById("Pokemon-Name").textContent = pName;
    document.getElementById("Pokemon-ID").textContent = "#" + pID;
    document.getElementById("Pokemon-HP").textContent = "HP: " + pHp;
    document.getElementById("Pokemon-Attack").textContent = "Attack: " + pAttack;
    document.getElementById("Pokemon-Defense").textContent = "Defense: " + pDefense;
    document.getElementById("Pokemon-Special-Attack").textContent = "Special-Attack: " + pSpecialAttack;
    document.getElementById("Pokemon-Special-Defense").textContent = "Special-Defense: " + pSpecialDefense;
    document.getElementById("Pokemon-Speed").textContent = "Speed: " + pSpeed;
    document.getElementById("Pokemon-Base-Experience").textContent = "Base Experience: " + pBaseExperience;
    document.getElementById("Pokemon-Height").textContent = "Height: " + pHeight;
    document.getElementById("Pokemon-Weight").textContent = "Weight: " + pWeight;

    document.getElementById("pokemon-img").src = pPicture;
    document.getElementById("gif1").style.backgroundImage = "url(" + data.sprites.other.showdown.front_default + ")";
    document.getElementById("gif2").style.backgroundImage = "url(" + data.sprites.other.showdown.back_default + ")";
    document.getElementById("gif3").style.backgroundImage = "url(" + data.sprites.other.showdown.front_shiny + ")";
    document.getElementById("gif4").style.backgroundImage = "url(" + data.sprites.other.showdown.back_shiny + ")";
//#endregion


    console.log("SUCCESS");

})
.catch(error => console.log(error) + alert("Pokemon not found"));
}

function MouseCheck(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside){
    MouseEnteredFormAnimate(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside);
    MouseLeftFormAnimate(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside);
}
function MouseEnteredFormAnimate(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside){
    
    formElement.addEventListener("mouseover",()=>{
        console.log("mouse entered");
        isMouseInside = true;
        if(animationsEnded){
            imgelement1.style.animation="openTopPart .25s linear forwards";
            imgelement2.style.animation="openBottomPart .25s linear forwards";
            searchBarElement.style.animation="resizeBack 0.3s linear forwards";
        }
    });
}
function MouseLeftFormAnimate(formElement,imgelement1,imgelement2,searchBarElement,isMouseInside){
    formElement.addEventListener("mouseleave",()=>{
        console.log("mouse left");
        isMouseInside = false;
        if(searchBar.value == ""){
        imgelement1.style.animation="rotateTopPart 0.75s linear forwards";
        imgelement2.style.animation="rotateBottomPart 0.75s linear forwards";
        searchBarElement.style.animation="resize 0.3s linear forwards";
    }
    });
}

function ReopenPokeballAnimation(imgelement1,imgelement2,searchBarElement){
    imgelement1.style.animation="openTopPart .25s linear forwards";
    imgelement2.style.animation="openBottomPart .25s linear forwards";
    searchBarElement.style.animation="resizeBack 0.3s linear forwards";
}
function organizeID(id){
    if(id<10){
        return "000" + id;
    }
    else if(id<100){
        return "00" + id;
    }
    else if(id<1000){
        return "0" + id;
    }
    else{
        return id;
    }
}
function StartClosingSearchAnimations(imgelement1,imgelement2,searchBarElement){
    imgelement1.style.animation="rotateTopPart 0.75s linear forwards";
    imgelement2.style.animation="rotateBottomPart 0.75s linear forwards";
    searchBarElement.style.animation="resize 0.3s linear forwards";
}

/*biggest stats

hp:255
attack:165
defense:230
special-attack:194
special-defense:230
speed:180
base_experience:608
height:14
weight:999

---
Here is the list of Pokémon with the highest base stats in each category, considering only their standard forms and those available in PokeAPI:

Defense: Shuckle (Base Defense: 230)
Special Attack: Alakazam (Base Special Attack: 135)
Special Defense: Shuckle (Base Special Defense: 230)
Speed: Ninjask (Base Speed: 160)
Base Experience: Blissey (Base Experience: 608)
Height: Wailord (Height: 14.5 meters)
Weight: Snorlax (Weight: 460 kg)
---

remember, wieght is in hectograms, so 999 hectograms = 99.9 kg
height is in decimetres, so 14 decimetres = 1.4 meters



*/