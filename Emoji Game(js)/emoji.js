const emojiArray = [
"&#127845;", "&#127846;", "&#127847;", "&#127848;", "&#127849;", "&#127850;", "&#127851;", "&#127852;",
"&#127828;", "&#127829;", "&#127830;", "&#127831;", "&#127832;", "&#127833;", "&#127834;", "&#127835;",
"&#127836;", "&#127837;", "&#127838;", "&#127839;", "&#127840;", "&#127841;", "&#127842;", "&#127843;",
"&#127844;", "&#127853;", "&#127854;", "&#127855;", "&#127856;", "&#127857;", "&#127858;", "&#127859;",
"&#127860;", "&#127813;", "&#127814;", "&#127815;", "&#127816;", "&#127817;", "&#127818;", "&#127819;",
"&#127820;", "&#127821;", "&#127822;", "&#127823;", "&#127824;", "&#127825;", "&#127826;", "&#127827;",
"&#128512;", "&#128513;", "&#128514;", "&#128515;", "&#128516;", "&#128517;", "&#128518;", "&#128519;",
"&#128520;", "&#128521;", "&#128522;", "&#128523;", "&#128524;", "&#128525;", "&#128526;", "&#128527;",
"&#128528;", "&#128529;", "&#128530;", "&#128531;", "&#128532;", "&#128533;", "&#128534;", "&#128535;",
"&#128536;", "&#128537;", "&#128538;", "&#128539;", "&#128540;", "&#128541;", "&#128542;", "&#128543;",
"&#128544;", "&#128545;", "&#128546;", "&#128547;", "&#128548;", "&#128549;", "&#128550;", "&#128551;",
"&#128552;", "&#128553;", "&#128554;", "&#128555;", "&#128556;", "&#128557;", "&#128558;", "&#128559;",
"&#128560;", "&#128561;", "&#128562;", "&#128563;", "&#128564;", "&#128565;", "&#128566;", "&#128567;",
"&#128577;", "&#128578;", "&#128579;", "&#128580;", "&#129304;", "&#129305;", "&#129306;", "&#129307;",
"&#129308;", "&#129309;", "&#129310;", "&#129311;",

]
//console.log(emojiArray.at(48))
let niceEmoji = document.getElementById("allEmojis")
let finalEmoji = document.getElementById("last-emojis")
//let fruitEmoji = document.getElementById("fruit-emojis")
//let foodEmoji = document.getElementById("food-emojis")
//let weirdEmoji = document.getElementById("weird")


console.log(emojiArray.indexOf("&#129311;"))
console.log(emojiArray.at(108))

let lastArrays = emojiArray.slice(108, 115)
lastArrays.unshift(emojiArray.at(-1))
//lastArrays.push(emojiArray.at(-1))
//lastArrays.splice(1,2, emojiArray[22], emojiArray[33])

//let fruitArray = emojiArray.slice(33, 47)
//fruitArray.push(emojiArray[47])
//fruitArray.splice(3, 2, lastArrays[3], lastArrays[5])


//let foodArray = emojiArray.slice(0, 31)
//foodArray.push(emojiArray[31])

//console.log(lastArrays)

function emojiSort(array, place){
    for(i = 0; i< array.length; i++){
        place.innerHTML += array[i] + " "
    }

}

//foodArray.fill(fruitArray.at(3))
//fruitArray.fill(foodArray.at(7))
//lastArrays.fill(fruitArray.at(1))
emojiArray.fill(emojiArray.at(58))






emojiSort(emojiArray, niceEmoji)
emojiSort(lastArrays, finalEmoji)
// emojiSort(fruitArray, fruitEmoji)
// emojiSort(foodArray, foodEmoji)

// console.log(emojiArray[33])


const all = document.getElementById("all")
// const last = document.getElementById("last")
// const fruit = document.getElementById("fruit")
// const food = document.getElementById("food")

all.innerHTML += emojiArray.length + " " + emojiArray[48]
 last.textContent += lastArrays.length
// fruit.textContent += fruitArray.length
// food.textContent += foodArray.length







