import anime, { AnimeInstance } from "animejs";



export const animateSvgs = async () => {
  let anims: AnimeInstance[] = []

  const signatures = Array.from(document.querySelectorAll(".signature-draw"));
  const logos = Array.from(document.querySelectorAll(".logo-draw"))

  signatures.forEach((signature) => {
    let svg = signature.querySelector('svg');
    let paths: NodeListOf<SVGPathElement> = svg.querySelectorAll(".calcPath")
    for (let p of Array.from(paths)) {
      var len = Math.round(p.getTotalLength());
      p.style.strokeDasharray = len.toString();
      p.style.strokeDashoffset = len.toString();
    }

    anims.push(anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el, i) => i * 1000,
      direction: "forward",
      autoplay: false
    }))
  })

  logos.forEach((logo) => {
    let svg = logo.querySelector('svg');
    let paths: NodeListOf<SVGPathElement> = svg.querySelectorAll(".calcPath")
    for (let p of Array.from(paths)) {
      var len = Math.round(p.getTotalLength());
      p.style.strokeDasharray = len.toString();
      p.style.strokeDashoffset = len.toString();
    }

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el, i) => i * 100,
      direction: "forward",
    })
  })

  for (const anim of anims) {
    anim.play();
    const finished = anim.finished
    await finished;
  }
}


animateSvgs()




















