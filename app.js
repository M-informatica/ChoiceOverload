/**
 * ChoiceOverload - app.js
 * Dit bestand voegt alle interactiviteit, filters, film-database,
 * detail-schermen en de Randomizer toe zonder index.html te wijzigen.
 */

// ==========================================
// 1. FILM DATABASE (Hoog beoordeeld op IMDb & Rotten Tomatoes)
// Groepsgenoten kunnen hier eenvoudig nieuwe films toevoegen!
// ==========================================
const moviesDatabase = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        genre: "Sciencefiction",
        imdb: "8.5",
        rt: "92%",
        director: "Denis Villeneuve",
        duration: "166 min",
        streaming: "HBO Max",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        shortDesc: "Paul Atreides sluit zich aan bij de Vrijmans op Arrakis om wraak te nemen op de samenzweerders die zijn familie verwoestten.",
        fullDesc: "Paul Atreides verenigt zich met Chani en de Fremen terwijl hij op oorlogspad gaat tegen de samenzweerders die zijn familie hebben vernietigd. Geconfronteerd met een keuze tussen de liefde van zijn leven en het lot van het bekende universum, probeert hij een vreselijke toekomst te voorkomen die alleen hij kan voorzien."
    },
    {
        id: 2,
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama",
        imdb: "8.3",
        rt: "93%",
        director: "Christopher Nolan",
        duration: "180 min",
        streaming: "SkyShowtime",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        shortDesc: "Het waargebeurde verhaal van natuurkundige J. Robert Oppenheimer en zijn rol bij de ontwikkeling van de atoombom.",
        fullDesc: "Tijdens de Tweede Wereldoorlog wordt de briljante Amerikaanse natuurkundige J. Robert Oppenheimer aangesteld als directeur van het geheime Manhattanproject. In Los Alamos leidt hij de race om het eerste kernwapen ter wereld te bouwen, met verstrekkende gevolgen voor de mensheid en zijn eigen geweten."
    },
    {
        id: 3,
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        genre: "Animatie",
        imdb: "8.6",
        rt: "95%",
        director: "Joaquim Dos Santos",
        duration: "140 min",
        streaming: "Netflix / Pathé Thuis",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        shortDesc: "Miles Morales wordt door het multiversum geslingerd en ontmoet een team van Spider-Heldinnen en -Helden.",
        fullDesc: "Na herenigd te zijn met Gwen Stacy wordt Brooklyn's vriendelijke buurt-Spider-Man Miles Morales door het Multiversum geslingerd, waar hij een team van Spider-People ontmoet dat belast is met het beschermen van het bestaan zelf. Wanneer de helden het oneens zijn over hoe om te gaan met een nieuwe dreiging, moet Miles herdefiniëren wat het betekent om een held te zijn."
    },
    {
        id: 4,
        title: "Parasite",
        year: 2019,
        genre: "Thriller",
        imdb: "8.5",
        rt: "99%",
        director: "Bong Joon-ho",
        duration: "132 min",
        streaming: "Netflix / NPO Plus",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        shortDesc: "Hebzucht en klassenverschillen bedreigen de nieuwe band tussen de rijke familie Park en de arme familie Kim.",
        fullDesc: "Alle leden van de werkloze familie Kim raken gefascineerd door de schatrijke familie Park. Eén voor één weten de Kims zich op slinkse wijze naar binnen te werken als personeel in de luxueuze villa van de Parks, wat leidt tot een onvoorspelbare en schokkende kettingreactie."
    },
    {
        id: 5,
        title: "Inception",
        year: 2010,
        genre: "Sciencefiction",
        imdb: "8.8",
        rt: "87%",
        director: "Christopher Nolan",
        duration: "148 min",
        streaming: "HBO Max / Prime Video",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        shortDesc: "Een dief die geheimen steelt via droomtechnologie krijgt de taak een idee in iemands onderbewustzijn te planten.",
        fullDesc: "Dom Cobb is een bekwame dief, de allerbeste in de gevaarlijke kunst van extractie: het stelen van waardevolle geheimen uit het onderbewustzijn tijdens de droomstaat. Zijn zeldzame gave heeft hem tot een gewilde speler in bedrijfsspionage gemaakt, maar heeft hem ook alles gekost wat hij liefhad."
    },
    {
        id: 6,
        title: "The Dark Knight",
        year: 2008,
        genre: "Actie",
        imdb: "9.0",
        rt: "94%",
        director: "Christopher Nolan",
        duration: "152 min",
        streaming: "HBO Max",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        shortDesc: "Batman neemt het op tegen de Joker, een crimineel meesterbrein dat Gotham City in totale anarchie wil storten.",
        fullDesc: "Met de hulp van luitenant Jim Gordon en officier van justitie Harvey Dent begint Batman de overgebleven criminele organisaties in de straten van Gotham op te rollen. De samenwerking blijkt effectief, maar al snel worden ze het doelwit van een opkomend crimineel meesterbrein dat bekendstaat als de Joker."
    },
    {
        id: 7,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genre: "Avontuur",
        imdb: "8.9",
        rt: "91%",
        director: "Peter Jackson",
        duration: "178 min",
        streaming: "HBO Max / Prime Video",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        shortDesc: "Een jonge Hobbit en acht metgezellen beginnen aan een gevaarlijke reis om de Ene Ring te vernietigen.",
        fullDesc: "In het land van Midden-aarde erft de jonge hobbit Frodo Balings een ogenschijnlijk onschuldige gouden ring. Hij ontdekt al snel dat dit de Ene Ring is, gesmeed door de duistere heer Sauron. Samen met een reisgenootschap van elfen, dwergen, mensen en een tovenaar moet Frodo de ring naar de Doemberg brengen."
    },
    {
        id: 8,
        title: "Spirited Away",
        year: 2001,
        genre: "Animatie",
        imdb: "8.6",
        rt: "96%",
        director: "Hayao Miyazaki",
        duration: "125 min",
        streaming: "Netflix",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        shortDesc: "Tijdens een verhuizing belandt de 10-jarige Chihiro in een mysterieuze wereld vol geesten, heksen en goden.",
        fullDesc: "De tienjarige Chihiro en haar ouders stuiten op een ogenschijnlijk verlaten pretpark. Nadat haar ouders in varkens worden veranderd door een vloek, moet Chihiro gaan werken in een magisch badhuis voor geesten om een manier te vinden zichzelf en haar ouders te bevrijden."
    },
    {
        id: 9,
        title: "The Matrix",
        year: 1999,
        genre: "Actie",
        imdb: "8.7",
        rt: "83%",
        director: "Lana & Lilly Wachowski",
        duration: "136 min",
        streaming: "HBO Max",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        shortDesc: "Een computerhacker ontdekt de schokkende waarheid over de realiteit en zijn rol in de oorlog tegen machines.",
        fullDesc: "Thomas Anderson leidt een dubbelleven als de beruchte hacker Neo. Wanneer hij benaderd wordt door de mysterieuze Morpheus, ontdekt Neo dat de wereld waarin hij leeft een computersimulatie is, ontworpen door intelligente machines om de mensheid onder controle te houden."
    },
    {
        id: 10,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Misdaad",
        imdb: "8.9",
        rt: "92%",
        director: "Quentin Tarantino",
        duration: "154 min",
        streaming: "SkyShowtime / Prime Video",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        shortDesc: "De levens van twee huurmoordenaars, een bokser en een gangsterbaas raken op bizarre wijze met elkaar verweven.",
        fullDesc: "In Los Angeles kruisen de paden van de filosofische huurmoordenaars Vincent Vega en Jules Winnfield, een bokser op de vlucht voor de maffia, en de vrouw van een gevreesde gangsterbaas in vier met elkaar verweven verhalen vol zwarte humor en geweld."
    },
    {
        id: 11,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        imdb: "9.3",
        rt: "91%",
        director: "Frank Darabont",
        duration: "142 min",
        streaming: "Netflix / Pathé Thuis",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        shortDesc: "Twee gevangenen bouwen over de jaren heen een diepe vriendschap op en vinden troost en hoop achter de tralies.",
        fullDesc: "Bankier Andy Dufresne wordt in 1947 onterecht veroordeeld voor de moord op zijn vrouw en haar minnaar, en belandt in de beruchte Shawshank-gevangenis. Daar sluit hij vriendschap met medegevangene Red en houdt hij zijn hoop levend door zijn financiële kennis in te zetten."
    },
    {
        id: 12,
        title: "Back to the Future",
        year: 1985,
        genre: "Komedie",
        imdb: "8.5",
        rt: "93%",
        director: "Robert Zemeckis",
        duration: "116 min",
        streaming: "Netflix / Prime Video",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
        shortDesc: "Tiener Marty McFly reist per ongeluk 30 jaar terug in de tijd met een tijdmachine gebouwd van een DeLorean.",
        fullDesc: "Wanneer een experiment van de excentrieke uitvinder Doc Brown misloopt, wordt tiener Marty McFly in een omgebouwde DeLorean terug naar het jaar 1955 geflitst. Daar verstoort hij per ongeluk de eerste ontmoeting van zijn ouders en moet hij ervoor zorgen dat ze toch verliefd worden."
    },
    {
        id: 13,
        title: "The Shining",
        year: 1980,
        genre: "Horror",
        imdb: "8.4",
        rt: "83%",
        director: "Stanley Kubrick",
        duration: "146 min",
        streaming: "HBO Max",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xazWoLealQwEgqZ89MLZklLZD3k.jpg",
        shortDesc: "Een gezin trekt in een geïsoleerd hotel voor de winter, waar een duistere aanwezigheid de vader tot waanzin drijft.",
        fullDesc: "Schrijver Jack Torrance accepteert een baan als winteropzichter van het afgelegen Overlook Hotel in de Rocky Mountains. Terwijl een zware sneeuwstorm het gezin afsluit van de buitenwereld, ontdekt zijn zoontje Danny dat het hotel spookt en verliest Jack langzaam zijn verstand."
    },
    {
        id: 14,
        title: "The Godfather",
        year: 1972,
        genre: "Misdaad",
        imdb: "9.2",
        rt: "97%",
        director: "Francis Ford Coppola",
        duration: "175 min",
        streaming: "Netflix / SkyShowtime",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        shortDesc: "De ouder wordende patriarch van een maffia-dynastie draagt de controle over zijn imperium over aan zijn zoon.",
        fullDesc: "Don Vito Corleone is het machtige hoofd van een van de vijf grote maffiafamilies in New York na de Tweede Wereldoorlog. Wanneer hij weigert mee te werken aan de opkomende drugshandel, wordt er een aanslag op hem gepleegd en wordt zijn jongste zoon Michael meegesleurd in de onderwereld."
    },
    {
        id: 15,
        title: "Star Wars: Episode IV - A New Hope",
        year: 1977,
        genre: "Fantasie",
        imdb: "8.6",
        rt: "93%",
        director: "George Lucas",
        duration: "121 min",
        streaming: "Disney+",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        shortDesc: "Luke Skywalker bundelt zijn krachten met een Jedi-ridder en smokkelaars om het melkwegstelsel te redden.",
        fullDesc: "Wanneer prinses Leia gevangen wordt genomen door het kwaadaardige Galactische Keizerrijk, onderschept de jonge boer Luke Skywalker een noodoproep via twee droids. Samen met Obi-Wan Kenobi en smokkelaar Han Solo begint hij aan een missie om haar te redden en de Death Star te vernietigen."
    },
    {
        id: 16,
        title: "Get Out",
        year: 2017,
        genre: "Horror",
        imdb: "7.8",
        rt: "98%",
        director: "Jordan Peele",
        duration: "104 min",
        streaming: "Netflix / Prime Video",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        shortDesc: "Een jonge man ontmoet de ouders van zijn vriendin tijdens een weekendje weg en ontdekt een duister geheim.",
        fullDesc: "Chris gaat voor het eerst een weekend op bezoek bij de ouders van zijn vriendin Rose op hun afgelegen landgoed. Wat aanvankelijk lijkt op overdreven vriendelijkheid om met de interraciale relatie om te gaan, verandert al snel in een reeks steeds verontrustendere ontdekkingen."
    }
];

// Houdt de laatst gekozen film van de Randomizer bij (zodat niet 2x dezelfde komt)
let lastRandomMovieId = null;

// ==========================================
// 2. INITIALISATIE BIJ HET LADEN VAN DE PAGINA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    injectCustomStyles();
    updateReleaseRadarTo2026();
    setupFiltersAndRandomizer();
    setupSearchResultsContainer();
    setupMovieDetailModal();
    setupGiftAnimationModal();
    attachExistingRadarButtons();

    // Zorg dat eventuele nieuwe Lucide iconen worden ingeladen
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// ==========================================
// 3. CSS ANIMATIES TOEVOEGEN VOOR HET CADEAUTJE
// ==========================================
function injectCustomStyles() {
    const style = document.createElement("style");
    style.textContent = `
        @keyframes giftWobble {
            0%, 100% { transform: rotate(0deg) scale(1); }
            20% { transform: rotate(-12deg) scale(1.1); }
            40% { transform: rotate(12deg) scale(1.15); }
            60% { transform: rotate(-10deg) scale(1.2); }
            80% { transform: rotate(10deg) scale(1.15); }
        }
        @keyframes giftPop {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.4); opacity: 0.8; }
            100% { transform: scale(0); opacity: 0; }
        }
        .animate-gift-wobble {
            animation: giftWobble 0.9s ease-in-out infinite;
        }
        .animate-gift-pop {
            animation: giftPop 0.4s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// 4. RELEASE RADAR UPDATEN NAAR 2026
// ==========================================
function updateReleaseRadarTo2026() {
    const currentYear = 2026;
    const radarSection = document.getElementById("radar");
    if (!radarSection) return;

    // Vervang "2024" in de Release Radar teksten door 2026
    const textElements = radarSection.querySelectorAll("p, span");
    textElements.forEach(el => {
        if (el.textContent.includes("2024")) {
            el.textContent = el.textContent.replace("2024", currentYear);
        }
    });
}

// Koppel "Meer Info" knoppen op de bestaande Release Radar kaarten
function attachExistingRadarButtons() {
    const radarCards = document.querySelectorAll("#radar .group");
    const radarSampleMovies = [
        {
            title: "The Quantum Paradox",
            year: 2026,
            genre: "Sciencefiction",
            imdb: "8.4",
            rt: "91%",
            director: "Alex Garland",
            duration: "138 min",
            streaming: "Netflix",
            poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80",
            fullDesc: "In het jaar 2026 ontdekt een team van quantumfysici een breuk in de tijdlijn. Terwijl parallelle werelden met elkaar botsen, moeten ze een manier vinden om de realiteit te herstellen voordat alles instort."
        },
        {
            title: "Neon Nights",
            year: 2026,
            genre: "Actie",
            imdb: "8.1",
            rt: "88%",
            director: "Chad Stahelski",
            duration: "129 min",
            streaming: "Prime Video",
            poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
            fullDesc: "In een door neon verlichte metropool neemt een voormalige koerier het op tegen een corrupt megabedrijf dat de herinneringen van burgers verhandelt."
        },
        {
            title: "Silent Echoes",
            year: 2026,
            genre: "Horror",
            imdb: "7.9",
            rt: "94%",
            director: "Mike Flanagan",
            duration: "118 min",
            streaming: "HBO Max",
            poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=600&q=80",
            fullDesc: "Wanneer een geluidsingenieur opnames maakt in een verlaten kustplaatsje, ontdekt ze stemmen op de geluidsband die waarschuwen voor een naderend onheil."
        }
    ];

    radarCards.forEach((card, index) => {
        const infoBtn = card.querySelector("button");
        if (infoBtn && radarSampleMovies[index]) {
            infoBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                openMovieDetailModal(radarSampleMovies[index]);
            });
        }
    });
}

// ==========================================
// 5. FILTERS UPDATEN & RANDOMIZER KNOP TOEVOEGEN
// ==========================================
function setupFiltersAndRandomizer() {
    const header = document.querySelector("header");
    if (!header) return;

    // Zoek de filterbalk container in de header
    const filterBar = header.querySelector(".bg-dark-800\\/80");
    if (!filterBar) return;

    // --- A. RANDOMIZER KNOP BOVEN DE FILTERBALK ---
    const randomizerWrapper = document.createElement("div");
    randomizerWrapper.className = "mb-6 flex justify-center";
    randomizerWrapper.innerHTML = `
        <button id="randomizerBtn" class="bg-gradient-to-r from-brand to-yellow-300 text-black font-heading font-extrabold text-lg px-8 py-3.5 rounded-full shadow-lg shadow-brand/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer">
            <i data-lucide="gift" class="w-6 h-6"></i>
            <span>Randomizer — Kies een verrassingsfilm!</span>
        </button>
    `;
    filterBar.parentNode.insertBefore(randomizerWrapper, filterBar);

    document.getElementById("randomizerBtn").addEventListener("click", triggerRandomizer);

    // --- B. JAARTAL & GENRE SELECTS UPDATEN ---
    const selects = filterBar.querySelectorAll("select");
    if (selects.length >= 2) {
        const yearSelect = selects[0];
        const genreSelect = selects[1];

        yearSelect.id = "filterYear";
        genreSelect.id = "filterGenre";

        // 1 = huidig (2026) - 2010, 2 = 2010 - 2000, 3 = 2000 - 1990, 4 = 1990 - 1980, 5 = 1980 >
        yearSelect.innerHTML = `
            <option value="all">Alle Jaartallen</option>
            <option value="2026-2010">2026 - 2010 (Nieuw)</option>
            <option value="2010-2000">2010 - 2000</option>
            <option value="2000-1990">2000 - 1990</option>
            <option value="1990-1980">1990 - 1980</option>
            <option value="1980-older">1980 &gt; (Ouder dan 1980)</option>
        `;

        // Losse, niet-gecombineerde genres
        const singleGenres = [
            "Actie",
            "Avontuur",
            "Animatie",
            "Drama",
            "Fantasie",
            "Horror",
            "Komedie",
            "Misdaad",
            "Sciencefiction",
            "Thriller"
        ];

        genreSelect.innerHTML = `<option value="all">Alle Genres</option>` +
            singleGenres.map(g => `<option value="${g}">${g}</option>`).join("");
    }

    // --- C. "VIND FILM" KNOP & NAVIGATIE ZOEKVELD KOPPELEN ---
    const buttons = filterBar.querySelectorAll("button");
    const findFilmBtn = buttons[buttons.length - 1]; // De laatste knop in de balk is "Vind Film"

    if (findFilmBtn) {
        findFilmBtn.addEventListener("click", (e) => {
            e.preventDefault();
            executeSearchAndFilter(true);
        });
    }

    // Koppel ook de zoekbalk in de bovenste navigatiebalk
    const navSearchInput = document.querySelector("#navbar input[type='text']");
    if (navSearchInput) {
        navSearchInput.id = "navSearchInput";
        navSearchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                executeSearchAndFilter(true);
            } else {
                executeSearchAndFilter(false);
            }
        });
    }
}

// ==========================================
// 6. ZOEKRESULTATEN SECTIE (4 FILMS OP EEN RIJ)
// ==========================================
function setupSearchResultsContainer() {
    const header = document.querySelector("header");
    if (!header) return;

    const resultsSection = document.createElement("section");
    resultsSection.id = "searchResultsSection";
    resultsSection.className = "hidden py-16 bg-dark-900 border-b border-white/10";
    resultsSection.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                <div>
                    <h2 class="text-3xl font-heading font-bold text-white flex items-center gap-3">
                        <i data-lucide="film" class="text-brand w-7 h-7"></i>
                        <span id="resultsHeading">Gevonden Films</span>
                    </h2>
                    <p id="resultsSubheading" class="text-gray-400 text-sm mt-1">Geselecteerd op basis van hoge IMDb & Rotten Tomatoes scores</p>
                </div>
                <button id="resetFiltersBtn" class="text-sm text-gray-300 hover:text-brand bg-dark-800 border border-white/10 px-4 py-2 rounded-lg transition-colors self-start sm:self-auto">
                    Filters wissen
                </button>
            </div>

            <!-- Grid: 4 films op een rij (lg:grid-cols-4) met meerdere rijen eronder -->
            <div id="moviesResultsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            </div>
        </div>
    `;

    // Plaats de resultaten direct onder de header (boven de Release Radar)
    header.insertAdjacentElement("afterend", resultsSection);

    document.getElementById("resetFiltersBtn").addEventListener("click", () => {
        const yearSelect = document.getElementById("filterYear");
        const genreSelect = document.getElementById("filterGenre");
        const navInput = document.getElementById("navSearchInput");

        if (yearSelect) yearSelect.value = "all";
        if (genreSelect) genreSelect.value = "all";
        if (navInput) navInput.value = "";

        resultsSection.classList.add("hidden");
    });
}

function executeSearchAndFilter(shouldScroll = true) {
    const yearValue = document.getElementById("filterYear")?.value || "all";
    const genreValue = document.getElementById("filterGenre")?.value || "all";
    const searchText = (document.getElementById("navSearchInput")?.value || "").trim().toLowerCase();

    const filteredMovies = moviesDatabase.filter(movie => {
        // 1. Filter op zoektekst (titel of regisseur)
        const matchesSearch = !searchText ||
            movie.title.toLowerCase().includes(searchText) ||
            movie.director.toLowerCase().includes(searchText);

        // 2. Filter op los genre
        const matchesGenre = genreValue === "all" || movie.genre === genreValue;

        // 3. Filter op jaartal-bereik
        let matchesYear = true;
        if (yearValue === "2026-2010") {
            matchesYear = movie.year >= 2010 && movie.year <= 2026;
        } else if (yearValue === "2010-2000") {
            matchesYear = movie.year >= 2000 && movie.year < 2010;
        } else if (yearValue === "2000-1990") {
            matchesYear = movie.year >= 1990 && movie.year < 2000;
        } else if (yearValue === "1990-1980") {
            matchesYear = movie.year >= 1980 && movie.year < 1990;
        } else if (yearValue === "1980-older") {
            matchesYear = movie.year < 1980;
        }

        return matchesSearch && matchesGenre && matchesYear;
    });

    renderFilteredMovies(filteredMovies, shouldScroll);
}

function renderFilteredMovies(movies, shouldScroll) {
    const section = document.getElementById("searchResultsSection");
    const grid = document.getElementById("moviesResultsGrid");
    const heading = document.getElementById("resultsHeading");

    if (!section || !grid) return;

    section.classList.remove("hidden");
    heading.textContent = `Gevonden Films (${movies.length})`;

    if (movies.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full bg-dark-800 border border-white/10 rounded-2xl p-10 text-center">
                <p class="text-xl font-bold text-white mb-2">Geen films gevonden met deze combinatie</p>
                <p class="text-gray-400 text-sm">Probeer een ander jaartal of genre te kiezen.</p>
            </div>
        `;
    } else {
        grid.innerHTML = movies.map(movie => `
            <div class="bg-dark-800 rounded-2xl overflow-hidden border border-white/10 hover:border-brand/50 transition-all flex flex-col justify-between shadow-lg group">
                <div>
                    <div class="relative aspect-[2/3] overflow-hidden bg-dark-900">
                        <img src="${movie.poster}" alt="${movie.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3 left-3 flex gap-1.5">
                            <span class="bg-black/80 backdrop-blur-md text-brand text-xs font-bold px-2.5 py-1 rounded-md border border-brand/30">
                                IMDb ${movie.imdb}
                            </span>
                            <span class="bg-black/80 backdrop-blur-md text-red-400 text-xs font-bold px-2.5 py-1 rounded-md border border-red-500/30">
                                🍅 ${movie.rt}
                            </span>
                        </div>
                        <span class="absolute bottom-3 right-3 bg-dark-900/90 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-md">
                            ${movie.year} • ${movie.genre}
                        </span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-heading font-bold text-white group-hover:text-brand transition-colors mb-2 line-clamp-1">
                            ${movie.title}
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">
                            ${movie.shortDesc}
                        </p>
                    </div>
                </div>
                <div class="px-5 pb-5 pt-2">
                    <button onclick="openMovieById(${movie.id})" class="w-full bg-brand text-black font-bold py-2.5 px-4 rounded-xl hover:bg-brand-hover transition-colors flex items-center justify-center gap-2 cursor-pointer">
                        <span>Meer informatie</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `).join("");
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }

    if (shouldScroll) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ==========================================
// 7. FILM DETAIL MODAL (WIKIPEDIA INFO + GROTE POSTER)
// ==========================================
function setupMovieDetailModal() {
    const detailModal = document.createElement("div");
    detailModal.id = "movieDetailModal";
    detailModal.className = "fixed inset-0 z-50 hidden";
    detailModal.innerHTML = `
        <div class="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" onclick="closeMovieDetailModal()"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
                <div class="relative w-full max-w-4xl rounded-3xl bg-dark-800 border border-white/15 shadow-2xl overflow-hidden text-left">
                    <button onclick="closeMovieDetailModal()" class="absolute right-4 top-4 z-20 bg-dark-900/80 hover:bg-brand hover:text-black text-white p-2 rounded-full transition-colors cursor-pointer">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>

                    <!-- Split Layout: Links grote poster, Rechts informatie -->
                    <div class="grid grid-cols-1 md:grid-cols-12">
                        <div class="md:col-span-5 bg-dark-900">
                            <img id="detailPoster" src="" alt="Filmposter" class="w-full h-full max-h-[540px] object-cover">
                        </div>
                        <div class="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div class="flex flex-wrap items-center gap-2 mb-3">
                                    <span id="detailYearGenre" class="bg-brand/15 text-brand border border-brand/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"></span>
                                    <span id="detailDuration" class="bg-dark-900 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"></span>
                                </div>

                                <h2 id="detailTitle" class="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4"></h2>

                                <!-- Scores -->
                                <div class="flex gap-4 mb-6">
                                    <div class="bg-dark-900 border border-white/10 rounded-xl px-4 py-2.5">
                                        <span class="block text-xs text-gray-400">IMDb Score</span>
                                        <span id="detailImdb" class="text-lg font-bold text-brand"></span>
                                    </div>
                                    <div class="bg-dark-900 border border-white/10 rounded-xl px-4 py-2.5">
                                        <span class="block text-xs text-gray-400">Rotten Tomatoes</span>
                                        <span id="detailRt" class="text-lg font-bold text-red-400"></span>
                                    </div>
                                    <div class="bg-dark-900 border border-white/10 rounded-xl px-4 py-2.5">
                                        <span class="block text-xs text-gray-400">Te zien op</span>
                                        <span id="detailStreaming" class="text-sm font-bold text-white"></span>
                                    </div>
                                </div>

                                <h3 class="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Verhaal & Achtergrond</h3>
                                <p id="detailFullDesc" class="text-gray-200 leading-relaxed mb-6 text-sm sm:text-base"></p>
                            </div>

                            <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div class="text-sm text-gray-400">
                                    Regisseur: <span id="detailDirector" class="text-white font-semibold"></span>
                                </div>
                                <button onclick="closeMovieDetailModal()" class="bg-brand text-black font-bold px-6 py-2.5 rounded-xl hover:bg-brand-hover transition-colors cursor-pointer">
                                    Sluiten
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(detailModal);
}

window.openMovieById = function(id) {
    const movie = moviesDatabase.find(m => m.id === id);
    if (movie) {
        openMovieDetailModal(movie);
    }
};

function openMovieDetailModal(movie) {
    document.getElementById("detailPoster").src = movie.poster;
    document.getElementById("detailTitle").textContent = movie.title;
    document.getElementById("detailYearGenre").textContent = `${movie.year} • ${movie.genre}`;
    document.getElementById("detailDuration").textContent = movie.duration;
    document.getElementById("detailImdb").textContent = `⭐ ${movie.imdb} / 10`;
    document.getElementById("detailRt").textContent = `🍅 ${movie.rt}`;
    document.getElementById("detailStreaming").textContent = movie.streaming;
    document.getElementById("detailFullDesc").textContent = movie.fullDesc;
    document.getElementById("detailDirector").textContent = movie.director;

    const modal = document.getElementById("movieDetailModal");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

window.closeMovieDetailModal = function() {
    const modal = document.getElementById("movieDetailModal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
};

// ==========================================
// 8. RANDOMIZER CADEAUTJE ANIMATIE
// ==========================================
function setupGiftAnimationModal() {
    const giftModal = document.createElement("div");
    giftModal.id = "giftAnimationModal";
    giftModal.className = "fixed inset-0 z-50 hidden flex items-center justify-center bg-black/90 backdrop-blur-md";
    giftModal.innerHTML = `
        <div class="text-center p-8">
            <div id="giftBoxContainer" class="inline-flex items-center justify-center w-36 h-36 rounded-3xl bg-brand/20 border-2 border-brand shadow-2xl shadow-brand/30 mb-6">
                <i data-lucide="gift" class="w-20 h-20 text-brand"></i>
            </div>
            <h3 id="giftStatusText" class="text-2xl font-heading font-bold text-white">Cadeautje wordt uitgepakt...</h3>
            <p class="text-gray-400 text-sm mt-2">We zoeken een topfilm voor je uit!</p>
        </div>
    `;
    document.body.appendChild(giftModal);
}

function triggerRandomizer() {
    // Filter de laatst gekozen film eruit zodat het NOOIT dezelfde is
    const availableMovies = moviesDatabase.filter(m => m.id !== lastRandomMovieId);
    const randomIndex = Math.floor(Math.random() * availableMovies.length);
    const selectedMovie = availableMovies[randomIndex];

    // Sla dit ID op voor de volgende keer
    lastRandomMovieId = selectedMovie.id;

    const giftModal = document.getElementById("giftAnimationModal");
    const giftBox = document.getElementById("giftBoxContainer");
    const statusText = document.getElementById("giftStatusText");

    // Reset en toon animatie
    giftBox.classList.remove("animate-gift-pop");
    giftBox.classList.add("animate-gift-wobble");
    statusText.textContent = "Cadeautje wordt uitgepakt...";
    giftModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Na 1.2 seconden klapt het cadeautje open
    setTimeout(() => {
        giftBox.classList.remove("animate-gift-wobble");
        giftBox.classList.add("animate-gift-pop");
        statusText.textContent = `Gevonden: ${selectedMovie.title}!`;
    }, 1200);

    // Na 1.6 seconden sluit de cadeau-animatie en opent het film-informatiescherm
    setTimeout(() => {
        giftModal.classList.add("hidden");
        openMovieDetailModal(selectedMovie);
    }, 1600);
}
