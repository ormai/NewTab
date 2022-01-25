const quotes = [
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
    "quote": "Andy Dufresne: I guess it comes down to a simple choice, really. Get busy living, or get busy dying.",
    "author": "The Shawshank Redemption"
  }
];

// Generate a random number based on the number of quotes available in the array
const index = Math.floor(Math.random()*quotes.length);

document.getElementById('quote-text').innerHTML = quotes[index].quote;
document.getElementById('quote-author').innerHTML = quotes[index].author;
