function palindrome(str) {
  // Match elements then join to form string
  let cleaned = str.match(/[a-zA-Z0-9]+/gi).join("").toLowerCase()
  // Split string into array, reverse and join back to string
  let reversed = cleaned.split("").reverse().join("")
  return reversed == cleaned
}

palindrome("A man, a plan, a canal. Panama")