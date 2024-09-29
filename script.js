let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
});

promise
  .then((numbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(numbers.filter((item) => item % 2 == 0));
      }, 1000);
    });
  })
  .then((numbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(numbers.map((num) => num * 2));
      }, 2000);
    });
  })
  .then((numbers) => {
    document.getElementById('output').textContent = numbers.toString();
  });