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
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let logNum of myArray) {
    console.log(logNum);
}