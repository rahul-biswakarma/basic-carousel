var currentSlide = 0;

window.onload = function () {
  assignSlideNumber();
};

function assignSlideNumber() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[
      i
    ].innerHTML += `<div class="absolute top-[0] left-[0] opacity-5 text-[20rem] px-[2rem] font-bold font-mono leading-[90%]">${
      i + 1
    }
      </div>`;
  }
}

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
  slides[index].style.display = "block";
}
