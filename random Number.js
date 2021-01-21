// genarate randomNumber 1 to 6;
let dice = Math.random() * 6
let randomNumber = Math.round(dice)

function rendomGame(randomNumber) {
    if (randomNumber == 0) {
        return randomNumber = 6;

    } else {
        return randomNumber;
    }

}

let result = rendomGame(randomNumber);
console.log(result);

// genarate randomValue From arrey ;
var colors = ["red", "blue", "green", "yellow"];
var randColor = colors[Math.floor(Math.random() * colors.length)];
// colors[Math.floor(Math.random() * colors.length)] means index number Of this arrey 
console.log(randColor)

// shffel in arrey 
var a = []
for (i = 0; i < 4; i++) {
    a[i] = i;
}


function shuffle(array) {
    var tmp, current, top = array.length;
    // if (top)
    while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

a = shuffle(a);
console.log(a)