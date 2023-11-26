// Array of image sources
var imageSources = ["1.jpg", "2.jpg", "3.jpg"];

// Get the container element
var container = document.getElementById("imageContainer");

// Loop through the image sources array
for (var i = 0; i < imageSources.length; i++) {
  // Create an image element
  var image = document.createElement("img");
  
  // Set the source attribute
  image.src = imageSources[i];
  
  // Append the image to the container
  container.appendChild(image);
}
