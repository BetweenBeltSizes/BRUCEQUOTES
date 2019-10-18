var individualQuotes = [];

$.ajax({
  type: 'GET',
  url: '/myfile.txt',
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
