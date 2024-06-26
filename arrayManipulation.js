function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

function formatArrayStrings(stringArray, numberArray) {
    return stringArray.map((str, index) => {
        const num = numberArray[index];
        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage:
const inputStrings = ["Hello", "World", "JavaScript", "Is", "Fun"];
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "fun"]
