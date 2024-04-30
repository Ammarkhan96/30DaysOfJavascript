let foo = function(){
    console.log(1);
}

setTimeout(foo, 1000)

foo = function(){
    console.log(2);
}