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


