let screen = document.getElementById('screen');

// Function to append numbers or operators to the display screen
function appendToScreen(value) {
  screen.value += value;
}

// Function to clear the screen
function clearScreen() {
  screen.value = '';
}

// Function to evaluate the expression
function calculate() {
  try {
    screen.value = eval(screen.value); // Using eval to calculate the result
  } catch (e) {
    screen.value = 'Error';
  }
}
