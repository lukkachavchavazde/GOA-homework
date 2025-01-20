document.getElementById("bigCube").style.cssText = "width:300px;height:300px;background:green;overflow:hidden;";
const smallCube = document.getElementById("smallCube");
smallCube.style.cssText = "width:50px;height:50px;background:red;";

let x = 0, y = 0, step = 2;
let loopComplete = false;

function animate() {
  if (loopComplete) return;

  if (x < 250 && y === 0) x += step;
  else if (x === 250 && y < 250) y += step;
  else if (y === 250 && x > 0) x -= step;
  else if (x === 0 && y > 0) y -= step;

  smallCube.style.transform = `translate(${x}px,${y}px)`;

  if (x === 0 && y === 0) loopComplete = true;
  else requestAnimationFrame(animate);
}

animate();
