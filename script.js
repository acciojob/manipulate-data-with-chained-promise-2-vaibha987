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

function manipulateArray() {
  fetchNumbers()
    .then(numbers => {
      // Filter out odd numbers
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      // Display even numbers after 1 second
      return updateOutput(`Even numbers: ${evenNumbers.join(', ')}`, 1000)
        .then(() => {
          // Multiply even numbers by 2
          const multipliedNumbers = evenNumbers.map(num => num * 2);
          // Display multiplied numbers after an additional 1 second (total 2 seconds from first display)
          return updateOutput(`Multiplied numbers: ${multipliedNumbers.join(', ')}`, 1000);
        });
    })
    .catch(error => {
      document.getElementById('output').textContent = `Error: ${error}`;
    });
}
// Trigger the function when the DOM is fully loaded
window.onload = manipulateArray;