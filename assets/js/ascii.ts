import { Scene, WebGLRenderer, PerspectiveCamera, Color, Vector3, Mesh, BoxGeometry, MeshBasicMaterial } from "three"



let scene = new Scene();
let renderer: WebGLRenderer;
let sphere: any;
let camera: any;
scene.background = new Color(0, 0, 0);

const start = Date.now();
export function initScene() {
  scene = new Scene()
  camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.set(0, 1, -10)

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Mesh(geometry, material);



  const animate = () => {

    const timer = Date.now() - start;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


    render(renderer.domElement, window.innerWidth, window.innerHeight)
  }

  renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate);
  renderer.setClearColor(0x000000, 1.0)



  scene.add(cube);
}

export function render(gl, width, height) {
  renderer.render(scene, camera)
}



