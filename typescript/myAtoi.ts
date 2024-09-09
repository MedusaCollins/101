function myAtoi(s: string): number | undefined {
  let arr = s.split('');
  let i: number = 0;
  let sign: number = 1;
  let result: number = 0;
  let repeatSign: number = 0;
  while (arr[i] == ('-') || arr[i] == '+' || arr[i] == ' ') {
    if (arr[i] == '-')
      sign *= -1;
    if (arr[i] != ' ')
      repeatSign++;
    i++;
  }

  while (arr[i] >= '0' && arr[i] <= '9') {
    result = Number(arr[i]) + (result * 10);
    i++;
  }

  if (repeatSign <= 1) {
    if ((result * sign) <= -2147483648)
      return -2147483648;
    else if ((result * sign) >= 2147483647)
      return 2147483647;
    return result * sign;
  }
  return 0;
};

let x = "--123a45";
console.log(myAtoi(x));
