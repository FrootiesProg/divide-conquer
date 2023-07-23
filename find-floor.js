function findFloor(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Initialize floor to -1
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] <= num) {
        // If the middle element is less than or equal to 'num',
        // update 'floor' and search in the right half of the array.
        floor = arr[mid];
        left = mid + 1;
      } else {
        // If the middle element is greater than 'num', search in the left half of the array.
        right = mid - 1;
      }
    }
  
    return floor;
  }
module.exports = findFloor;
