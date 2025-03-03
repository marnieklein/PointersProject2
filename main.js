function toggleBinkySize() {
  var binky = document.getElementById("binky");
  binky.classList.toggle("minimized");
  console.log('minimized');
}

// Function to initialize tooltips
function initializeTooltips() {
  const codeLines = document.querySelectorAll('.code-line');
  
  codeLines.forEach(function(line) {
    line.addEventListener('mouseenter', function() {
      console.log('Mouse entered:', this);
      const tooltip = this.querySelector('.tooltip');
      if (tooltip) {
        tooltip.style.display = 'block';
        console.log('Tooltip shown:', tooltip);
      }
    });

    line.addEventListener('mouseleave', function() {
      console.log('Mouse left:', this);
      const tooltip = this.querySelector('.tooltip');
      if (tooltip) {
        tooltip.style.display = 'none';
        console.log('Tooltip hidden:', tooltip);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var binky = document.getElementById("binky");
  makeDraggable(binky);
  initializeTooltips(); // Initialize tooltips when the document is ready
});