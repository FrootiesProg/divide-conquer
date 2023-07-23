function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] > arr[right]) {
        // If the middle element is greater than the rightmost element
        // the minimum element (pivot) is on the right side.
        left = mid + 1;
      } else {
        // If the middle element is less than or equal to the rightmost element,
        // the minimum element (pivot) is on the left side or is the middle element.
        right = mid;
      }
    }
  
    // The value of 'n' (number of rotations) is the index of the minimum element.
    return left;
  }

module.exports = findRotationCount