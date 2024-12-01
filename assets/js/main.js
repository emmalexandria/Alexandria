import anime from "animejs/lib/anime.es.js"

const themeToggle = document.querySelector('#darkToggle');
const darkLabel = document.querySelector("#darkLabel");
const lightLabel = document.querySelector("#lightLabel")


const light = "light";
const dark = "dark";
let theme = light;

if (localStorage.getItem("theme") != null) {
  theme = localStorage.getItem("theme");
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = "dark"
    localStorage.setItem("theme", "dark")
  } else {
    theme = "light"
    localStorage.setItem("theme", "light")
  }
}

if (theme == "dark") {
  document.documentElement.classList.add(dark);
  themeToggle.checked = true
} else {
  themeToggle.checked = false
}


themeToggle.addEventListener('click', function () {
  if (this.checked) {
    localStorage.setItem("theme", dark);
    document.documentElement.classList.add(dark);
    anime({ targets: darkLabel, transformY: -250, duration: 250 });
    anime({ targets: lightLabel, transformY: 250, duration: 250 });

  } else {
    localStorage.setItem("theme", light);
    document.documentElement.classList.remove(dark);
    anime({ targets: lightLabel, transformY: -250, duration: 250 });
    anime({ targets: darkLabel, transformY: 250, duration: 250 });
  }
});

const moonPath = "M28 51.5C28 79.1142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 28 23.8858 28 51.5Z";
const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

let toggle = true;

themeToggle.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  timeline.add({
    targets: ".sun",
    d: [{ value: toggle ? sunPath : moonPath }]
  })
    .add({
      targets: "#darkmode",
      rotate: toggle ? 0 : 320
    }, "-=320")


  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }

});
