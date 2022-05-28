
//Carrousel slider script//
var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 4000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }


//Random movie generator


// const filmTitleArray = ["A Separation", "About Elly", "Amores perros", "Amélie", "Better Days",
// "Beyond the Hills", "Beyond the Infinite Two Minutes", "Breathe", "Caché (Hidden)", "Cold War",
// "Coming Home", "Crouching Tiger, Hidden Dragon", "Dogtooth", "Downfall", "Drive My Car", "Hero",
// "Holy Motors", "House of Hummingbird", "I Saw the Devil", "In a Better World", "In the Mood for Love",
// "Incendies", "Innocence", "Let the Right One In", "Like Father, Like Son", "Long Day's Journey Into Night",
// "Loveless", "Lust, Caution", "Mongol: The Rise of the Genghis Khan", "Mustang", "Monsieur Lazhar", "Mother",
// "North Face", "November","Old Boy", "One Cut of the Dead", "Pan's Labyrinth", "Parasite", "Portrait of a Lady on Fire",
// "Quo Vadis, Aida?", "Red Cliff", "Roma", "Spirited Away", "The Broken Circle Breakdown ", "The Class", "The Handmaiden",
// "The Salesman", "The Secret in Their Eyes", "The Square", "Two Days, One Night", "Wadjda", "Wild Tales"]

// const image =
// document.querySelector("img");
// const button =
// document.querySelector("button");

// button.addEventListener("click", ()
// =>
// generateRandomFilm(filmTitleArray));

// function
// generateRandomFilm(array){
//   let randomNum = 
//   Math.floor(Math.random() *
//   array.length);
    
// }

