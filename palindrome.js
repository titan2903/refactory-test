function isPalindrome(s) {
    // your code here
    y = s.toLowerCase()
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i].toLowerCase();
    }

    if (result == y) {
        return "palindrome"
    } else {
        return "not palindrome"
    }
}

console.log(isPalindrome("Radar"))
console.log(isPalindrome("Malam"))
console.log(isPalindrome("Kasur ini rusak"))
console.log(isPalindrome("Ibu Ratna antar ubi"))
console.log(isPalindrome("Malas"))
console.log(isPalindrome("Makan nasi goreng"))
console.log(isPalindrome("Balonku ada lima"))
/**
Radar                 # --> palindrome
Malam                 # --> palindrome
Kasur ini rusak       # --> palindrome
Ibu Ratna antar ubi   # --> palindrome
Malas                 # --> not palindrome
Makan nasi goreng     # --> not palindrome
Balonku ada lima      # --> not palindrome
 */
