/*
 *
 * Given an unordered array, sort it using
 * bubble sort.
 *
 *
 */

export function bubble_sort(nums: Array<number>): Array<number> {
  let sort_lenth = nums.length;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < sort_lenth; j++) {
      if (nums[j] > nums[j + 1]) {
        // Swap
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
}
