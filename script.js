src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
var search = "charizard";
      var queryURL = " https://pokeapi.co/api/v2/pokemon/" + search;

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(JSON.stringify(response))
        
      });