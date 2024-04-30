let x = 100
let y = x++
let z = ++x

let n = (x == y) ? z++ : ++z
console.log(n);