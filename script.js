
var search = "charizard";
      var queryURL = " https://pokeapi.co/api/v2/pokemon/" + search + "";

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        // console.log(JSON.stringify(response))
        var pokemon = response.name;
        console.log(pokemon)
        var sprite = response.sprites.front_default;
        console.log(sprite)
        var image = response.sprites.other["official-artwork"].front_default;
        console.log(image)
        var number = response.id;
        console.log(number)
        var type1 = response.types[0].type.name;
        console.log(type1)
        var type2 = response.types[1].type.name;
        console.log(type2)
        var baseStat = response.stats;
        // console.log(baseStat)
        // var statName = response.stats[0].stat.name;
        // console.log(statName)
        for (i = 0; i < baseStat.length; i++) {
         console.log(baseStat[i].base_stat)
        }
      });
      