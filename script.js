console.log("For Loop: 1-10")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("For Loop: 10-1")
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("While Loop: 1-10")
let x = 1;

while (x <= 10) {
    console.log(x);
    x++;
}

console.log("While Loop: 10-1")
let y = 10;

while (y >= 1) {
    console.log(y);
    y--;
}

console.log("Do...While Loop: 1-10")
let z = 1;

do {
    console.log(z);
    z++
}
while (z <= 10);

console.log("Do...While Loop: 10-1")
let a = 10;

do {
    console.log(a);
    a--;
}
while (a >= 1);

console.log("For...Of Loop: Array log")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let logNum of numbers) {
    console.log(logNum);
}

// let word = prompt ("Give me a word with 10 or fewer charaters");
// if ((10 - word.length) === 0) {
//     console.log(word);
// } else if ((10 - word.length) === 1) {
//     console.log(" " + word);

// }else if ((10 - word.length) === 2) {
//     console.log("  " + word);

// }else if ((10 - word.length) === 3) {
//     console.log("   " + word);

// }else if ((10 - word.length) === 4) {
//     console.log("    " + word);

// }else if ((10 - word.length) === 5) {
//     console.log("     " + word);

// }else if ((10 - word.length) === 6) {
//     console.log("      " + word);

// }else if ((10 - word.length) === 7) {
//     console.log("       " + word);

// }else if ((10 - word.length) === 8) {
//     console.log("        " + word);

// }else if ((10 - word.length) === 9) {
//     console.log("         " + word);

// }

console.log("Extended Challenge / Second Exercise");
// This was a colabrotive effort between myself and Rachel Rebecca
let word = prompt ("Give me a word with less than 10 charaters");
for (let i = word.length; i < 10; i++) {
        word = (" " + word);    
}
console.log(word);
console.log(word.length);


// let word = prompt ("Give me a word with less than 10 charaters");
// let padding = " ";
// let newWord;
// do {
//     padding + word;
// }
// while (word.length < 10);
// console.log(word);


// let str = prompt("Type a word that is 1 to 9 letters long:");

// while (str.length < 10) {
//     if (str.length === 9) {
//         console.log(" " + str);
//         break;
//     } else if (str.length === 8) {
//         console.log("  " + str);
//         break;
//     } else if (str.length === 7) {
//         console.log("   " + str);
//         break;
//     } else if (str.length === 6) {
//         console.log("    " + str);
//         break;
//     } else if (str.length === 5) {
//         console.log("     " + 5);
//         break;
//     } else if (str.length === 4) {
//         console.log("      " + str);
//         break;
//     } else if (str.length === 3) {
//         console.log("       " + str);
//         break;
//     } else if (str.length === 2) {
//         console.log("        " + str);
//         break;
//     } else if (str.length === 1) {
//         console.log("         " + str);
//         break;
//     } else {
//         console.log("Not an option")
//         break;
//     }
// }


// let word = prompt ("Give me a word with less than 10 charaters");
// let j = 1;

// while (word.length < 10) {
//     console.log(" " + word);
//     j++;
// }