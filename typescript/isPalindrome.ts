function isPalindrome(x: number): boolean | undefined {
  return (x.toString().split('').join() == x.toString().split('').reverse().join());
};


let x: number = 102;

if (isPalindrome(x))
  console.log("1");
else
  console.log("0");
