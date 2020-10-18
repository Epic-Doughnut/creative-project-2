document.getElementById("animalButton").addEventListener("click", function(event) {
  event.preventDefault();

  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const url = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
  fetch(proxyUrl + url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let results = "<img src=\"" + json + "\">";

    document.getElementById("animal").innerHTML = results;
  });

});
