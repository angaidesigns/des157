// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    background(0);
}

function draw() {
    ellipse(mouseX, mouseY, 50, 50);
}
