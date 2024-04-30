let obj = {
    timeoutId: setTimeout(() => {
        console.log("Hi");
    }, 1000)
}

delete obj.timeoutId
obj = null