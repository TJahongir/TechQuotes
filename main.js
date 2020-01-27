const url = 'http://quotes.stormconsultancy.co.uk/random.json';
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quoteBlock = document.querySelector('#quote');

let getQuote = () => {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      let { quote, author } = data;
      quoteBlock.innerHTML = `"${quote}"`;
      quoteAuthor.innerHTML = `- ${author}`;
    });
};

getQuote();
quoteBtn.addEventListener('click', getQuote);
