var individualQuotes = [];

$.ajax({
  type: 'GET',
  url: 'https://raw.githubusercontent.com/BetweenBeltSizes/BRUCEQUOTES/master/getting%20the%20quotes/myfile.txt',
  async: false
}).done(function (data) {
  console.log(data);
  individualQuotes = data.split('\n');
});

getNewQuote();

function getNewQuote() {
    var random = Math.floor(Math.random() * individualQuotes.length);
    $('#quote').text(individualQuotes[random]);
}

$('.get-quote-btn').on('click', function(){
  event.preventDefault();
  getNewQuote();
})
