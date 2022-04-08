// alert("first line");
// alert("second line");
// alert("third line");

let url = "https://jsonplaceholder.typicode.com/todos/1";
let promiseObj = fetch(url);
console.log(promiseObj);
console.log("fetching done.");

//Promise object
/*
Promise object will have 3 states
    1. Pending      : neither fullfilled or rejected.
    2. Fullfilled   : operation completed successfully.
    3. Rejected     : operation failed.
*/

promiseObj
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


// Asynchronus JS
/*
There are two main types of asynchronus code style
you will come across in JavaScript.

1. Callback based:
    eg:
        1. setInterval(), 2. setTimeout()
2. Promise based:
    eg:
        1. fetch()        
*/

// Creating your own promise object
/*
 
const myPromise = new Promise((resolFunc, rejectFunc) => {
    asyncTask;
}); 

resolFunc ====> called on resolve of promise.
rejectFunc ===> called on reject of promise.
 */

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("1 second completed");
            reject("Rejected");
        }, 1000);
    });
}

myPromise().then((fromResolve) => {
    console.log(fromResolve);
})
.catch((fromReject) => {
    console.log(fromReject);
});

// Async and Await

const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const doNetworkCall = async () => {
    try {
        const response = await fetch(url2);
        const jsonData = await response.json();
        console.log(jsonData);    
    } catch (err) {
        console.log(err);
    }
}

const ayncPromise = doNetworkCall();
console.log(ayncPromise);

// String manipulations
const myString = "    Hello World    ";
console.log(myString);
console.log(myString.trim());
console.log(myString.trim().slice(0,3));
console.log(myString.trim().toUpperCase());

// SCOPE
/*
1. Global Scope
2. Block Scope
*/

// Block Scope
/*
If a variable is declared using const or let within a curly brace
then it is said to be defined in the block scope.
eg:
    1. if...else.
    2. function() {}
    3. switch
    4. for...of
    ...............many more.
*/

// Global Scope
/*
if a variable is declared outside of function or any curly braces
then it is said to be defined in the global scope.
*/
