

let ball1XPos, ball2XPos, ball3XPos;
let ball1YPos = 250, ball2YPos = 250, ball3YPos = 250;
let ball1SpeedValue, ball2SpeedValue, ball3SpeedValue;
 
function setup() {
   createCanvas(500, 500);

   ball1XPos = random(0, 500);
   ball2XPos = random(0, 500);
   ball3XPos = random(0, 500);

   ball1SpeedValue = random(2, 5);
   ball2SpeedValue = random(2, 5);
   ball3SpeedValue = random(2, 5);
}
 
function draw() {
   background(0);
   fill(0, 255, 0);

   ellipse(ball1XPos, ball1YPos, 50, 50);
   ellipse(ball2XPos, ball2YPos, 50, 50);
   ellipse(ball3XPos, ball3YPos, 50, 50);

   ball1YPos += ball1SpeedValue;
   ball2YPos += ball2SpeedValue;
   ball3YPos += ball3SpeedValue;

   if (ball1YPos > 525) {ball1YPos = -25}
   if (ball2YPos > 525) {ball2YPos = -25}
   if (ball3YPos > 525) {ball3YPos = -25}
}




