var array = [
    
  
    { "quoteOutput":"Do not take life too seriously", "authorOutput":"Elbert Hubbard" },
    { "quoteOutput":"It's not what happens to you ", "authorOutput":"Epictetus" },
    { "quoteOutput":"The best revenge is massive success", "authorOutput":"Frank Sinatra" },
    { "quoteOutput":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "authorOutput":"Albert Einstein" },
    { "quoteOutput":"Be the change that you wish to see in the world.", "authorOutput":"Mahatma Gandhi" },
    { "quoteOutput":"Resentment is like drinking poison", "authorOutput":"Nelson Mandela" },
    { "quoteOutput":"If you tell the truth, you don't have to remember anything.", "authorOutput":"Mark Twain" },
    { "quoteOutput":"You miss 100% of the shots you don't take", "authorOutput":"Wayne Gretzy" },
];

function GetQuote() {
    var index = Math.floor(Math.random() * array.length);
    
    document.getElementById("quoteOutput").innerHTML = array[index].quoteOutput;
    document.getElementById("authorOutput").innerHTML = array[index].authorOutput;
}


