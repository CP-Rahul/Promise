function downnload(url) {
    return new Promise(function dow(resolve, reject) {
        console.log("Startted downloading form", url);
        setTimeout(function exec(){
            const data = "sdfgfg";
            resolve(data);
            console.log("Finished downloading");
        }, 5000)
    })
}

console.log("Start");
let promiseObj = downnload("abc.com");

promiseObj.then(function A(value){
    console.log("Downloaded data is", value);
})

console.log("End");
