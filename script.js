const body = document.querySelector("body") // This is selecting the body, so that it can be used to apply the dot's
 
 
 
 
function dotArray() {
Array(200).fill().forEach(() => {   
  const dot = document.createElement("div")
  dot.classList.add("dot")
  dot.style.top = Math.floor(Math.random() * 100) + "%"
  dot.style.left = Math.floor(Math.random() * 100) + "%"
  body.appendChild(dot)
  
})
}

 
 
dotArray()
  

function removeAndRestoreDots(numDots) {
  // Get all of the dots
  const dots = document.querySelectorAll(".dot");
  
  // Remove the specified number of dots
  let counter = 0;
  while (counter < numDots) {
    dots[counter].remove();
    counter++;
    /*if (counter === numDots) {
      counter = 0 // This creates an infinite loop, which is no bueno!
    }*/
  }
  
  // Restore the dots in increments
  /*for (let i = 0; i < numDots; i++) { This works the same just with 1000 * i instead of index in the set timeout time interval argument*/
  dots.forEach((dot, index) => {
    // Wait for 1 second before adding the next dot
    setTimeout(() => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.top = Math.floor(Math.random() * 100) + "%";
      dot.style.left = Math.floor(Math.random() * 100) + "%";
      body.appendChild(dot);
    }, 1000 * index);
  })
  
}

// Test the function by removing and restoring 10 dots
removeAndRestoreDots(150);
   