function curriedAdd() {
    let sum = 0;

    function adder(nextNumber) {
        if (nextNumber === undefined) {
            return sum;
        }
        sum += nextNumber;
        return adder;
    }

    return adder;
}

// Example of using the curriedAdd function
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();