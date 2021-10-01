let colours = ["Red", "Green", "White", "Black"]
 let a = ""
 let b = ""
 let c = ""

 for (let i=0; i < colours.length; i++) {
    const ending = i + 1 === colours.length
    if (ending) {
        a += colours[i] + "."
    } else {
        a += colours[i] + "," 
    }
}
    console.log(a)

    for (let i=0; i < colours.length; i++) {
        b += colours[i]+","
    }
        console.log(b)
    
        for (let i=0; i < colours.length; i++) {
            c += colours[i]+"+"
        }
            console.log(c)
        