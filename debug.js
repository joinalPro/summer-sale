function getFactorial (number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
        console.log(i);
    }
    return factorial;
}
const myFactorial = getFactorial(5);
console.log(myFactorial);