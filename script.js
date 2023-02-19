const circles = document.querySelectorAll(".circle");
let activeLight = 0;

const element = document.getElementById("toggler");

const wheel = document.querySelectorAll("img");
setInterval(() => {
  changeLight();
}, 3000);

function changeLight() {
  element.classList.remove("on");
  wheel[0].classList.remove("wheel-on");
  wheel[1].classList.remove("wheel-on");
  circles[activeLight].className = "circle";
  activeLight++;

  if (activeLight == 2) {
    element.classList.add("on");
    wheel[0].classList.add("wheel-on");
    wheel[1].classList.add("wheel-on");
  }

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];

  currentLight.classList.add(currentLight.getAttribute("color"));
}
