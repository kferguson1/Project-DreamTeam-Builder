



// the search query that will get plugged in for the response
      $("#searchButton").on("click", function(event) {
        event.preventDefault();
        $( "#pokemonInfo" ).empty();
        var input = document.getElementById("searchBar").value;

      //api link 
      var queryURL = " https://pokeapi.co/api/v2/pokemon/" + input + "";  

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
        var pokeDiv = $("<div class='searchDiv'>");
        var statDiv = $("<div class='pokeStats'>");
        var pokeImg = $("<img class='pokeImg'>");
        var typeDiv = $("<div class='pokeType'>");
        var addButton = $("<button>");
        addButton.addClass("add-team");
        addButton.text("Add to Team");
        addButton.attr("data-name", cap).attr("data-img", image);
        pokeImg.attr("src", image);
        var pokeName = $("<h2>").text("Name: " + cap + " #" + number);
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

    });
    function addTeamMember() {
      var teamDiv = $("<div class='innerSlot'>");
       var teamName = $(this).attr("data-name");
      var teamImg = $(this).attr("data-img");
      var teamNameEl = $("<p class='teamName'>").text(teamName);
      var teamImgEl = $("<img class='teamImg'>").attr("src", teamImg);
      var slot
      teamDiv.append(teamNameEl)
      teamDiv.append(teamImgEl)
      console.log($("#Slot1"))
      if ($("#Slot1").text() === ""){
      slot = $("#Slot1");
      } else if ($("#Slot2").text() === ""){
        slot = $("#Slot2");
      } else if ($("#Slot3").text() === ""){
        slot = $("#Slot3");
      } else if ($("#Slot4").text() === ""){
        slot = $("#Slot4");
      } else if ($("#Slot5").text() === ""){
        slot = $("#Slot5");
      } else {
         slot = $("#Slot6");
       }
      
      slot.append(teamDiv)
    };
    $(document).on("click", ".add-team", addTeamMember);