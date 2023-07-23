function countZeroes() {
  let firstZero = findFirst(arr);
  if (firstZero === -1) return 0;

  return arr.length - firstZero;
}

function findFirst(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; //Initalize result to -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // sum L & R together then divide 2 to give you the AVG number then it rounds it up

    if (arr[mid] === 0) {
      // If middle elemnt is the target element which in this case is 0
      result = mid; // then well update result to current Index
      right = mid - 1; // continue searching for the first occurrence in the left
    } else {
      left = mid + 1; // If middle element isnt the target element then continue searching in the right
    }
  }
  return result; // return the index of first occurrence of the target element (0) or -1 if not found
}

module.exports = countZeroes;
