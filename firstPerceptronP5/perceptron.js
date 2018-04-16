
function sign(x) {
  if (x < 0) {
    return -1;
  }
  return 1;
}

class Perceptron {
  constructor() {
    this.weights = [];
    this.learningRate = 0.1;

    for (let i = 0; i < 3; i++) {
      this.weights[i] = random(-1, 1);
    }
  }

  // get an output
  guess(inputs) {
    // weighted sum
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += ( inputs[i] * this.weights[i] );

    }
    // activation function
    return sign(sum);
  }

  // train the perceptron
  train(inputs, target) {
    let err = target - this.guess(inputs);
    for( let i = 0; i < this.weights.length; i++) {
      this.weights[i] += (err * inputs[i] * this.learningRate);
    }
  }

  // guess the position of a point according to
  // its X coordinate
  guessY(x) {
    let a = - this.weights[0] / this.weights[1];
    let b = - this.weights[2] / this.weights[1];
    return a * x + b;
  }

  // return the slope of the line
  guessA() {
    return - this.weights[0] / this.weights[1];
  }
  // return the 2nd coefficient of the line
  guessB() {
    return - this.weights[2] / this.weights[1];
  }
}

// DATA FOR TRAINING

// create a random line wich separates the space in 2 parts
let A = Math.floor(Math.random() * 2);
let B =  Math.floor(Math.random() * 1);

function f(x) {
  return A * x + B;
}

// a point belong to a class
// depending on its position
// in comparison of the line
class Point {
  constructor(x, y) {
    if (x != undefined && y != undefined) {
      // width given params
      this.x = x;
      this.y = y;
    } else {
      // random point (no params)
      this.x = random(-1, 1);
      this.y = random(-1, 1);
    }

    // in which class ?
    if ( this.y > f(this.x) ) {
      this.label = 1;
    } else {
      this.label = -1;
    }
  }

  getX() {
    // from cartesian to P5 coordinates
    return map(this.x, -1, 1, 0, width);
  }

  getY() {
    // from cartesian to P5 coordinates
    return map(this.y, -1, 1, height, 0);
  }

  show() {
    let x = this.getX();
    let y = this.getY();
    fill(0);
    noStroke();
    if (this.label === -1) fill(255);
    ellipse(x, y, 10, 10);
  }
}
