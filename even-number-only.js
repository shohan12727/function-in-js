function evenNumberOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [2, 3, 4, 56, 587, 25, 3, 7,65, 25, 48, 63];
const evens = evenNumberOnly(numbers);
console.log("even number only", evens);

