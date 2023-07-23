// function to find the index of the first occurrence of the target number
function findFirstOccurrence(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle index
    if ((mid === 0 || arr[mid - 1] < target) && arr[mid] === target) {
      // If it's the first element (mid === 0), or the element before it is less than the target,
      // and the current element is equal to the target,
      // Then we found the first occurrence, so return the index (mid).
      return mid;
    } else if (arr[mid] < target) {
      // If the current element is less than the target, move the left boundary to the right of the middle index.
      left = mid + 1;
    } else {
      // If current element is greater than or equal to the target, move the right boundary to the left of the middle index.
      right = mid - 1;
    }
  }
  // If target number is not found in the array, return -1.
  return -1;
}

// Helper function to find the index of the last occurrence of the target number
function findLastOccurrence(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle index of the current range
    if (
      (mid === arr.length - 1 || arr[mid + 1] > target) &&
      arr[mid] === target
    ) {
      // If it's the last element (mid === arr.length - 1) or the element after it is greater than the target,
      // and the current element is equal to the target
      // Then we found the last occurrence, so return the index (mid).
      return mid;
    } else if (arr[mid] > target) {
      // If the current element is greater than the target move the right boundary to the left of the middle index.
      right = mid - 1;
    } else {
      // If the current element is less than or equal to the target move the left boundary to the right of the middle index.
      left = mid + 1;
    }
  }
  // If the target number is not found in the array return -1.
  return -1;
}

// Main function to calculate the frequency of the target number in a sorted array
function sortedFrequency(arr, target) {
  const firstOccurrence = findFirstOccurrence(arr, target, 0, arr.length - 1); // Find the index of the first occurrence
  const lastOccurrence = findLastOccurrence(arr, target, 0, arr.length - 1); // Find the index of the last occurrence

  if (firstOccurrence === -1 || lastOccurrence === -1) {
    // If either first or last occurrence is not found, the target number is not present in the array, so return 0.
    return 0;
  } else {
    // If both first and last occurrences are found, calculate the frequency and return the result.
    return lastOccurrence - firstOccurrence + 1;
  }
}

module.exports = sortedFrequency;
