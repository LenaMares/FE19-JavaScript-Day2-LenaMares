//ex 1

const weather = () => {
    const randomNum = Math.floor(Math.random() * (25 + 5) -5)
    
    if (randomNum >= -5 && randomNum <= 10) {
        console.log (`The weather is cold because it has ${randomNum} degrees.`)

    } else {
        console.log (`The weather is moderate because it has ${randomNum} degrees.`)
    }
}

weather()


//ex 2

favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"]

const randomFood = () => {
    const randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    const randomFood = favoriteFoods[randomIndex];

console.log(`My favorite food is ${randomFood}.`)
}

randomFood()


//ex 3

const crystalGazer = (numChild, partner, location, job) => {
    console.log (`You will be a ${job} in ${location} and married to ${partner} with ${numChild} children.`)
}

crystalGazer(3, "Martin", "Vienna", "nurse")


//ex 4

const ageCalculator = (birthYear, currentYear) => {
    const age = currentYear - birthYear

    console.log(`You are either ${age} or ${age-1} years old.`)
}

ageCalculator(1991, 2023)


//ex 5

const ageCalculator2 = (birthYear) => {
    const age = getFullYear() - birthYear

    console.log(`You are either ${age} or ${age-1} years old.`)
}

ageCalculator(1991, 2023)


//ex 6

const degreesToRadians = (degrees) => {
    const radians = degrees * (Math.PI/180)

    console.log(`${degrees} degrees are ${radians.toFixed(2)} radians.`)
}

degreesToRadians(90)


//ex 7

const boxCalculator = (width, height, depth) => {
    const area = width*height
    const volume = width*height*depth

    console.log (`The area of the box is ${area}. The volume of the box is ${volume}.`)

    return area, volume
}

boxCalculator(12, 13, 14)

