import quotes from './quotes.json';

// Generate a random number based on the number of quotes available in the array inside quotes.json
const indx = Math.floor(Math.random()*quotes.quotes.length);

const elemQuote = quotes.quotes[indx].quote;
const elemAuthor = quotes.quotes[indx].author;

const showQuote = document.getElementById("quote-text");
const showAuthor = document.getElementById("author-text");

showQuote.innerHTML = elemQuote;
showAuthor.innerHTML = elemAuthor;
