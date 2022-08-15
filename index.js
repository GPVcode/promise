// create a promise
const promise = new Promise();

// create promise that takes in resolve or reject function
// resolve scenario
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
        resolve("Bringing Tacos");
   }, 5000)
})
// reject scenario
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Not Bringing Tacos");
    }, 5000)
})
//promise automatically injects argument passed to resolve into result
const onFulfillment = (result) => {
    console.log(result);
    console.log('set up the table to eat tacos');
}

//promise automatically injects reject argument into error
const onRejection = (error) => {
    console.log(error);
    console.log("Start cooking pasta");
}

promise.then(onFulfillment);
promise.catch(onRejection);
