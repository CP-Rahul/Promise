function createPromise() {
    return new Promise( function (resolve, reject) {
        console.log("Hii");
        resolve("Rahul");
    }
    ) 
}

let y = createPromise();
console.log(y)