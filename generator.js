

// Random movie generator
// let filmTitleArray = ["A Separation", "About Elly", "Amores perros", "Amélie", "Better Days",
// "Beyond the Hills", "Beyond the Infinite Two Minutes", "Breathe", "Caché (Hidden)", "Cold War",
// "Coming Home", "Crouching Tiger, Hidden Dragon", "Dogtooth", "Downfall", "Drive My Car", "Hero",
// "Holy Motors", "House of Hummingbird", "I Saw the Devil", "In a Better World", "In the Mood for Love",
// "Incendies", "Innocence", "Let the Right One In", "Like Father, Like Son", "Long Day's Journey Into Night",
// "Loveless", "Lust, Caution", "Mongol: The Rise of the Genghis Khan", "Mustang", "Monsieur Lazhar", "Mother",
// "North Face", "November","Old Boy", "One Cut of the Dead", "Pan's Labyrinth", "Parasite", "Portrait of a Lady on Fire",
// "Quo Vadis, Aida?", "Red Cliff", "Roma", "Spirited Away", "The Broken Circle Breakdown ", "The Class", "The Handmaiden",
// "The Salesman", "The Secret in Their Eyes", "The Square", "Two Days, One Night", "Wadjda", "Wild Tales"];


// function showFilm() {
  // let filmGenerate = filmTitleArray[Math.floor(Math.random() * filmTitleArray.length)];
  // document.getElementById("generated-film").innerHTML = filmGenerate;
// }
// 

let filmTitleArray = ["365 Days", "Atlantics", "Blue is the Warmest Colour","Flee", "In the Fade", "M. Ibrahim and the Flowers of the Koran", "Mirai","Mrs. Serial Killer", "Pan's Labyrinth", "Parasite", "Perfect Strangers", "Persepolis", "The Other Me", "Tokyo Tribe", "Trollhunter"]

let filmLinkArray = ["FilmPages/365Days.html", "FilmPages/Atlantics.html", "FilmPages/Blueisthe.html", "FilmPages/Flee.html", "FilmPages/IntheFade.html", "FilmPages/MIbrahim.html", "FilmPages/Mirai.html", "FilmPages/MrsSerialKiller.html", "FilmPages/Pans.html", "FilmPages/Parasite.html", "FilmPages/PerfectStrangers.html", "FilmPages/Persepolis.html", "FilmPages/TheOtherMe.html", "FilmPages/TokyoTribe.html", "FilmPages/Trollhunter.html"]

let i = 0;

let filmLinkgen = 0;

let butn = document.getElementById("generate-link");
butn.style.display = "none";

function showFilm() {
  i = Math.floor(Math.random() * filmTitleArray.length)
  let filmGenerate = filmTitleArray[i];
  let filmLinkgen = filmLinkArray[i];
  document.getElementById("generated-film").innerHTML = filmGenerate;
  // document.getElementById("generated-link").innerHTML = filmLinkgen;
  // document.getElementById("generated-link").innerHTML = filmLinkArray[i];
  console.log(filmLinkgen);
  console.log(i);
  
  butn.style.display = "block";
  
}

function visitPage(){
        window.location= filmLinkArray[i];

    }