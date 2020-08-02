var quotes=[
   
'Put life in perspective with some short yet sage pieces of advice. ','These wise and beautiful words from your favorite positive thinkers will get you in the right mindset to tackle whatever obstacles lie ahead', 'Inspirational quotes from successful people like Oprah, Helen Keller, and Maya Angelou can help you reframe negative thoughts during tough times and change your attitude so you feel refreshed and motivated', 'Whether you are hoping to achieve success at work, home, or life in general, establishing the right intentions can help you stay positive and optimistic during the challenges fate can throw your way'


]
function newQuoteGenerate(){

    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('showQuote').innerHTML=quotes[randomNumber];
}