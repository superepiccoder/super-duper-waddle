ObjectDetector = "";

img= "";
objects = [];
status = "";

function setup() {
canvas = createCanvas(400, 420)
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function preload() {
img = loadImage("book.jpeg");
}

function modelLoaded() {
console.log("modelLoaded!");
status = true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error){
console.log(error);
}
console.log(results);
objects = results;
}

function draw() { 
    image(img, 0, 0, 480, 380);
    
    if (status != undefined) 
    { image(img, 0, 0, 640, 420);
     for (var i = 0; i < objects.length; i++)
      { document.getElementById("status").innerHTML = "Status : Objects Detected";
       noStroke();
     
       fill("#FF0000");
     percent = floor(objects[i].confidence * 100);
     text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
         noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
     }
     } 
  }


  function back() {
    
  }