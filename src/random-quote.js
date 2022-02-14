const quotes = [
  {
    "quote": "<b>Rick</b>: Wubba Lubba Dub Dub!",
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
    "quote": "<b>Rick</b>: When you realise nothing matters, the universe is yours.",
    "author": "Rick and Morty"
  },
  {
    "quote": "<b>Rick</b>: Uncertainty is inherently unsustainable. Eventually, everything either is or isn't.",
    "author": "Rick and Morty S2E1"
  },
  {
    "quote": "<b>Rick</b>: Weddings are basically just funerals with cake.",
    "author": "Rick and Morty S2E10"
  },
  {
    "quote": "<b>Rick</b>: Listen Morty, I hate to break it to you, but what people calls \"love\" is just a chemical reaction that compels animals to breed.",
    "author": "Rick and Morty S1E6"
  },
  {
    "quote": "You know the difference between us, Tom? Anyone could have been you, whereas I've always been anyone.",
    "author": "Agent Smith"
  },
  {
    "quote": "Life is pain, highness. Anyone who says differently is selling something.",
    "author": "William Goldman"
  },
  {
    "quote": "L'informatica non riguarda i computer più di quanto l'astronomia riguardi i telescopi.",
    "author": "Edsger Wybe Dijkstra"
  },
  {
    "quote": "La disumanità del computer sta nel fatto che, una volta programmato e messo in funzione, si comporta in maniera perfettamente onesta.",
    "author": "Isaac Asimov"
  },
  {
    "quote": "Mai fidarsi di un computer che non è possibile gettare dalla finestra.",
    "author": "Steve Wozniak"
  },
  {
    "quote": "Il computer non è una macchina intelligente che aiuta le persona stupide, anzi è una macchina stupida che funziona sono nelle mani delle persone intelligenti.",
    "author": "Umberto Eco"
  },
  {
    "quote": "If I had eight hours to chop down a tree, I’d spend the first six of them sharpening my axe.",
    "author": "Abram Lincoln"
  },
  {
    "quote": "Oderint dum metuant",
    "author": "Caligola"
  },
  {
    "quote": "La ragione non è per tutti, quelli che la negano non possono essere conquistati.",
    "author": "Ayn Rand"
  },
  {
    "quote": "È più facile che un cammello passi per la cruna di un ago che un ricco entri nel Regno dei Cieli.",
    "author": "Matteo 19:24"
  },
  {
    "quote": "Numquam felix eris, dum te torquebit felicior.",
    "author": "Séneca"
  },
  {
    "quote": "Non è la religione ad aver creato l'uomo, ma l'uomo ad aver creato la religione.",
    "author": "Mr. Robot"
  },
  {
    "quote": "Cosa sarebbe peggio, vivere da mostro o morire da uomo per bene?",
    "author": "Teddy Daniels (Shutter Island)"
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
    "quote": "<b>Andy Dufresne</b>: I guess it comes down to a simple choice, really. Get busy living, or get busy dying.",
    "author": "The Shawshank Redemption"
  },
  {
    "quote": "Sed fugit interea fugit irreparabile tempus",
    "author": "Publius Vergilius Maro"
  }
];

// Generate a random number based on the number of quotes available in the array
const index = Math.floor(Math.random()*quotes.length);

document.getElementById('quote-text').innerHTML = quotes[index].quote;
document.getElementById('quote-author').innerHTML = quotes[index].author;
