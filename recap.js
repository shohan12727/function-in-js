function add(price1,price2){
    const total = price1 + price2;
    return total;
}

const bill = add(5,96);
console.log (bill);

console.log("----------");
// new 
function add2 (price1,price2){
    return price1+price2;
}
const bill2 =add(5,126);
console.log(bill2);

// domath 
console.log("----------------");

function doMath (num1,num2){
    const sum = num1 + num2;
    const diff = num1 -num2;
    const multiply = sum *diff ;
    const division = diff / multiply;
    return division ;

}

const division = doMath(9,3);
console.log(division);

