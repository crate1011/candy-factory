//creating a function that buys chocolate
const buyChocolate = () => {
    const newCandyObj = {
        type: "Milk chocolate"
}
return newCandyObj
}
//creating a function that adds mint to the chocolate
const addFlavoring = (candyObj) => {
    candyObj.flavoring = "mint"
    return candyObj
}
//creating a function that checks if 'mint' is eqaul to true or false and mixes the chocolate
const makeBarkMixture = (candyObj) => {
    if (candyObj.flavoring === "mint") {
         candyObj.mixed = true
    } else { 
        candyObj.mixed = false
    }
    return candyObj
}


//creates a function to check if the chocolate is mixed, and bakes chocolate if mixed is equal to true
const bakeCandy = (candyObj) => {
    if (candyObj.mixed === true) {
       candyObj.baked = true
    } else {
        candyObj.baked = false
    }
    return candyObj
}

const breakBark = (candyObj) => {
    if (candyObj.baked === true) {
        const chocArray = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
        return chocArray
    }
}


let rawChocolate = buyChocolate()

let flavoredChocolate = addFlavoring(rawChocolate)
let mixedChocolate = makeBarkMixture(flavoredChocolate)
let bakedChocolate = bakeCandy(mixedChocolate)
let chocolatepieces = breakBark(bakedChocolate)

console.log(chocolatepieces)