
let brain;
let pts;

function setup() {
  createCanvas(800, 800);
  brain  = new Perceptron();

  // data set for training
  pts = [];

  for (let i = 0; i < 300; i++) {
    pts.push(new Point());
  }

  // draw the line we want to guess
  pt1 = new Point(-1, f(-1));
  pt2 = new Point(1, f(1));
  line(pt1.getX(), pt1.getY(), pt2.getX(), pt2.getY());
}

function draw() {
  background(55);

  // train the Perceptron
  for (let i = 0; i < pts.length; i++) {
    let inputs = [pts[i].x, pts[i].y, 1];
    brain.train(inputs, pts[i].label);
    pts[i].show();
  }

  // draw the current line
  let gLineA = new Point(-1, brain.guessY(-1));
  let gLineB = new Point(1, brain.guessY(1));
  stroke(255, 0, 255);
  line(gLineA.getX(), gLineA.getY(), gLineB.getX(), gLineB.getY());

  fill(255, 0, 0);
  text("w0 : " + brain.weights[0].toFixed(2), 30, 30);
  text("w1 : " + brain.weights[1].toFixed(2), 30, 60);
  text("w2 : " + brain.weights[2].toFixed(2), 30, 90);

  text("A : " + brain.guessA().toFixed(2), 180, 30);
  text("B : " + brain.guessB().toFixed(2), 180, 60);
  text("error on A : " + (A - brain.guessA()).toFixed(3), 180, 90);
  text("error on B : " + (B - brain.guessB()).toFixed(3), 180, 120);

}
