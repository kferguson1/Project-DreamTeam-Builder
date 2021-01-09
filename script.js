// the search query that will get plugged in for the response
var search = "420";
//api link 
      var queryURL = " https://pokeapi.co/api/v2/pokemon/" + search + "";
//ajax method to get the JSON back from the api
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        //getting all info from JSON response
        var pokemon = response.name;
        var cap = pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
        var sprite = response.sprites.front_default;
        var image = response.sprites.other["official-artwork"].front_default;
        var number = response.id;
        var baseStat = response.stats;
        //creating elements to put info into html
        var pokeDiv = $("<div>");
        var statDiv = $("<div>");
        var pokeImg = $("<img>");
        var typeDiv = $("<div>");
        var addButton = $("<button>")
        addButton.addClass("add-team")
        addButton.text("Add to Team")
        pokeImg.attr("src", image);
        var pokeName = $("<h1>").text("Name: " + cap + " #" + number);
        //getting base stats to add into the statDiv element
        for (i = 0; i < baseStat.length; i++) {
          var sName = response.stats[i].stat.name
          sName = sName.toUpperCase()
          var sNum = baseStat[i].base_stat
          var p = $("<p>").text(sName);
          var p2 = $("<p>").text(sNum);
          statDiv.append(p);
          statDiv.append(p2);
        }
        //getting pokemon types or type to add to typeDiv
        for (i = 0; i < response.types.length; i++) {
          var pEl = response.types[i].type.name
          var pElCap = pEl.charAt(0).toUpperCase() + pEl.slice(1)
          var p = $("<p>").text(pElCap)
          typeDiv.append(p)

        }
        //apending all the info into 1 div in order then adding that div to the html
        pokeDiv.append(pokeName);
        pokeDiv.append(pokeImg);
        pokeDiv.append(typeDiv);
        pokeDiv.append(statDiv);
        pokeDiv.append(addButton);
        $("#pokemonInfo").append(pokeDiv);
      });
      