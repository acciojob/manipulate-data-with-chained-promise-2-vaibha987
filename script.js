// Function that returns a promise resolving after a shorter delay (e.g., 1 second)
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 1000); // Reduce delay for initial promise
    });
}

// Function to update the output element
function updateOutput(text) {
    document.getElementById('output').innerText = text;
}

// Chaining promises with adjusted delays
getNumbers()
    .then((numbers) => {
        // First promise: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                updateOutput(`Even numbers: ${evenNumbers.join(', ')}`); // Display filtered even numbers
                resolve(evenNumbers);
            }, 500); // Reduce delay to 500ms
        });
    })
    .then((evenNumbers) => {
        // Second promise: Multiply the even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                updateOutput(`Doubled numbers: ${doubledNumbers.join(', ')}`); // Display doubled even numbers
                resolve(doubledNumbers);
            }, 1000); // Reduce delay to 1 second
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
