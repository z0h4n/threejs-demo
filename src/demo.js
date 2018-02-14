const THREE = require('three');
const width = 800;
const height = 500;
let inc = true;

// -- Creating and adding the renderer
const renderer1 = new THREE.WebGLRenderer();
renderer1.setSize(width, height);
document.getElementById('orthographic').appendChild(renderer1.domElement);

// -- Creating a Scene in which we will be adding all our 3D objects
const scene = new THREE.Scene();

// -- Creating an Orthopgrahic camera which will provide an 
// -- orthographic view of all the 3d objects added to the scene
const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000);

const cube_geometry = new THREE.BoxGeometry(100, 100, 100);

const material1 = new THREE.MeshBasicMaterial({ color: 0x9933ff });
const cube1 = new THREE.Mesh(cube_geometry, material1);
cube1.position.set(-250, 100, 0);
scene.add(cube1);

const material2 = new THREE.MeshBasicMaterial({ color: 0x9933ff });
const cube2 = new THREE.Mesh(cube_geometry, material2);
cube2.position.set(-250, -100, 0);
scene.add(cube2);

const material3 = new THREE.MeshLambertMaterial({ color: 0x9933ff });
const cube3 = new THREE.Mesh(cube_geometry, material3);
cube3.position.set(250, 100, 0);
scene.add(cube3);

const material4 = new THREE.MeshPhongMaterial({ color: 0x9933ff, shininess: 100 });
const cube4 = new THREE.Mesh(cube_geometry, material4);
cube4.position.set(250, -100, 0);
scene.add(cube4);

const material5 = new THREE.MeshBasicMaterial({ color: 0x9933ff });
const cube5 = new THREE.Mesh(cube_geometry, material5);
cube5.position.set(0, 0, 0);
scene.add(cube5);

const pointLight = new THREE.PointLight(0xffffff, 1, 0);
pointLight.position.set(250, -250, 200);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
scene.add(pointLightHelper);

// const pointLight2 = new THREE.PointLight(0xffffff, 1, 0);
// pointLight2.position.set(250, -100, 200);
// scene.add(pointLight2);

// const pointLight2Helper = new THREE.PointLightHelper(pointLight2, 10);
// scene.add(pointLight2Helper);

// scene.add(new THREE.AmbientLight({ color: 0xff0000 }))

function animate() {
  requestAnimationFrame(animate);

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  cube1.rotation.z += 0.01;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  cube2.rotation.z += 0.01;

  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;
  cube3.rotation.z += 0.01;

  cube4.rotation.x += 0.01;
  cube4.rotation.y += 0.01;
  cube4.rotation.z += 0.01;

  cube5.rotation.x += 0.01;
  cube5.rotation.y += 0.01;
  cube5.rotation.z += 0.01;

  if (inc) {
    pointLight.position.y += 2
  } else {
    pointLight.position.y -= 2
  }

  if (pointLight.position.y > 250) {
    inc = false;
  }

  if (pointLight.position.y < -250) {
    inc = true;
  }

  updateStage();
}

animate();

function updateStage() {
  renderer1.render(scene, camera);
}

updateStage();