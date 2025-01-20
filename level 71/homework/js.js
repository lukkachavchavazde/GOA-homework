document.addEventListener("DOMContentLoaded", () => {
    // Create the big cube container
    const bigCube = document.createElement('div');
    bigCube.id = 'bigCube';
    document.body.appendChild(bigCube);
    
    // Set styles for the big cube
    bigCube.style.width = '300px';
    bigCube.style.height = '300px';
    bigCube.style.background = 'green';
    bigCube.style.overflow = 'hidden';
    bigCube.style.position = 'relative';
  
    // Create the small cube
    const smallCube = document.createElement('div');
    smallCube.id = 'smallCube';
    bigCube.appendChild(smallCube);
  
    // Set styles for the small cube
    smallCube.style.width = '50px';
    smallCube.style.height = '50px';
    smallCube.style.background = 'red';
    smallCube.style.position = 'absolute';
  
    let x = 0, y = 0, step = 5;
  
    function moveCube(event) {
      switch(event.key) {
        case "ArrowRight":
          if (x < 250) x += step;
          break;
        case "ArrowLeft":
          if (x > 0) x -= step;
          break;
        case "ArrowDown":
          if (y < 250) y += step;
          break;
        case "ArrowUp":
          if (y > 0) y -= step;
          break;
        default:
          return;
      }
  
      smallCube.style.transform = `translate(${x}px,${y}px)`;
    }
  
    document.addEventListener("keydown", moveCube);
  });
  