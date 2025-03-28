const immediatePromise = new Promise((resolve) => {
    resolve("Hello, Promise!");
});

immediatePromise.then(console.log);

const rejectedPromise = new Promise((_, reject) => {
    reject("Something went wrong!");
});

rejectedPromise.catch(console.error);

const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
});

delayedPromise.then(console.log);

const randomOutcomePromise = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
});

randomOutcomePromise
    .then(console.log)
    .catch(console.error);

const chainPromise = new Promise((resolve) => {
    resolve(5);
});

chainPromise
    .then(num => num * 2)
    .then(num => num * 2)
    .then(num => num * 2)
    .then(console.log);
