function fetchNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numbers = [1, 2, 3, 4];  // Input array
      resolve(numbers);
    }, 3000);  // 3 seconds delay
  });
}

// Function to update the "output" element with the given text after a delay
function updateOutput(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById('output').textContent = text;
      resolve();
    }, delay);  // Delay in milliseconds
  });
}

// Main function to handle promise chaining
function manipulateArray() {
  fetchNumbers()
    .then(numbers => {
      // Filter out odd numbers
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      // Display even numbers after 1 second
      return updateOutput(`Even numbers: ${evenNumbers.join(', ')}`, 1000).then(() => evenNumbers);
    })
    .then(evenNumbers => {
      // Multiply even numbers by 2
      const multipliedNumbers = evenNumbers.map(num => num * 2);
      // Display multiplied numbers after 2 seconds
      return updateOutput(`Multiplied numbers: ${multipliedNumbers.join(', ')}`, 2000);
    })
    .catch(error => {
      document.getElementById('output').textContent = `Error: ${error}`;
    });
}

// Trigger the function when the DOM is fully loaded
window.onload = manipulateArray;