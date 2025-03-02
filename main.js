// Add this script in your static/main.js file

function makeDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  // If present, the header is where you move the DIV from:
  if (document.querySelector("#binky .close-btn")) {
      document.querySelector("#binky .close-btn").onmousedown = dragMouseDown;
  } else {
      // Otherwise, move the DIV from anywhere inside the DIV:
      element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // Get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // Call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // Calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // Set the element's new position:
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
      // Stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
  }
}

// Call the function for the binky element
document.addEventListener('DOMContentLoaded', function() {
  var binky = document.getElementById("binky");
  makeDraggable(binky);
});