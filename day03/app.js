const obj = {x: 1, y: 2}

let {x: a, y: b} = obj

a = 2
console.log(obj.x, obj.y);