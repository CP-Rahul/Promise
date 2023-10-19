function process() {
    let i = 0;
    function innerprocess() {
        i += 1;
        return i;
    }
    return innerprocess;
}

let x = process();
let obj = {func: x}
console.log(x());
console.log(x());
console.log(x());
console.log(x());



