function searchInRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // If the left half is sorted
        if (arr[left] <= arr[mid]) {
            // Check if the target is within the left half
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        }
        // If the right half is sorted
        else {
            // Check if the target is within the right half
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
    }

    return -1; // Element not found
}

// Example usage:
const rotatedArray = [3,4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(searchInRotatedArray(rotatedArray, target)); // Output: 4 (index of target)
