let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


// Function til kategori baserede billeder
function displayPictures(category) {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach(pic => {
    if (category === 'all' || pic.classList.contains(category)) {
      pic.style.display = 'block';
    } else {
      pic.style.display = 'none';
    }
  });
}

// vis alle pictures
function showAll() {
  displayPictures('all');
}

// vis morgenmad
function Morgenmad() {
  displayPictures('Morgenmad');
}

// vis frokost
function Frokost() {
  displayPictures('Frokost');
}

// vis drikkevare
function Drikkevare() {
  displayPictures('Drikkevare');
}
// vis snacks
function Snacks() {
  displayPictures('Snacks');
}

// vi alle billeder per default
showAll();


function openLightbox() {
  document.getElementById("myModal").style.display = "block"
}
  function closeLightbox() {
  document.getElementById("myModal").style.display = "none"
}


function openLightbox1() {
  document.getElementById("croissant").style.display = "block"
}
  function closeLightbox1() {
  document.getElementById("croissant").style.display = "none"
}

function openLightbox2() {
  document.getElementById("sandwich").style.display = "block"
}
  function closeLightbox2() {
  document.getElementById("sandwich").style.display = "none"
}

function openLightbox3() {
  document.getElementById("kanelsnegl").style.display = "block"
}
  function closeLightbox3() {
  document.getElementById("kanelsnegl").style.display = "none"
}

function openLightbox4() {
  document.getElementById("apple").style.display = "block"
}
  function closeLightbox4() {
  document.getElementById("apple").style.display = "none"
}
function openLightbox5() {
  document.getElementById("kat").style.display = "block"
}
  function closeLightbox5() {
  document.getElementById("kat").style.display = "none"
}