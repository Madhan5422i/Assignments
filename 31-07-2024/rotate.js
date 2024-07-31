const numbers = [1, 2, 3, 4, 5];

const rotateArray = (arr, rotations) => {
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
};

rotateArray(numbers, 2);

console.log(numbers);