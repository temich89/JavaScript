function generate(){
  var quotes = {
    "yandex" : "'Компаниия 1'",
    "google" : "'Компания 2'",
    "rambler" : "'Компания 3'"
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)]

  var quote = quotes[author]

  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
}
