function twoSum(nums: number[], target: number): number[] | undefined {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j)
        return [i, j];
    }
  }
}

var nums: number[] = [2, 5, 5, 11];
var target: number = 10;

console.log(twoSum(nums, target));
