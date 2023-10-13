function createPromise() {
    return new Promise(function(resolve, reject) {
      console.log("Entering to loop")
      for(let i = 0; i < 1000000000; i++) {
        // some task
      }
      resolve("Done");
      console.log("End of loop")
    })
  }
  
  console.log("start")
  let P = createPromise();
  console.log(P);
  console.log("After ending", P)