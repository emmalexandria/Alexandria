import { build_headings } from './headings';
import Swup from "swup";
import "./animations.js";
import { createIcons, icons } from "lucide";


let swup = new Swup();

swup.hooks.on("page:view", () => {
  build_headings()
})

export let hasSeenRoot = false

const pathsVisitedStorage = sessionStorage.getItem("pathsVisited")
if (pathsVisitedStorage) {
  hasSeenRoot = pathsVisitedStorage
}















