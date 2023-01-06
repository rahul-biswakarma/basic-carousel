var currentSlide = 0;

function nextSlide() {
  var slides = document.getElementsByClassName("slide");
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  var slides = document.getElementsByClassName("slide");
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function showSlide(index) {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "flex";
}

function updateText(i) {
  console.log(document.getElementById(`h${i}`));
  document.getElementById(`h${i}`).innerHTML = document.getElementById(
    `input${i}`
  ).value;
}
