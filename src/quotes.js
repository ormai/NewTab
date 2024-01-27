const quotes = [
  [
    "Three Rings for the Elven-kings under the sky,<br>Seven for the Dwarf-lords in their halls of stone,<br>Nine for Mortal Men doomed to die,<br>One for the Dark Lord on his dark throne<br>In the Land of Mordor, where the Shadows lie.<br>One Ring to rule them all, One Ring to find them,<br>One Ring to bring them all and in the darkness bind them<br>In the Land of Mordor where the Shadows lie.",
    "The Fellowship of the Ring",
  ],
  [
    "There are 10 kinds of people in this world; those who understand binary, and those who don't.",
    "Mathematics and Humor",
  ],
  ["Son, your ego is writing checks your body can't cash.", "Top Gun"],
  [
    "But in high school the business of irrevocable choices began. Doors slipped shut with a faint locking click that was only heard clearly in the dreams of later years.",
    "Cujo",
  ],
  [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Martin Fowler",
  ],
  [
    "Any finite number divided by infinity is as near to nothing as makes no odds, so the average population of all the planets in the Universe can be said to be zero. From this it follows that the population of the whole Universe is also zero, and that any people you may meet from time to time are merely the products of a deranged imagination.",
    "The Hitchhiker's Guide to the Galaxy",
  ],
  [
    "Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
    "Avatar: The last Airbender",
  ],
  [
    "You put a textbook in front of these kids, put a problem on the blackboard, teach them every problem in some statewide test, it won't matter. None of it. 'Cause they're not learning for our world; they're learning for theirs. They know exactly what it is they're training for and what it is everyone expects them to be. It's not about you or us or the test or the system. It's what they expect of themselves. Every single one of them know they're headed back to the corners. Their brothers and sisters, their parents. They came through these same classrooms. We pretended to teach them, they pretended to learn and where'd they end up? Same corners. They're not fools, these kids. They don't know our world but they know their own. They see right through us.",
    "The Wire",
  ],
  [
    "Everybody is identical in their secret unspoken belief that way deep down they are different from everyone else.",
    "Infinite Jest",
  ],
  [
    "In the witch trials, it was nearly impossible to provide compelling alibis for accused witches: The rules of evidence had a special character. For example, in more than one case a husband attested that his wife was asleep in his arms at the very moment she was accused of frolicking with the devil; but the archbishop patiently explained that a demon had taken the place of the wife.",
    "The Demon-Haunted World: Science as a Candle in the Dark",
  ],
  [
    "People shouldn't be afraid of their government. Governments should be afraid of their people.",
    "V for Vendetta",
  ],
  [
    "It's only after we've lost everything that we're free to do anything.",
    "Fight Club",
  ],
  [
    "“You yawned,” said the Vicar. “Do you never yawn in the angelic country?”<br>“Never,” said the Angel.<br>“And yet you are immortal!”",
    "The Wonderful Visit",
  ],
  [
    "And I have by me, for my comfort, two strange white flowers - shriveled now, and brown and flat and brittle - to witness that even when mind and strength had gone, gratitude and a mutual tenderness still lived on in the heart of men.",
    "The Time Machine",
  ],
  [
    "Why afraid? The secret, shameful things are most terribly beautiful.",
    "The Rainbow",
  ],
  [
    "A cat could lie perfectly peacefully on the hearthrug whilst its master or mistress writhed in agony a yard away.",
    "The Rainbow",
  ],
  [
    "Ultimately, saying that you don’t care about privacy because you have nothing to hide is no different from saying you don’t care about freedom of speech because you have nothing to say.",
    "Permanent Record",
  ],
  [
    "Nothing inspires arrogance like a lifetime spent controlling machines that are incapable of criticism.",
    "Permanent Record",
  ],
  ["Niente è la morte in confronto alla vergogna.", "Il giorno della civetta"],
  [
    "Ciò che la plebe imparò un tempo a credere senza ragioni, chi potrebbe rovesciarglielo – con delle ragioni?",
    "Così parlò Zarathustra",
  ],
  [
    "Dormire non è un'arte da poco: per farlo, bisogna prima essere stati desti tutto il giorno.",
    "Così parlò Zarathustra",
  ],
  [
    "Il mozzicone di candela già da un pezzo si stava spegnendo nel candeliere storto, e illuminava con la sua luce fioca, in quella misera stanza, l'assassino e la peccatrice, stranamente riuniti nella lettura del libro eterno.",
    "Delitto e castigo",
  ],
  [
    "Eccoli qui: vanno e vengono su e giù per la strada, e sì che ciascuno di loro, per la sua stessa natura, è un mascalzone e un bandito; o, peggio ancora, un idiota! Ma se non mandassero me ai lavori forzati, tutti quanti si infurierebbero, pieni di nobile sdegno! Oh, come li odio!",
    "Delitto e castigo",
  ],
  [
    "Così, avendo profondissima la convinzione della propria genialità, e sentendosi ammirato e amato, egli conservava con tutta naturalezza il suo contegno di persona superiore.",
    "Senilità",
  ],
  [
    "L'inventiva, bisogna ammetterlo con umiltà, non consiste nel creare dal vuoto, bensì dal caos.",
    "Frankestein",
  ],
  ["Wubba Lubba Dub Dub!", "Rick and Morty"],
  [
    "It is only the attempt to write down your ideas that enables them to develop.",
    "Wittgenstein",
  ],
  [
    "What has been done, thought, written, or spoken is not culture; culture is only that fraction which is remembered.",
    "Gary Taylor",
  ],
  ["Love is an expression of familiarity over time.", "Rick and Morty"],
  [
    "When Smart people get happy they stop recognising themselves.",
    "Rick and Morty",
  ],
  ["WAR IS PEACE<br>FREEDOM IS SLAVERY<br>IGNORANCE IS STRENGTH", "1984"],
  ["The best books are those that tell you what you know already.", "1984"],
  [
    "From the proletarians nothing is to be feared. Left to themselves, they will continue from generation to generation and from century to century, working, breeding and dying.",
    "1984",
  ],
  ["Proles and animals are free.", "1984"],
  [
    "I libri che si definiscono immorali sono quelli che rivelano al mondo la sua vergogna.",
    "Il ritratto di Dorian Gray, Capitolo diciannovesimo",
  ],
  [
    "When you realise nothing matters, the universe is yours.",
    "Rick and Morty",
  ],
  ["THE BIG BROTHER IS WATCHING YOU", "1984"],
  ["We shall meet in the place where there is no darkness.", "1984"],
  ["Weddings are basically just funerals with cake.", "Rick and Morty S2E10"],
  [
    "Il computer non è una macchina intelligente che aiuta le persona stupide, anzi è una macchina stupida che funziona sono nelle mani delle persone intelligenti.",
    "Umberto Eco",
  ],
  [
    "If I had eight hours to chop down a tree, I’d spend the first six of them sharpening my axe.",
    "Abram Lincoln",
  ],
  [
    "Si può dire che c'è una dolcezza straziante nei libri, qualcosa che si tocca con la mano e dà refrigerio anche se poi non si fa mai acchiappare del tutto.",
    "La Scuola ci salverà",
  ],
  [
    "Non è la religione ad aver creato l'uomo, ma l'uomo ad aver creato la religione.",
    "Mr. Robot",
  ],
  [
    "I miei giorni di scuola! Lo scorrere silenzioso della mia esistenza...",
    "David Copperfield",
  ],
  [
    "It’s so easy to forget how much noise the Matrix pumps into your head until you unplug.",
    "Niobe",
  ],
  [
    "<b>Andy Dufrense</b>: I guess it comes down to a simple choice, really. Get busy living, or get busy dying.",
    "The Shawshank Redemption",
  ],
  ["So it goes.", "Slaughterhouse-Five"],
  [
    "<b>Billy</b>: Why me?<br><b>Trafalmadorian</b>: Why you? Why us for that matter? Why anything? Because this moment simply is.",
    "Slaughterhouse-Five",
  ],
  ["Sed fugit interea fugit irreparabile tempus", "Publius Vergilius Maro"],
  [
    "Meglio dormire con un cannibale sobrio che con un cristiano ubriaco.",
    "Moby Dick",
  ],
  [
    "Una volta i libri venivano scritti da uomini di lettere e letti dal pubblico. Oggi i libri sono scritti dal pubblico e letti da nessuno.",
    "Oscar Wilde",
  ],
  [
    "Any physical theory is always provisional, in the sense that it is only a hypothesis: you can never prove it. No matter how many times the results of experiments agree with some theory, you can never be sure that the next time the result will not contradict the theory.",
    "A Brief History of Time",
  ],
  [
    "Think deeply about things. Don’t just go along because that’s the way things are or that’s what your friends say. Consider the effects, consider the alternatives, but most importantly, just think.",
    "Aaron Swartz",
  ],
  [
    "Why are you wasting your time on things you’re good at? Lean into the pain.",
    "Aaron Swartz",
  ],
  [
    "Il caso è talmente disperato e io mi muovo in un tal pantano di sciocchezze, che rinuncio addirittura all'idea di uscirne e mi abbandono al mio fato.",
    "David Copperfield",
  ],
  [
    "Ho sempre visto, osservando la natura umana, che l'uomo il quale abbia buone ragioni per credere in se stesso, non si pavoneggia mai davanti agli altri per indurli a credere in lui.",
    "David Copperfield",
  ],
  [
    "L'esperienza non ha alcun valore etico, è solo il nome che gli uomini danno i propri errori.",
    "Il ritratto di Dorian Gray",
  ],
  [
    "La più nobile come la più bassa forma di critica sono una sorta di autobiografia.",
    "Il ritratto di Dorian Gray",
  ],
  [
    "L'inventiva, bisogna ammetterlo con umiltà, non consiste nel creare dal vuoto, bensì dal caos.",
    "Frankestein",
  ],
  [
    "Una grassona sfiatata, dall'aria sconfitta, con una tuta sporca, che arrancava al nostro fianco, sentì quello che stava dicendo Miss Pefko. Si girò a esaminare il dottor Breed, lanciandogli un'occhiata di impotente rimprovero. Lei odiava la gente che pensava troppo. In quel momento quella donna mi colpì come la degna rappresentante di quasi tutta l'umanità.",
    "Ghiaccio-nove",
  ],
  [
    "Quello che avevo visto, naturalmente, era il rito bokononista del boko-maru, ovvero la fusione delle coscienze. Noi bokononisti crediamo che sia impossibile stare piede-a-piede con una persona senza amarla, a patto che i piedi di entrambe le parti siano puliti e ben curati.",
    "Ghiaccio-nove",
  ],
  ["L'uomo si ritrae in solitudine per peccare.", "Il mestiere di vivere"],
  [
    "Leggendo non cerchiamo idee nuove, ma pensieri già da noi pensati, che acquistano sulla pagina un suggello di conferma. Ci colpiscono degli altri le parole che risuonano in una zona già nostra – che già viviamo – e facendola vibrare ci permettono di cogliere nuovi spunti dentro di noi.",
    "Il mestiere di vivere",
  ],
  [
    "Gli uomini che hanno una tempestosa vita interiore e non cercano sfogo nei discorsi o nella scrittura sono semplicemente uomini che non hanno una tempestosa vita interiore.",
    "Il mestiere di vivere",
  ],
  [
    "Date una compagnia al solitario e parlerà piú di chiunque.",
    "Il mestiere di vivere",
  ],
  [
    "Non bastano le disgrazie a fare di un fesso una persona intelligente.",
    "Il mestiere di vivere",
  ],
  [
    "L’ozio rende lente le ore e veloci gli anni. L’operosità rapide le ore e lenti gli anni.",
    "Il mestiere di vivere",
  ],
  [
    "né il sole né la morte si possono guardare fissi",
    "L'isola del giorno prima",
  ],
  [
    "Monotony collapses time; novelty unfolds it. You can exercise daily and eat healthily and live a long life, while experiencing a short one. If you spend your life sitting in a cubicle and passing papers, one day is bound to blend unmemorably into the next - and disappear. That's why it's so important to change routines regularly, and take vacations to exotic locales, and have as many new experiences as possible that can serve to anchor our memories. Creating new memories stretches out psychological time, and lengthens our perception of our lives.",
    "Moonwalking with Einstein",
  ],
  ["Ha poco valore tutto ciò che ha un prezzo.", "Così parlò Zarathustra"],
  [
    "In verità, l'uomo è una sudicia corrente. Bisogna essere un mare per accogliere una sudicia corrente senza diventare impuri.",
    "Così parlò Zarathustra",
  ],
  [
    "“No, here,” she said, going out to the slope full under the moonshine. She lay motionless, with wide-open eyes looking at the moon. He came direct to her, without preliminaries. She held him pinned down at the chest, awful. The fight, the struggle for consummation was terrible. It lasted till it was agony to his soul, till he succumbed, till he gave way as if dead, lay with his face buried, partly in her hair, partly in the sand, motionless, as if he would be motionless now forever, hidden away in the dark, buried, only buried, he only wanted to be buried in the goodly darkness, only that, and no more.",
    "The Rainbow",
  ],
  [
    "I learned to write because I am one of those people who somehow cannot manage the common communications of smiles and gestures, but must use words to get across things that other people would never need to say.",
    "Moneyball",
  ],
  ["Seek knowledge from the cradle to the grave.", "Prophet Mohammed"],
  [
    "I find to my amazement that the more I love mankind as a whole, the less I love man in particular.",
    "The Brothers Karamazov",
  ],
  [
    "A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.",
    "Mr. Robot",
  ],
  [
    "The voice of anatomy, like the voice of all nature, never reaches the mental ear of the Great Commoner. It is the novel province of anatomy to tell the truth, the whole truth, and nothing but the truth about the structure, the origin and the history of man.",
    "Evolution and Religion in Education: Polemics of the Fundamentalist",
  ],
  [
    "The first principle is that you must not fool yourself, and you are the easiest person to fool.",
    "Richard Feynman",
  ],
  [
    "What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic.",
    "Cosmos, Part 11: The Persistence of Memory",
  ],
  [
    "The main thing to do is pay attention. Pay close attention to everything, notice what no one else notices. Then you'll know what no one else knows, and that's always useful.",
    "The City of Ember",
  ],
  [
    "The weird thing about houses is that they almost always look like nothing is happening inside of them, even though they contain most of our lives. I wondered if that was sort of the point of architecture.",
    "The Fault in Our Stars",
  ],
  [
    "Sometimes terrible things happen, but there's nothing more terrible than not having anybody to tell it to.",
    "Front Desk",
  ],
  [
    "But the law of loving others could not be discovered by reason, because it is unreasonable.",
    "Anna Karenina",
  ],
  [
    "The difference between treason and patriotism is only a matter of dates.",
    "The Count of Monte Cristo",
  ],
  [
    "I have no idea how I untangled the complicated process of words and thought, but it happened quickly and naturally. By the time I was two, all my memories had words, and all my words had meanings.",
    "Out of My Mind",
  ],
  [
    "As long as people believe in absurdities, they will continue to commit atrocities.",
    "Voltaire",
  ],
  [
    "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life.",
    "Jingo",
  ],
  [
    "Even the best-designed chair won't make up for bad posture. Bad posture is the root of many physical problems. So sit upright and don't slouch. Your back should be straight to support the upper part of your body.",
    "Mastering Computer Typing (1995)",
  ],
  [
    "No matter how a program twists and turns to get out of itself, it is still following the rules inherent in itself. It is no more possible for it to escape than it is for a human being to decide voluntarily not to obey the laws of physics.",
    "Gödel, Escher, Bach: An Eternal Golden Braid",
  ],
  [
    "It is better to be unhappy and know the worst, than to be happy in a fool's paradise.",
    "The Idiot",
  ],
  [
    "This gentleman has been standing alone against us. Now, he doesn't say that the boy is not guilty; he just isn't sure. Well, it's not easy to stand alone against the ridicule of others, so he gambled for support... and I gave it to him. I respect his motives. The boy is probably guilty, but - eh, I want to hear more. Right now the vote is 10 to 2...",
    "12 Angry Men",
  ],
  [
    "Academic writers cannot get writer's block. Don't confuse yourself with your friends teaching creative writing in the fine arts department. You're not crafting a deep narrative or composing metaphors that expose mysteries of the human heart. The subtlety of your analysis of variance will not move readers to tears, although the tediousness of it might. People will not photocopy your reference list and pass it out to friends whom they wish to inspire. Novelists and poets are the landscape artists and portrait painters; academic writers are the people with big paint sprayers who repaint your basement.",
    "How to Write a Lot: A Practical Guide to Productive Academic Writing",
  ],
  [
    "The moment one constructs a device to carry into practice a crude idea, he finds himself unavoidably engrossed with the details and defects of the apparatus. As he goes on improving and reconstructing, his force of concentration diminishes and he loses sight of the great underlying principle. Results may be obtained but always at the sacrifice of quality. My method is different. I do not rush into actual work. When I get an idea, I start at once building it up in my imagination. I change the construction, make improvements and operate the device in my mind. It is absolutely immaterial to me whether I run my turbine in thought or test it in my shop.",
    "My Inventions",
  ],
  [
    "You have to do the things you don't want to do, before you can do the things you truly want to do.",
    "Chihayafuru",
  ],
  [
    "He was swimming in a sea of other people's expectations. Men had drowned in seas like that.",
    "Robert Jordan, New Spring",
  ],
  ["You're the one constant in a sea of variables.", "Mr. Robot"],
  [
    "Death is what gives life meaning. To know your days are numbered. Your time is short.",
    "The Ancient One, Doctor Strange",
  ],
  [
    "Remind yourself that overconfidence is a slow and insidious killer.",
    "Darkest Dungeon",
  ],
  [
    "In theory there is no difference between theory and practice. In practice there is.",
    "Yogi Berra",
  ],
  [
    "There's no shame in admitting what you don't know. The only shame is pretending you know all the answers.",
    "Neil deGrasse Tyson",
  ],
  [
    "Madness is such a hard thing to define. Which makes it such an easy label to affix to one's enemies.",
    "Black Sails",
  ],
  [
    "We don't rise to the level of our expectations, we fall to the level of our training.",
    "Archilochus",
  ],
  [
    "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura, ché la diritta via era smarrita.",
    "Dante Alighieri",
  ],
];

const i = Math.floor(Math.random() * quotes.length);
document.getElementById("text").innerHTML = quotes[i][0];
document.getElementById("source").innerHTML = quotes[i][1];
