let p = new Promise((resolve, reject) => {
    console.log("pending")
    setTimeout(() => {
        console.log("resolves")
        resolve(true)
        // reject(new Error("i am an error"))
    }, 1000)
})

p.then((value) => {
    console.log(value); // print values resolve(true)

    // Again makes a neew promise in p.then 
    var p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p2 resolves success")
        }, 5000)
    })
    return p2;

}).then((value) => {
    console.log("we are done here");
})