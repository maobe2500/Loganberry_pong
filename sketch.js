let x;
let y;

let xDir;
let yDir;
let size;
let yPos;
let leftCounter = 0;
let rightCounter = 0;
let speed;
let recHeight = 100; // Width of paddles
let recWidth = 15; // Width of paddles
let distToWall = 30; // Distance to the wall
let paddleSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xDir = 2;
  yDir = 2;
  size = 50;
  yPos = height / 2;
  speed = 10;
  paddleSpeed = 15;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function isHit() {

}

function draw() {
  background(0);
  
  //----------------Counter------------------------------
  
  textSize(60);
  text(`${leftCounter}    ${rightCounter}`, width / 2 - 65, 50);

  //------------------Drawing the shapes----------------------------
  stroke(255);
  line(width / 2, 0, width / 2, height);
  stroke(10);
  strokeWeight(2);
  fill(255);
  ellipse(x, y, size, size);
  
  rectMode(CENTER);
  rect(distToWall, y, recWidth, recHeight);
  rect(width - distToWall, yPos, recWidth, recHeight);

  //------------Checking and adding to counter----------------------------------


  if (x >= width - (size / 2)) {

    xDir = -speed;
    leftCounter++;

  } else if (x <= (recWidth + distToWall) + (size / 2)) {

    xDir = speed;

  } else if (y <= size / 2) {

    yDir = speed;

  } else if (y >= height - (size / 2)) {

    yDir = -speed;

  } else if (y >= yPos - (recHeight / 2) && y <= yPos + (recHeight / 2)) {

    if (x > width - (recWidth + distToWall) - (size / 2)) {
      xDir = -speed;

    }

  }

  //----------------Movement------------------------------
  x += xDir;
  y += yDir;

  if (keyIsDown(UP_ARROW)) {
    if (yPos >= (recHeight / 2)) {
      yPos -= paddleSpeed;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (yPos <= height - (recHeight / 2)) {
      yPos += paddleSpeed;
    }
  }



}