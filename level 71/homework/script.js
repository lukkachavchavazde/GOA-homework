// Get the reference to the DOM element with the id "child-container"
const child = document.getElementById("child-container");

// Initial position of the element (horizontal position is 0 and vertical position is 0)
let left = 0;
let y = 0;

// Initial direction of movement is set to "right"
let direction = "right";

// Set up an interval to move the element every 10 milliseconds
const moveRight = setInterval(function(){
    
    // Check if the current direction is "right"
    if(direction == "right"){
        left++;  // Move the element 1 pixel to the right by increasing the 'left' value
        if(left == 300){  // When the element has moved 300px to the right
            direction = "bottom";  // Change direction to "bottom"
        }
    } 
    
    // Check if the current direction is "bottom"
    else if(direction == "bottom"){
        y++;  // Move the element 1 pixel down by increasing the 'y' value
        if(y == 300){  // When the element has moved 300px down
            direction = "left";  // Change direction to "left"
        }
    } 
    
    // Check if the current direction is "left"
    else if(direction == "left"){
        left--;  // Move the element 1 pixel to the left by decreasing the 'left' value
        if(left == 0){  // When the element has moved back to the left edge (0px)
            direction = "top";  // Change direction to "top"
        }
    } 
    
    // If the current direction is "top"
    else{
        y--;  // Move the element 1 pixel up by decreasing the 'y' value
        if(y == 0 && left == 0){  // If the element is back at the starting position (0px, 0px)
            clearInterval(moveRight);  // Stop the interval and end the animation
        }
    }

    // Update the position of the 'child' element using inline CSS styles
    child.style.left = left + 'px';  // Set the horizontal position (left)
    child.style.top = y + 'px';  // Set the vertical position (top)

}, 10);  // The function is executed every 10 milliseconds to create a smooth animation


//  made by luka :)