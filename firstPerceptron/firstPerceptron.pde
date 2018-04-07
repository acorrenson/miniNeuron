
Perceptron p;
Point[] points;

void setup() {
  size(800, 800);  
  points = new Point[300];
  for (int i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
  p = new Perceptron(3);
  frameRate(5);
}

void draw() {
  background(255);

  // draw the line we want to guess
  Point pt1 = new Point(-1, f(-1)); 
  Point pt2 = new Point(1, f(1));
  stroke(0);
  line(pt1.getX(), pt1.getY(), pt2.getX(), pt2.getY());

  // current approximation of the line
  Point pt3 = new Point(-1, p.guessY(-1));
  Point pt4 = new Point(1, p.guessY(1));
  stroke(255, 0, 255);
  strokeWeight(3);
  line(pt3.getX(), pt3.getY(), pt4.getX(), pt4.getY());

  // show if the perceptron
  // guess correctly the label 
  // of each points
  for (Point pt : points) {
    pt.show();
    float[] inputs = {pt.x, pt.y, pt.b};
    int target = pt.label;
    int guess = p.guess(inputs);
    // train the perceptron
    p.train(inputs, target);

    if (guess == target) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    ellipse(pt.getX(), pt.getY(), 10, 10);
  }
}

void mousePressed() {
  // train the percpetron
  /*
  for (Point pt : points) {
   float[] inputs = {pt.x, pt.y, pt.b};
   int target = pt.label;
   p.train(inputs, target);
   }
   */
}