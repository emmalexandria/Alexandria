import anime from "animejs/lib/anime.es.js";
import { hasSeenRoot } from "./main";


if (!hasSeenRoot) {
  const subtleLandAnimation = document.querySelectorAll(".subtle-land-anime");
  anime({
    targets: '.subtle-land-anime',
    opacity: [0, 1],
    translateY: [-100, 0],
    duration: 1300,
    easing: 'easeOutQuad'
  })
}





