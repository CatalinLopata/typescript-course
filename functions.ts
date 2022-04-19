function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result ' + num)
}

//callback function in typescript

function addAndhandle(n1: number, n2:number, cb:(num:number) => void) {
    const result = n1 + n2;
    cb(result)
}

printResult(add(5, 12))

let combinedValues : (a: number, b: number) => number; // combinedValues is a function that accept 2 params and return a number


combinedValues = add;
//combinedValues = printResult;
// combinedValues = 5;

console.log(combinedValues(5,8))

addAndhandle(10, 20, (result) => {
    console.log(result)
});