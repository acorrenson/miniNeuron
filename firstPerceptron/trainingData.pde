// line we want to guess
float f(float x) {
  // y = mx + p
  return 0.3 * x + 0.2;
}

class Point {

  float x;
  float y;
  float b;
  int label;
  
  Point(float x, float y) {
    this.x = x;
    this.y = y;
  }
  
  Point() {
    x = random(-1, 1);
    y = random(-1, 1);
    b = 1;
    
    if (y > f(x)) {
      label = 1;
    } else {
      label = -1;
    }
  }

  float getX() {
    float px = map(x, -1, 1, 0, width);
    return px;
  }
  
  float getY() {
    float py = map(y, -1, 1, 0, width);
    return py;
  }
  
  void show() {
    if (label == 1) {
      fill(255);
    } else {
      fill(0);
    }
    float px = this.getX();
    float py = this.getY();
    stroke(0);
    strokeWeight(1);
    ellipse(px, py, 20, 20);
  }
}