const featureImages = document.querySelectorAll(".featureImage");
const featureSlider = document.querySelector(".featureImageSlider");
const featureName = document.querySelector(".featureInfo h3");
const featureInfo = document.querySelector(".featureInfo p");
const carouselBG = document.querySelector(".carouselBG");
const carouselTop = document.querySelector(".carouselTop");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const learnMoreLinks = document.querySelectorAll(".learnMore");


let sliderPos = 1;

const featureDetails = [
  {
    name: "Spacious",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quos ipsum eius numquam molestiae ad recusandae iusto aut quis quae quibusdam officia autem asperiores delectus nihil ipsam soluta obcaecati. Dolor.",
  },
  {
    name: "Cutting Edge",
    info: "Amet consectetur adipisicing elit. Reiciendis, quos ipsum eius numquam molestiae ad recusandae iusto aut quis quae quibusdam officia autem asperiores delectus nihil ipsam soluta obcaecati. Dolor. Lorem ipsum dolor sit. ",
  },
  {
    name: "Off-Road",
    info: "Adipisicing elit. Reiciendis, quos ipsum eius numquam molestiae ad recusandae iusto aut quis quae quibusdam officia autem asperiores delectus nihil ipsam soluta obcaecati. Dolor. Lorem ipsum dolor sit, amet consectetur.",
  }
];

function slideOff() {
  if (sliderPos < 1) {
    sliderPos = 3;
  } else if (sliderPos > 3) {
    sliderPos = 1;
  }
}

function slide() {
  if (sliderPos === 1) {
    featureImages[0].style.opacity = "1";
    featureImages[1].style.opacity = "0";
    featureImages[2].style.opacity = "0";
    carouselBG.style.backgroundPosition = "0% 0%";
    carouselTop.style.backgroundPosition = "0% 0%";
    featureName.innerText = `${featureDetails[0].name}`;
    featureInfo.innerText = `${featureDetails[0].info}`;
  } else if (sliderPos === 2) {
    featureImages[0].style.opacity = "0";
    featureImages[1].style.opacity = "1";
    featureImages[2].style.opacity = "0";
    carouselBG.style.backgroundPosition = "50% 0%";
    carouselTop.style.backgroundPosition = "50% 0%";
    featureName.innerText = `${featureDetails[1].name}`;
    featureInfo.innerText = `${featureDetails[1].info}`;
  } else if (sliderPos === 3) {
    featureImages[0].style.opacity = "0";
    featureImages[1].style.opacity = "0";
    featureImages[2].style.opacity = "1";
    carouselBG.style.backgroundPosition = "100% 0%";
    carouselTop.style.backgroundPosition = "100% 0%";
    featureName.innerText = `${featureDetails[2].name}`;
    featureInfo.innerText = `${featureDetails[2].info}`;
  }
  console.log(sliderPos);
}

prevButton.addEventListener("click", () => {
  sliderPos--;
  slideOff();
  slide();
});
nextButton.addEventListener("click", () => {
  sliderPos++;
  slideOff();
  slide();
  console.log(carouselBG.style.backgroundPosition);
});

slide();
