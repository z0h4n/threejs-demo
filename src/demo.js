const THREE = require('three');
const width = 800;
const height = 500;

// -- Scene
const scene = new THREE.Scene();

// -- Using webgl renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(new THREE.Color('lightgray'));
document.getElementById('app').appendChild(renderer.domElement);

// -- Orthographic camera
const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0, 400);
camera.position.set(0, 0, 400);

// -- Earth Mesh = Earth Geometry + Earth Material
const earthGeometry = new THREE.SphereGeometry(200, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load('earth.jpg')
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// -- Axes helper to visualize the rotation of earth
// -- X axis is red
// -- Y axis is green
// -- Z axis is blue
var earhAxesHelper = new THREE.AxesHelper(500);
scene.add(earhAxesHelper);

// -- Soft white Ambient light
const light = new THREE.AmbientLight(new THREE.Color(0x404040));
scene.add(light);

// -- Directional light pointing from left to right
const directionalLight = new THREE.DirectionalLight(new THREE.Color(0xffffff), 2.5);
directionalLight.position.set(-400, 0, 0);
scene.add(directionalLight);

// -- Helper to visualize direction of directional light
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 200);
scene.add(directionalLightHelper);

function animate() {
  requestAnimationFrame(animate);

  earthMesh.rotation.x += 0.005;
  earthMesh.rotation.y += 0.005;
  earthMesh.rotation.z += 0.005;

  earhAxesHelper.rotation.copy(earthMesh.rotation);

  renderer.render(scene, camera);
}

animate();