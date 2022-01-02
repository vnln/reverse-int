module.exports = (n) => [...(Math.abs(n) + "")].reverse().join("");

// 1. getting rid of negative sign with Math.abs
// 2. adding empty string to convert to string type
// 3. unpacking with spread operator
// 4. reversing and joining together to achieve desired results
