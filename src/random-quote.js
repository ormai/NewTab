const quotes = [
    {
        "quote": "“You yawned,” said the Vicar. “Do you never yawn in the angelic country?”<br>“Never,” said the Angel.<br>“And yet you are immortal!”",
        "author": "H.G. Wells, The Wonderful Visit"
    },
    {
        "quote": "And I have by me, for my comfort, two strange white flowers - shriveled now, and brown and flat and brittle - to witness that even when mind and strength had gone, gratitude and a mutual tenderness still lived on in the heart of men.",
        "author": "H.G Wells, The Time Machine"
    },
    {
        "quote": "Why afraid? The secret, shameful things are most terribly beautiful.",
        "author": "D.H. Lawrence, The Rainbow"
    },
    {
        "quote": "A cat could lie perfectly peacefully on the hearthrug whilst its master or mistress writhed in agony a yard away.",
        "author": "D.H. Lawrence, The Rainbow"
    },
    {
        "quote": "Ultimately, saying that you don’t care about privacy because you have nothing to hide is no different from saying you don’t care about freedom of speech because you have nothing to say.",
        "author": "Edward Snowden, Permanent Record"
    },
    {
        "quote": "Nothing inspires arrogance like a lifetime spent controlling machines that are incapable of criticism.",
        "author": "Edward Snowden, Permanent Record"
    },
    {
        "quote": "Niente è la morte in confronto alla vergogna.",
        "author": "Leonardo Sciascia, Il giorno della civetta"
    },
    {
        "quote": "Ciò che la plebe imparò un tempo a credere senza ragioni, chi potrebbe rovesciarglielo – con delle ragioni?",
        "author": "Nietzsche, Così parlò Zarathustra"
    },
    {
        "quote": "Dormire non è un'arte da poco: per farlo, bisogna prima essere stati desti tutto il giorno.",
        "author": "Nietzsche, Così parlò Zarathustra"
    },
    {
        "quote": "Il mozzicone di candela già da un pezzo si stava spegnendo nel candeliere storto, e illuminava con la sua luce fioca, in quella misera stanza, l'assassino e la peccatrice, stranamente riuniti nella lettura del libro eterno.",
        "author": "Fedor Dostojevskij, Delitto e Castigo"
    },
    {
        "quote": "Così, avendo profondissima la convinzione della propria genialità, e sentendosi ammirato e amato, egli conservava con tutta naturalezza il suo contegno di persona superiore.",
        "author": "Italo Svevo, Senilità"
    },
    {
        "quote": "L'inventiva, bisogna ammetterlo con umiltà, non consiste nel creare dal vuoto, bensì dal caos.",
        "author": "Mary Shelley, Frankestein"
    },
    {
        "quote": "<b>Rick</b>: Wubba Lubba Dub Dub!",
        "author": "Rick and Morty"
    },
    {
        "quote": "It is only the attempt to write down your ideas that enables them to develop.",
        "author": "Wittgenstein"
    },
    {
        "quote": "What has been done, thought, written, or spoken is not culture; culture is only that fraction which is remembered.",
        "author": "Gary Taylor"
    },
    {
        "quote": "<b>Rick</b>: Love is an expression of familiarity over time.",
        "author": "Rick and Morty"
    },
    {
        "quote": "<b>Morty</b>: Everything hurts!<br><b>Rick</b>: That's because you're worthless!",
        "author": "Rick and Morty"
    },
    {
        "quote": "<b>Rick</b>: When Smart people get happy they stop recognising themselves.",
        "author": "Rick and Morty"
    },
    {
        "quote": "WAR IS PEACE<br>FREEDOM IS SLAVERY<br>IGNORANCE IS STRENGTH",
        "author": "George Orwell, 1984"
    },
    {
        "quote": "The best books are those that tell you what you know already.",
        "author": "George Orwell 1984"
    },
    {
        "quote": "From the proletarians nothing is to be feared. Left to themselves, they will continue from generation to generation and from century to century, working, breeding and dying.",
        "author": "George Orwell 1984"
    },
    {
        "quote": "L'esperienza non ha alcun valore etico, è solo il nome che gli uomini danno i propri errori.",
        "author": "Il ritratto di Dorian Gray, Capitolo quarto"
    },
    {
        "quote": "I libri che si definiscono immorali sono quelli che rivelano al mondo la sua vergogna.",
        "author": "Il ritratto di Dorian Gray, Capitolo diciannovesimo"
    },
    {
        "quote": "La più nobile come la più bassa forma di critica sono una sorta di autobiografia.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "<b>Rick</b>: When you realise nothing matters, the universe is yours.",
        "author": "Rick and Morty"
    },
    {
        "quote": "THE BIG BROTHER IS WATCHING YOU",
        "author": "1984"
    },
    {
        "quote": "We shall meet in the place where there is no darkness.",
        "author": "1984"
    },
    {
        "quote": "<b>Rick</b>: Weddings are basically just funerals with cake.",
        "author": "Rick and Morty S2E10"
    },
    {
        "quote": "Il computer non è una macchina intelligente che aiuta le persona stupide, anzi è una macchina stupida che funziona solo nelle mani delle persone intelligenti.",
        "author": "Umberto Eco"
    },
    {
        "quote": "If I had eight hours to chop down a tree, I’d spend the first six of them sharpening my axe.",
        "author": "Abram Lincoln"
    },
    {
        "quote": "Si può dire che c'è una dolcezza straziante nei libri, qualcosa che si tocca con la mano e dà refrigerio anche se poi non si fa mai acchiappare del tutto.",
        "author": "Dacia Maraini - \"La Scuola ci salverà\""
    },
    {
        "quote": "Non è la religione ad aver creato l'uomo, ma l'uomo ad aver creato la religione.",
        "author": "Mr. Robot"
    },
    {
        "quote": "I miei giorni di scuola! Lo scorrere silenzioso della mia esistenza...",
        "author": "David Copperfield"
    },
    {
        "quote": "It’s so easy to forget how much noise the Matrix pumps into your head until you unplug.",
        "author": "Niobe"
    },
    {
        "quote": "<b>Andy Dufrense</b>: I guess it comes down to a simple choice, really. Get busy living, or get busy dying.",
        "author": "The Shawshank Redemption"
    },
    {
        "quote": "So it goes.",
        "author": "Kurt Vonnegut, Slaughterhouse-Five"
    },
    {
        "quote": "<b>Billy</b>: Why me?<br><b>Trafalmadorian</b>: Why you? Why us for that matter? Why anything? Because this moment simply is.",
        "author": "Kurt Vonnegut, Slaughterhouse-Five"
    },
    {
        "quote": "Sed fugit interea fugit irreparabile tempus",
        "author": "Publius Vergilius Maro"
    },
    {
        "quote": "Meglio dormire con un cannibale sobrio che con un cristiano ubriaco.",
        "author": "Ismaele, Moby Dick"
    },
    {
        "quote": "Una volta i libri venivano scritti da uomini di lettere e letti dal pubblico. Oggi i libri sono scritti dal pubblico e letti da nessuno.",
        "author": "Oscar Wilde"
    }
];

// Generate a random index within the range of available quotes
const index = Math.floor(Math.random()*quotes.length);
document.getElementById("quote").innerHTML = quotes[index]["quote"];
document.getElementById("quote-author").innerHTML = quotes[index]["author"];
