var individualQuotes = [];
var imageArray = new Array(20)
var lastIndex = 0;

for (let i = 0; i < imageArray.length; i++) {
  imageArray[i] = i + ".jpg";
}

document.getElementById('myimage').src = randomImage();

$.ajax({
  type: 'GET',
  url: 'https://raw.githubusercontent.com/BetweenBeltSizes/BRUCEQUOTES/master/the_quotes/myfile.txt',
  async: false
}).done(function(data) {
  individualQuotes = data.split('\n');
});

getNewQuote();

function getNewQuote() {
  var random = Math.floor(Math.random() * individualQuotes.length);
  $('#quote').text(individualQuotes[random]);
}

function randomImage() {
  var imgDir = 'bruce_pics/';

  var imgIndex = lastIndex;

  do {
    imgIndex = Math.floor(Math.random() * imageArray.length);
  } while (imgIndex === lastIndex);

  return imgDir + imageArray[imgIndex];
}

function Image(path) {
  var x = document.createElement("IMG");
  x.setAttribute("src", path);
  x.style.left = "0px";
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}

$('.get-quote-btn').on('click', function() {
  event.preventDefault();
  getNewQuote();

  var newImage = randomImage();

  document.getElementById('myimage').src = newImage;
  Image(newImage);
})
