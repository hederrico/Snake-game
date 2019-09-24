var snake = new Snake();
var scl = 20;

var food;
var score = 1;
var scoreText;

function setup(){
  createCanvas(800, 800);
  frameRate(10);

  scoreText = createP("Score: " + score);
  console.log(scoreText);

  pickLocation()
}

function draw() {
  console.log(score);

  scoreText.elt.childNodes[0].textContent = "Score: " + score;

  background(0);

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);

  score = snake.death(score);
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    score++;
    pickLocation();
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW && snake.yspeed <= 0){
    snake.dir(0, -1);
  }else if (keyCode === DOWN_ARROW && snake.yspeed >= 0) {
    snake.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW && snake.xspeed >= 0) {
    snake.dir(1, 0);
  }else if (keyCode === LEFT_ARROW && snake.xspeed <= 0) {
    snake.dir(-1, 0);
  }
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
