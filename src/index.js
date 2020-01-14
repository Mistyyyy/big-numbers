function add(num1, num2) {
  if (num1.length === 0) return num2;
  if (num2.length === 0) return num1;
  let len1 = num1.length - 1, len2 = num2.length - 1;
  let carry = 0;
  let ans = ''
  while(len1 >= 0 || len2 >= 0) {
      let res = 0;
      if (len1 >= 0) res += num1[len1--] - 0;
      if (len2 >= 0) res += num2[len2--] - 0;
      res += carry;
      if (res >= 10) {
          carry = 1;
          res -= 10;
      } else carry = 0;
      ans = res + ans;
  }
  if (carry) ans = carry + ans;
  return ans;
}

var singleMultiply = function(num1, num2, suffix) {
  let ans = "";
  let len = num1.length - 1;
  for (let i = len; i >= 0; i-- ) {
      let res = num1[i] * num2 + '' + '0'.repeat(len - i);
      ans = add(ans, res);
  }
  return ans + '0'.repeat(suffix);
}

function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let str = "";
  if (num2.length > num1.length) [num1, num2] = [num2, num1];
  let len = num2.length - 1;
  for (let i = len; i >= 0; i--) {
      str = add(str, singleMultiply(num1, num2[i], len - i));
  }
  return str;
};

export default {
  add,
  multiply
}