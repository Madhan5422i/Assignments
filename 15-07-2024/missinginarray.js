function findMissingNumber(nums) {
    const n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = 0;
    for (let i = 0; i < n; i++) {
        arraySum += nums[i];
    }
    return totalSum - arraySum;
}

const nums = [0, 2, 3, 4, 5];
const missingNumber = findMissingNumber(nums);
console.log(`The missing number is : ${missingNumber}`);