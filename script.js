console.log("Hello Team")

let color = "blue"
const fruit = "berry"

console.log("our color", color)
console.log("our fruit", fruit)

console.log(color + fruit)

let ourFruit = (color + fruit).toUpperCase()
console.log(ourFruit)     

if(color){
    console.log("we have a color! " + color)
} else {
    console.log("we don't have a color!")
}

let secondsperminute= 60   
let minutesperhour= 60
let hoursperday= 24
let daysperyear= 365
console.log("second in a year",secondsperminute* minutesperhour* hoursperday* daysperyear)

console.log("seconds in a year",60 * 60 * 24 * 365)