function* generator() {
    console.log("Inside generator function");
    return 30;
    yield 1;
}

let it = generator();
console.log("Goinng to generator")
console.log("first", it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
