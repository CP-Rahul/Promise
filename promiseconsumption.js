function randomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  
  function createpromise() {
    return new Promise(function exec(resolve, reject) {
      console.log("Entering into the executer callback in the promise constructor");
      setTimeout(function timer() {
        let x = randomNumber(10);
        if (x % 2 == 0) {
          resolve(x);
        } else {
          reject(x);
        }
      }, 5000);
      console.log("Exiting from the executer callback in the promise constructor");
    });
  }
  
  console.log("start");
  let P = createpromise();
  console.log("Currently the promise object look like", P);
  console.log("Moving to the handlers 1");

  P
  .then(
    function fullfillHandler(value) {
        console.log("Inside fullfill handler 1 with value", value);
        console.log("Promise object after fullfillment look like", P);
    },
    function rejectionHandler(value) {
        console.log("Inside rejection handle 1 r with value", value);
        console.log("Promise object after rejection look like", P);
    }
  )
  
  console.log("Moving to the handlers 2");

  P
  .then(
    function fullfillHandler(value) {
        console.log("Inside fullfill handler 2 with value", value);
        console.log("Promise object after fullfillment look like", P);
    },
    function rejectionHandler(value) {
        console.log("Inside rejection handler 2 with value", value);
        console.log("Promise object after rejection look like", P);
    }
  )