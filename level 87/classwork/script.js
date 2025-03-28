// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.  

// Promises have three states:  
// 1. Pending – The initial state, before the operation completes.  
// 2. Fulfilled – The operation was successful, and the promise returns a value.  
// 3. Rejected – The operation failed, and the promise returns an error.  

// A Promise takes a function with two parameters: resolve and reject.  
// - resolve() is called when the operation is successful.  
// - reject() is called when the operation fails.  

// Promises are handled using:  
// - .then() to execute code when the promise is resolved.  
// - .catch() to handle errors when the promise is rejected.  
// - .finally() to execute code regardless of success or failure.  

// Async/Await provides a more readable way to handle promises.  
// - The async keyword makes a function return a promise.  
// - The await keyword pauses execution until the promise resolves or rejects.  



// 2
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data successfully retrieved from the server!");
    }, 2000);
});

fetchData.then(data => console.log(data));




// 3
const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error: Failed to retrieve data from the server!");
    }, 2000);
});

fetchData.catch(error => console.error(error));



// 4
const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5; 

        if (success) {
            resolve("Data successfully retrieved from the server!");
        } else {
            reject("Error: Failed to retrieve data from the server!");
        }
    }, 2000);
});

fetchData
    .then(data => console.log(data))
    .catch(error => console.error(error));
