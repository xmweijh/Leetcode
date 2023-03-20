function makePalindrome(s) {
  let left = 0, right = s.length - 1;
  let modified = new Array(s.length).fill(false);

  // 找出不同的字符位置
  while (left < right) {
    if (s[left] !== s[right]) {
      modified[left] = s[left] < s[right] ? false : true;
      modified[right] = !modified[left]
    }
    left++;
    right--;
  }

  // 需要修改的字符
  var mL = modified.filter((val) => val === true).length
  let result = s.split('');
  let i = 0, j = s.length - 1;
  // 修改字符
  if (mL === 1) {
    while (i <= j) {
      if (modified[i] || modified[j]) {
        if(result[i]!== 'a' && result[j] !== 'a') {
          result[i] = result[j] = 'a';
          break
        }
        result[i] = result[j] = 'a';
      }   
      i++;
      j--
      if(i === j && mL) result[i] = 'a'
    }
  }

  if (mL === 2) {
    while (i < j) {
      if (modified[i]) {
        result[i] = result[j];
      } else if (modified[j]) {
        result[j] = result[i];
      }
      i++;
      j--;
    }
  }
  
  if(mL === 0) {
    mL = 2-mL
    while (mL && i <= j) {
      if (result[i] === 'a') {      
        i++;
        j--;
        continue
      }
      result[i] = result[j] = 'a';
      i++;
      j--;
      mL-=2
    }
  }
  return result.join('');
}

// 示例
console.log(makePalindrome('acdef')); // 输出 'aaaa'
  // console.log(makePalindrome('abcdcbg')); // 输出 'abcba'
