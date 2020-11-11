//Opdracht 1
//Rest Parameter
//When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.

const optellen = (...numbers) => {
    return numbers.reduce((prev, current) => prev + current);
}
console.log(optellen(1, 2, 3, 4, 5, 6))


//Opdracht 2 
//Spread Operator
//When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.

const optellenNum = (num1, num2, num3) => {
    return num1 + num2 + num3
}
const cijfers = [1, 2, 3];
console.log(optellenNum(...cijfers))

