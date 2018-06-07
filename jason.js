// var amigos = [
// 	{
// 		"id":"001",
// 		"name":"Charmander",
// 		"photo":"01",
// 		"type":"fire"
// 	},
// 	{
// 		"id":"002",
// 		"name":"Kanjaskan",
// 		"photo":"02",
// 		"type":"fighting"
// 	},
// 	{
// 		"id":"003",
// 		"name":"Mewtwo",
// 		"photo":"03",
// 		"type":"fairy"
// 	},
// 	{
// 		"id":"004",
// 		"name":"Blastoise",
// 		"photo":"04",
// 		"type":"water"
// 	},
// 	{
// 		"id":"005",
// 		"name":"Bulbasaur",
// 		"photo":"05",
// 		"type":"grass"
// 	},
// 	{
// 		"id":"006",
// 		"name":"Magikarp",
// 		"photo":"06",
// 		"type":"water"
// 	},
// 	{
// 		"id":"007",
// 		"name":"Pikachu",
// 		"photo":"07",
// 		"type":"electric"
// 	},
// 	{
// 		"id":"008",
// 		"name":"Gengar",
// 		"photo":"08",
// 		"type":"ghost"
// 	},
// 	{
// 		"id":"009",
// 		"name":"Vamoacalmarno",
// 		"photo":"09",
// 		"type":"water"
// 	}
// ];

function json() {

	var content = "";

	for(var i=0; i<amigos.length; i++){
		content += "<div class='amigoItem'>";
    content += "<img class='pokeImg' src=" + amigos[i].ThumbnailImage +">";
    content += "<div class='pokeInfo'>";
		content += "<h3>" + amigos[i].name + "</h3>";
    content += "<div class='pokeDetail'>" + amigos[i].id + "<img class='pokeType' src='/Users/jordanddisch/dev/desktop/primer-sitio/clase14-json/pokedex/img/types/" + amigos[i].type +".png'/>" + "</div>";
    content += "</div>";
		content += "</div>";
	}
		document.getElementById("pokedex").innerHTML = content;
}


function showPokemon(query) {
	var result = "";

  if(query == null){
    for(var i=0; i<amigos.length; i++){
      result += amigos[i].name + "<br>";
    }
    document.getElementById("result").innerHTML = result;
  } else {
    for(var i=0; i<amigos.length; i++){
      if(amigos[i].name.toLowerCase().search(query) >= 0){
				result  += "<div class='amigoItem'>";
		    result  += "<img class='pokeImg' src=" + amigos[i].ThumbnailImage +">";
		    result  += "<div class='pokeInfo'>";
				result  += "<h3>" + amigos[i].name + "</h3>";
		    result  += "<div class='pokeDetail'>" + amigos[i].id + "<img class='pokeType' src='/Users/jordanddisch/dev/desktop/primer-sitio/clase14-json/pokedex/img/types/" + amigos[i].type +".png'/>" + "</div>";
		    result  += "</div>";
				result  += "</div>";
      }
    }
    document.getElementById("pokedex").innerHTML = result;
  }
}

function searchPokemon() {
  var query = document.getElementById("query").value;

  showPokemon(query);
}
