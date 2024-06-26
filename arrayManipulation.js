// Task 1: processArray function
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Task 2: formatArrayStrings function
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        const num = processedNumbers[index];
        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

module.exports = { processArray, formatArrayStrings };