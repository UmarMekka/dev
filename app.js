//Hamburger In Navigation Menu
const hamburger = document.querySelector("#hamburger");
const links = document.querySelector(".links");
const linkButtons = document.querySelectorAll(".links button");

links.classList.add("unexpand");
linkButtons.forEach((e) => {
  e.classList.toggle("disappear");
});

hamburger.addEventListener("click", () => {
  if (links.classList.contains("show")) {
    linkButtons.forEach((e) => {
      e.classList.toggle("disappear");
    });
    links.classList.toggle("unexpand");
    setTimeout(() => {
      links.classList.toggle("show");
    }, "500");
  } else {
    linkButtons.forEach((e) => {
      e.classList.toggle("disappear");
    });
    links.classList.toggle("unexpand");
    links.classList.toggle("show");
  }
});

//Smooth Scrolling Linked To Navigation
document.querySelectorAll('a[href^="#"').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    console.log("gnarly");
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Contact Section - Typing Effect

const texts = ['Questions? ', 'Commissions? ', 'Consulting? '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let forwards = true;

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }
(function type() {
  let pauseTime = false
    if (count === texts.length){
        count = 0;
    }
    if (forwards === true) {
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      if(letter.length === currentText.length){
        forwards = false;
        pauseTime = true;
      }}

    if (forwards === false) {
      letter = letter.substring(0, letter.length - 1);
      if (letter ===  ''){
        forwards = true;
        count++;
        index = 0;
      }
    }

    document.querySelector('.typing').textContent = letter;

    if (pauseTime === true){
      setTimeout(type, 1200)
    } else {
    setTimeout(type, 100);
      }
}());
