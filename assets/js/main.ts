import { build_headings } from './headings';
import Swup from "swup";
import anime from 'animejs/lib/anime.es';
import "./animations";
import { createIcons, icons } from "lucide";
import { animateSvgs } from './svganimation';
import { initScene, render } from "./ascii"

initScene()

let swup = new Swup();

swup.hooks.on("page:view", () => {
  animateSvgs()
  build_headings()
  createIcons({ icons })
})

export let hasSeenRoot = false

const pathsVisitedStorage = sessionStorage.getItem("pathsVisited")
if (pathsVisitedStorage) {
  hasSeenRoot = Boolean(pathsVisitedStorage)
}



