window.onload = function () {

    // Definitions
    var canvas = document.getElementById("paint-canvas");
    var context = canvas.getContext("2d");
    var boundings = canvas.getBoundingClientRect();
  
    // Specifications
    var mouseX = 0;
    var mouseY = 0;
    context.strokeStyle = '#6edff6'; // initial brush color
    context.lineWidth = 3; // initial brush width
    var isDrawing = false;
    var firstTouch = true;
    var firstTouchMouseX = 0;
    var firstTouchMouseY = 0;
  
  
    // Handle Colors
    /*
    var colors = document.getElementsByClassName('colors')[0];
  
    colors.addEventListener('click', function(event) {
      context.strokeStyle = event.target.value || 'black';
    });
    */
  
    // Handle Brushes
    /*var brushes = document.getElementsByClassName('brushes')[0];
  
    brushes.addEventListener('click', function(event) {
      context.lineWidth = event.target.value || 1;
    });
    */


    // Mouse Down Event
    canvas.addEventListener('mousedown', function(event) {
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      setMouseCoordinates(event);
      
      firstTouch = true;
      isDrawing = true;

      
      // Start Drawing
      context.beginPath();
      context.moveTo(mouseX, mouseY);
      

    });
  
    // Mouse Move Event
    canvas.addEventListener('mousemove', function(event) {
      setMouseCoordinates(event);
  
      if(isDrawing){
        context.lineTo(mouseX, mouseY);
        context.stroke();

      }
    });
  
  
  
    // Mouse Up Event
    canvas.addEventListener('mouseup', function(event) {
      setMouseCoordinates(event);

      context.lineTo(firstTouchMouseX, firstTouchMouseY);
      context.stroke();
      isDrawing = false;
    });
  
    // Handle Mouse Coordinates
    function setMouseCoordinates(event) {
      mouseX = (event.clientX - boundings.left) ;
      mouseY = (event.clientY - boundings.top) ;

      if (firstTouch){
        firstTouchMouseX = mouseX;
        firstTouchMouseY = mouseY;
        firstTouch = false;
      } 
    }
  
    // Handle Clear Button
    var clearButton = document.getElementById('clear');
  
    clearButton.addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  
    // Handle Save Button
    var saveButton = document.getElementById('save');
  
    saveButton.addEventListener('click', function() {
      var imageName = prompt('Please enter image name');
      var canvasDataURL = canvas.toDataURL();
      var a = document.createElement('a');
      a.href = canvasDataURL;
      a.download = imageName || 'drawing';
      a.click();
    });
  };
  