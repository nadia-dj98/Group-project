
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


///

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

Darbareye Elly
Das Leben der Anderen
Der Untergang
Deux jours, une nuit
Diqiu zuihou de yewan
Doraibu mai kÃ¢
Droste no hate de bokura
Dupa dealuri
El hoyo
El laberinto del fauno
El secreto de sus ojos
Entre les murs
Forushande
Gisaengchung
Gui lai
HÃ¦vnen
Hable con ella
Holy Motors
In the Mood for Love 2001
Incendies
Innocence
Jodaeiye Nader az Simin
Kamera o tomeru na!
Kynodontas
LÃ¥t den rÃ¤tte komma in
Le fabuleux destin d'AmÃ©lie Poulain
MÃ¤n som hatar kvinnor
Madeo
Mongol
Monsieur Lazhar
Mustang
Nelyubov
Nordwand
November
Oldeuboi
Portrait de la jeune fille en feu
Quo vadis, Aida?
Relatos salvajes
Respire
Roma
Se, jie
Sen to Chihiro no kamikakushi
Shaonian de ni
Soshite chichi ni naru
The Broken Circle Breakdown
The Farewell
The Square
Thelma
Toni Erdmann
Victoria
Wadjda
Wo hu cang long
Ying xiong
Zimna wojna

"]
