/*

Targeted Sum
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.

Example
Input: [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: The numbers at indices 0 and 1 add up to 9.

*/

// the below solution is ai generated
function targetedSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            const index1 = numMap.get(complement);
            const index2 = i;
            return [Math.min(index1, index2), Math.max(index1, index2)];
        }
        numMap.set(nums[i], i);
    }

    return "Target not found";
}

// and the below solution is mine
function findTarget(arr, target) {

    let indices = null

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (target == arr[i] + arr[j]) {
                indices = [i, j]
            }
        }
    }

    if (!indices) {
        return "Target not found"
    } else return indices
}




