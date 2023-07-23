// Helper function to findPivot
function findPivot(arr) {
  let left = 0; // declare left = 0 
  let right = arr.length - 1; // delcare the right boundary to last index of arr

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[right]) {
      // If the middle element is greater than the rightmost element, the pivot is on the right side.
      left = mid + 1;
    } else {
      // If the middle element is less than or equal to the rightmost element, the pivot is on the left side or is the middle element.
      right = mid;
    }
  }

  return left;
}

function binarySearch(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return the index.
    } else if (arr[mid] < target) {
      left = mid + 1; // If the middle element is less than the target, search in the right half of the array.
    } else {
      right = mid - 1; // If the middle element is greater than the target, search in the left half of the array.
    }
  }

  return -1; // Target not found, return -1.
}

function findRotatedIndex(arr, target) {
  const pivot = findPivot(arr);

  // Check if the target is in the left or right subarray of the pivot point and perform binary search accordingly.
  if (target >= arr[0] && target <= arr[pivot - 1]) { 
    return binarySearch(arr, target, 0, pivot - 1);
  } else {
    return binarySearch(arr, target, pivot, arr.length - 1); // If target is found then return index; otherwise return -1
  }
}

module.exports = findRotatedIndex;
