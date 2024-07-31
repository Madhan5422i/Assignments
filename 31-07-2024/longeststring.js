function findLargestString(arr) {
    let largestString = "";
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largestString.length) {
            largestString = arr[i];
        }
    }
    
    return largestString;
}
const strings = ["apple", "banana", "cherry", "dragonfruit"];
const largest = findLargestString(strings);
console.log("Largest string:", largest);