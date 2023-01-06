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

function updateSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add(...slideBaseClass);

    // Add slide number
    slides[
      i
    ].innerHTML += `<div class="absolute top-[0] left-[0] opacity-5 text-[20rem] px-[2rem] font-bold font-mono leading-[90%] transition-all">${
      i + 1
    }
          </div>`;

    //   Add slide text
    slides[i].innerHTML += `
        <div class="max-w-[800px] h-80% flex items-center flex-col gap-[5rem] justify-center">
            <h1 id="h${i + 1}" class="text-9xl font-bold">Slide ${i + 1}</h1>
            <div class="flex flex-col gap-[1rem] bg-white/30 px-[30%] py-[10%] transition-all">
                <input class="border-b-2 border-black p-[1rem] transition-all" type="text" name="input0" id="input${
                  i + 1
                }"
                    value="Slide ${i + 1}" placeholder="Slide ${i + 1}" />
                <button onclick="updateText(${i + 1})"
                    class="font-bold bg-black/60 px-[2rem] py-[0.5rem] text-white transition-all">
                    Update
                </button>
            </div>
        </div>
        `;
  }
}

window.onload = function () {
  updateSlides();
};
