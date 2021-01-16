



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
    //function that adds selected pokemon to team slots
    function addTeamMember() {
      var teamDiv = $("<div class='innerSlot'>");
       var teamName = $(this).attr("data-name");
      var teamImg = $(this).attr("data-img");
      var teamNameEl = $("<p class='teamName'>").text(teamName);
      var teamImgEl = $("<img class='teamImg'>").attr("src", teamImg);
      var slot
      teamDiv.append(teamNameEl)
      teamDiv.append(teamImgEl)
      //makes it so pokemon are added to the slots in order and alerts user is the slots are already full
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
      } else if ($("#Slot6").text() === ""){
         slot = $("#Slot6");
       } else {
         alert("Your team is already fully stacked!")
       }
      
      slot.append(teamDiv)
    };
    //function that clears the team slots upon button press
    $("#clearButton").on("click", function(event) {
      event.preventDefault();
      $( ".teamSlots" ).empty();
    });
    //listener for the dynamically created button that is added with search to run the addTeamMember function
    $(document).on("click", ".add-team", addTeamMember);

    $(document).on("click", "#saveButton", saveTeam);
    function saveTeam(event){
      console.log("something")
      event.preventDefault()
      var slot1 = $("#Slot1").find(".teamName").text()
      var slot1img = $("#Slot1").find(".teamImg").attr("src")

      var slot2 = $("#Slot2").find(".teamName").text()
      var slot2img = $("#Slot2").find(".teamImg").attr("src")

      var slot3 = $("#Slot3").find(".teamName").text()
      var slot3img = $("#Slot3").find(".teamImg").attr("src")

      var slot4 = $("#Slot4").find(".teamName").text()
      var slot4img = $("#Slot4").find(".teamImg").attr("src")

      var slot5 = $("#Slot5").find(".teamName").text()
      var slot5img = $("#Slot5").find(".teamImg").attr("src")

      var slot6 = $("#Slot6").find(".teamName").text()
      var slot6img = $("#Slot6").find(".teamImg").attr("src")


      localStorage.setItem("slot1", slot1)
      localStorage.setItem("slot1img", slot1img)

      localStorage.setItem("slot2", slot2)
      localStorage.setItem("slot2img", slot2img)

      localStorage.setItem("slot3", slot3)
      localStorage.setItem("slot3img", slot3img)

      localStorage.setItem("slot4", slot4)
      localStorage.setItem("slot4img", slot4img)

      localStorage.setItem("slot5", slot5)
      localStorage.setItem("slot5img", slot5img)

      localStorage.setItem("slot6", slot6)
      localStorage.setItem("slot6img", slot6img)
    }
    $(document).on("click", "#displayTeam", displayTeamF);

    function displayTeamF() {
      $( ".teamSlots" ).empty();
      console.log(localStorage.getItem("slot1"))
      $("#Slot1").text(localStorage.getItem("slot1"))
      var slots = [localStorage.getItem("slot1"), localStorage.getItem("slot2"), localStorage.getItem("slot3"), localStorage.getItem("slot4"), localStorage.getItem("slot5"), localStorage.getItem("slot6")]
      for(i=0; i<slots.length; i++){
        console.log(slots[i])
      }
     
     var slot
     teamDiv.append(teamNameEl)
     teamDiv.append(teamImgEl)
     
     slot.append(teamDiv)
    };
