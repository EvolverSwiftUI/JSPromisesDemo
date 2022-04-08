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

