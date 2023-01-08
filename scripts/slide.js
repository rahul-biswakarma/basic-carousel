var slideBaseClass = [
  "relative",
  "flex",
  "justify-center",
  "items-center",
  "min-w-full",
  "min-h-full",
  "z-10",
  "transition-all",
];

var slideHeader = ["Name", "Age", "Height", "Liking", "Disliking"];
var slideAnswer = ["Rahul", "21", "180", "No", "No"];
var slideColor = ["#64dfe8", "#fb7185", "#a3e635", "#fb923c", "#f472b6"];
var defaultColor = "#fff";

var defaultQuestion = "Who are you?";
var defaultAnswer = "Fine";

var slides = document.getElementsByClassName("slide");

function updateSlides() {
  // Fetching data from local storage
  if (localStorage.getItem("slideAnswer"))
    slideAnswer = JSON.parse(localStorage.getItem("slideAnswer"));

  // Fetching color from local storage
  if (localStorage.getItem("slideColor"))
    slideColor = JSON.parse(localStorage.getItem("slideColor"));

  // Targeting all slides
  var slides = document.getElementsByClassName("slide");

  // Looping through all slides
  for (var i = 0; i < slides.length; i++) {
    // Add base class
    slides[i].classList.add(...slideBaseClass);

    // Add slide color
    slides[i].style.backgroundColor = slideColor[i];

    // Add slide number
    slides[
      i
    ].innerHTML += `<div class="absolute top-[0] left-[0] opacity-5 text-[20rem] px-[2rem] font-bold font-mono leading-[90%] transition-all">${
      i + 1
    }
          </div>`;

    //   Add slide text
    slides[i].innerHTML += `
        <div class="max-w-[800px] h-80% flex items-center justify-center transition-all">
        
            <div class="flex items-center flex-col gap-[5rem] justify-center transition-all">
                <h1 class="text-3xl">${
                  slideHeader[i] ? slideHeader[i] : defaultQuestion
                }: <span id="h${i + 1}" class="font-bold">${
      slideAnswer[i] ? slideAnswer[i] : defaultAnswer
    }</span></h1>
                <div class="flex flex-col gap-[1rem] bg-white/30 px-[30%] py-[10%] transition-all">
                    <input class="border-b-2 border-black p-[1rem] transition-all" type="text" name="input${
                      i + 1
                    }" id="input${i + 1}"
                        value="${
                          slideAnswer[i] ? slideAnswer[i] : defaultAnswer
                        }" placeholder="Slide ${i + 1}" />
                    <button onclick="updateText(${i + 1})"
                        class="font-bold bg-black/60 px-[2rem] py-[0.5rem] text-white transition-all">
                        Update
                    </button>
                </div>
                <div class="flex gap-[10px] bg-white/30 px-[30%] py-[10%] transition-all">Change Color
                <input type="color" name="color" id="color${
                  i + 1
                }" onchange="changeColor(${i + 1})" value="${
      slideColor[i] ? slideColor[i] : "#ffffff"
    }"></div>
            </div>
        </div>
        `;
  }
}

window.onload = function () {
  updateSlides();
};

function changeColor(i) {
  slides[i - 1].style.backgroundColor = document.getElementById(
    `color${i}`
  ).value;
  slideColor[i - 1] = document.getElementById(`color${i}`).value;
  localStorage.setItem("slideColor", JSON.stringify(slideColor));
}
