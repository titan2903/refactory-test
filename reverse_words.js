function reverseWords(str) {
  var result = ''
  var arr = []
  for (let i = 0; i < str.length; i++) {
      if (str[i] != ' ') {
          result += str[i]
      } else if (str[i] == ' ') {
          arr.push(result)
          result = ''
      }
  }
  arr.push(result)

  var Arr2 = []
  var tempStr = '';
  for (let i = 0; i < arr.length; i++) {
      for (let j = arr[i].length - 1; j >= 0; j--) {
          tempStr += arr[i][j]
      }
      Arr2.push(tempStr)
      tempStr = ''
  }

  let output = ''
  for (let k = 0; k < Arr2.length; k++) {
    if (k == Arr2.length - 1) {
        output += Arr2[k]
    } else {
        output += Arr2[k] + ' '
    }
  }
  
  return output
}

console.log(reverseWords("I am A Great human"));