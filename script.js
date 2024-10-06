// Function that returns a promise resolving after 3 seconds with the array
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000); // Resolving after 3 seconds
    });
}

// Function to update the output element
function updateOutput(text) {
    document.getElementById('output').innerText = text;
}

// Chaining promises
getNumbers()
    .then((numbers) => {
        // First promise: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                updateOutput(`Even numbers: ${evenNumbers.join(', ')}`); // Display filtered even numbers
                resolve(evenNumbers);
            }, 1000); // Update after 1 second
        });
    })
    .then((evenNumbers) => {
        // Second promise: Multiply the even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                updateOutput(`Doubled numbers: ${doubledNumbers.join(', ')}`); // Display doubled even numbers
                resolve(doubledNumbers);
            }, 2000); // Update after 2 seconds
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
