function isMatch(s: string, p: string): boolean | undefined {
  s.split('').forEach(c1 => {
    p.split('').forEach(c2 => {
      if (c1 == c2 || c1 == '.' || c2 == '.') {
        console.log("ok for:", c1, c2)
        return 1;
      }
      else {
        if (c2 == '*' || c1 == '*')
          console.log("a");
        console.log("not ok for:", c1, c2)
      }
    })
  });
  return (s == p);
};

let s: string = "ss";
let p: string = "ad";

console.log(isMatch(s, p));
