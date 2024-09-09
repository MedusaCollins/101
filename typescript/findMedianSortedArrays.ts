function findMedianSortedArrays(nums1: number[], nums2: number[]): number | undefined {
  let nums3: number[] = nums1.concat(nums2).sort((a, b) => a - b);
  if (nums3.length % 2 == 0)
    return ((nums3[(nums3.length / 2) - 1] + nums3[(nums3.length / 2)]) / 2)
  else
    return (nums3[Math.floor(nums3.length / 2)]);
};


let num1 = [-2, -1];
let num2 = [3];

console.log(findMedianSortedArrays(num1, num2));
