//recursion number loop
const numberRecursion = n => {
    if (n === 0) {
        return 0;
    }
    numberRecursion(n - 1);
    console.log(n)
};

// numberRecursion(10);

//recursion number addition
const numberAddition = n => {
    if (n === 0) {
        return 0;
    } else {
        return numberAddition(n - 1) + n;
    }
};

// console.log(numberAddition(10));

// newCountDown(); */
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let count = 0;

function recursionNew() {
    if (count < days.length) {
        console.log(days[count]);
        count += 1;
        setTimeout(recursionNew, 1000)
    } else {
        return 0;
    }
}

recursionNew();