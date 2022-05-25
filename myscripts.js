
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


var film_title = ["A Separation", "About Elly", "Amores perros", "Amélie", "Better Days",
"Beyond the Hills", "Beyond the Infinite Two Minutes", "Breathe", "Caché (Hidden)", "Cold War",
"Coming Home", "Crouching Tiger, Hidden Dragon", "Dogtooth", "Downfall", "Drive My Car", "Hero",
"Holy Motors", "House of Hummingbird", "I Saw the Devil", "In a Better World", "In the Mood for Love",
"Incendies", "Innocence", "Lust, Caution", "Mongol: The Rise of the Genghis Khan", "Mustang", "North Face",
"Old Boy"]

