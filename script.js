
var search = "420";
      var queryURL = " https://pokeapi.co/api/v2/pokemon/" + search + "";

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        // console.log(JSON.stringify(response))
        var pokemon = response.name;
        var cap = pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
        var sprite = response.sprites.front_default;
        
        var image = response.sprites.other["official-artwork"].front_default;
        
        var number = response.id;
        
        // var type1 = response.types[0].type.name;
        
        // var type2 = response.types[1].type.name;
        
        var baseStat = response.stats;
        // console.log(baseStat)
        // var statName = response.stats[0].stat.name;
        // console.log(statName)
        var pokeDiv = $("<div>");
        var statDiv = $("<div>");
        var pokeImg = $("<img>");
        var typeDiv = $("<div>");
        var addButton = $("<button>")
        addButton.addClass("add-team")
        addButton.text("Add to Team")
        for (i = 0; i < baseStat.length; i++) {
          console.log(response.stats[i].stat.name);
          console.log(baseStat[i].base_stat);
          var sName = response.stats[i].stat.name
          sName = sName.toUpperCase()
          var sNum = baseStat[i].base_stat
          var p = $("<p>").text(sName);
          var p2 = $("<p>").text(sNum);
          statDiv.append(p);
          statDiv.append(p2);
        }
        for (i = 0; i < response.types.length; i++) {
          var pEl = response.types[i].type.name
          var pElCap = pEl.charAt(0).toUpperCase() + pEl.slice(1)
          var p = $("<p>").text(pElCap)
          typeDiv.append(p)

        }
        pokeImg.attr("src", image);
        var pokeName = $("<h1>").text("Name: " + cap + " #" + number);
        pokeDiv.append(pokeName);
        pokeDiv.append(pokeImg);
        pokeDiv.append(typeDiv);
        pokeDiv.append(statDiv);
        pokeDiv.append(addButton);
        $("#pokemonInfo").append(pokeDiv);
      });
      