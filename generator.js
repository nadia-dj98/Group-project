

// Random movie generator
let filmTitleArray = ["A Separation", "About Elly", "Amores perros", "Amélie", "Better Days",
"Beyond the Hills", "Beyond the Infinite Two Minutes", "Breathe", "Caché (Hidden)", "Cold War",
"Coming Home", "Crouching Tiger, Hidden Dragon", "Dogtooth", "Downfall", "Drive My Car", "Hero",
"Holy Motors", "House of Hummingbird", "I Saw the Devil", "In a Better World", "In the Mood for Love",
"Incendies", "Innocence", "Let the Right One In", "Like Father, Like Son", "Long Day's Journey Into Night",
"Loveless", "Lust, Caution", "Mongol: The Rise of the Genghis Khan", "Mustang", "Monsieur Lazhar", "Mother",
"North Face", "November","Old Boy", "One Cut of the Dead", "Pan's Labyrinth", "Parasite", "Portrait of a Lady on Fire",
"Quo Vadis, Aida?", "Red Cliff", "Roma", "Spirited Away", "The Broken Circle Breakdown ", "The Class", "The Handmaiden",
"The Salesman", "The Secret in Their Eyes", "The Square", "Two Days, One Night", "Wadjda", "Wild Tales"];

let filmgenerate = filmTitleArray[Math.floor(Math.random() * filmTitleArray.length)];

function showFilm = () {
  document.getElementById("generated-film").innerHTML = filmgenerate;
}
// document.getElementById("generated-film").innerHTML

