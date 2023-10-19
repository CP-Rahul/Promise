function process() {
    let i = 0;
    function innerprocess1() {
        i += 1;
        return i;
    }
    function innerprocess2() {
        i += 2;
        return i;
    }
    return { innerprocess1, innerprocess2 };
}

let result = process();
let obj = {
    func1: result.innerprocess1,
    func2: result.innerprocess2
}
console.log(result.innerprocess1());
console.log(result.innerprocess2());
console.log(result.innerprocess2());
console.log(result.innerprocess1());

