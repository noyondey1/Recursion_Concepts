// console.log('Hello Recursion');
const numberRecursion = n => {
    if (n === 0) {
        return 0;
    }
    numberRecursion(n - 1);
    console.log(n)
};

numberRecursion(10);