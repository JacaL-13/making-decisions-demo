/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister.')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has better attack than Jon Snow.')
} else {
    console.log('Jon Snow and Jamie Lannister are evenly matched.')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

//Jamie is attacking.
if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been slain.')
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log('Jon Snow\'s health is down to ' + jonSnowHealth)
}

//Jon picks up a shield.
jonSnowDefense += 25

//Jamie is attacking.
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow has been slain.')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log('Jon Snow\'s health is down to ' + jonSnowHealth)
}

//Villager throws Jon a health potion. Health cannot exceed 100.
if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

console.log('Jon\'s health after health kit is ' + jonSnowHealth)

// let coinFlip = Math.random()

// if (coinFlip < 0.5) {
//     console.log('The fight continues.')
// } else {
//     console.log('Jon is allowed to run away.')
// }

let coinLandsHeads = true

if (coinLandsHeads) {
    console.log('The fight continues.')
} else {
    console.log('Jon is allowed to run away.')
}

//Jamie attacks Jon 5 times
for (let i=0; i < 5; i++) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log('Jon\'s health is now ' + jonSnowHealth)
}

//Post-lab assignment 1:
//Write logic in the for loop that detects if Jon's health gets 0 or less, in which case, you will print that Jon is dead
//   and you will stop futher loop iterations (see the "break" JS keyword for leaving a loop early)

//Post-lab assignment 2:
//Write the for loop (including the logic your wrote for the first assignement) as a while loop.
//   it should behave exactly the same

//Next day ---

let backpack = []

// backpack.push('sword')
// backpack.push('shield')
// backpack.push('food')

backpack.push('sword', 'shield', 'food')

let wear = backpack.splice(0, 1)

let furCoat = 'fur coat'

backpack.push(furCoat)

wear.push(backpack.pop())

console.log(backpack)
console.log(wear)

console.log(backpack.length + ' items in backpack.')

backpack.push('flint', 'blanket', 'knife', 'toothbrush')

let saddlebags = backpack.splice(2, 4)

console.log(backpack)
console.log(saddlebags[0])

console.log('Contents of saddlebags:')
for(let i = 0; i < saddlebags.length; i++) {
    console.log(saddlebags[i])
}

console.log('Contents of backpack:')
for(let i = 0; i < 3; i++) {
    if (i < backpack.length) { 
        console.log(backpack[i])
    }
}

let guessMe = 54

while(guessMe < 100) {
    console.log(guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisible by 4 or 5. Added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3. subtracted 27')
        guessMe -= 27
    } else {
        console.log('added 3')
        guessMe += 3
    }
}