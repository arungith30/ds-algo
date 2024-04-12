function findLargestElement(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

const myArray = [10, 15, 18, 20, 23];
const largest = findLargestElement(myArray);
console.log(`The largest element in the array is: ${largest}`);

