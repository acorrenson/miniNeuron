// activation function
int sign(float n) {
  if (n >= 0) {
    return 1;
  } else {
    return -1;
  }
}

class Perceptron {
  
  float[] weights;
  // learning rate
  float lr = 0.1;

  // contructor
  Perceptron(int n) {
    this.weights = new float[n];
    for (int i = 0; i < this.weights.length; i++) {
      this.weights[i] = 1;
    }
  }

  // compute an output
  int guess(float[] inputs) {
    float sum = 0;
    for (int i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    int output = sign(sum);
    return output;
  }

  // train the perceptron balancing weights
  void train(float[] inputs, int target) {
    int guess = this.guess(inputs);
    int error = target - guess;
    for (int i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * lr;
    }
  }
  
  float guessY(float x) {
    float m = -weights[0] / weights[1];
    float p = -weights[2] / weights[1];
    
    return m * x + p;
  }
}