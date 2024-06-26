function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}


const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); 
