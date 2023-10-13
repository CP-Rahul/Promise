function randomNumber(val) {
    return Math.floor(Math.random() * val)
}

function createPromise() {
    return new Promise(function exeec(resolve, reject){
        console.log("Entering the executor callback in the promise constructor")
    })
}
