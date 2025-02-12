let q = 1;
let w = "1";
let e = true;
let r = [1, 2];
let t = undefined;

console.log("Номер 1:")
console.log(typeof q);
console.log(typeof w);
console.log(typeof e);
console.log(typeof r);
console.log(typeof t + "\n");

console.log("Номер 2:")
let n1 = Math.random() * 100;
let n2 = Math.random() * 100;

console.log(n1);
console.log(n2);
console.log(n1 == n2);
console.log(n1 < n2);
console.log(n1 <= n2);
console.log(n1 > n2 + "\n");

console.log("Номер 3:")
let a = false;
let b = null;
let c = undefined;

console.log(a);
console.log(b);
console.log(c + "\n");

console.log("Номер 4:")
console.log("1" + 2 + 3); 
console.log(1 + 2 + "3"); 
console.log("1" - 2); 
console.log("1" + -2); 
console.log("1" + "1" - "1"); 
console.log("foo" + -"bar"); 
console.log(0 == "0"); 
console.log(0.5 + 0.1 == 0.6); 
console.log(0.1 + 0.2 == 0.3); 
console.log(true + true + true == 3); 
console.log(true == 1); 
console.log(true === 1); 
console.log(1 < 2 < 3); 
console.log(3 > 2 > 1); 
console.log(9007199254740991 + 1 == 9007199254740991 + 2); 
console.log(Math.sqrt(-1) == Math.sqrt(-1) + "\n");

console.log("Номер 5:")

let str1 = 'Кто '
let str2 = 'ты '
let str3 = 'такой?'
let concatenation = str1 + str2 + str3;
console.log(concatenation + "\n")

console.log("Номер 6:")
str = "20"
a6 = "5"

console.log(str + a6);
console.log(str - a6);
console.log(str * "2");
console.log(str / 2 + "\n");

console.log("Номер 7:")

a7 = "12"
b7 = "7.15"

console.log(Math.round(Number(a7 % b7)) + "\n")

console.log("Номер 8:")

let x = 7;
console.log((x * x - 7 * x + 10) / (x * x - 8 * x  + 12) + "\n")

console.log("Номер 9:")

let email = "Kakanenko@gmail.com"
let email1 = "Kakanenkogmail.com"

function EmailCheck(email) {
    (email.includes("@")) ? console.log("Email has '@'!!!") :
    console.error("Email doesn't have '@'!!!")
}
EmailCheck(email)
EmailCheck(email1)

//Управление потоком

console.log("Номер 1:")

let age = 25; 

console.log(
    (age < 18) ? "Для детей" :
    (age >= 18 && age <= 30) ? "Для молодежи" :
    "Для всех возрастов"
);

console.log("Номер 2:")

let a2 = 10; 
let b2 = 20; 
let max = (a > b) ? a : b;

console.log("Максимальное значение:", max);

console.log("Номер 3:")

let numberOfCrows = 2; 

switch (numberOfCrows) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        console.log(`На ветке сидит ${numberOfCrows} вороны`);
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(`На ветке сидит ${numberOfCrows} ворон`);
        break;
    default:
        console.log("Введите число от 1 до 10");
}

console.log("Номер 4:")

let i = 1; 
while (i <= 50) {
    console.log(i);
    i += 2;
}

for (let j = 1; j <= 50; j += 2) {
    console.log(j);
}

console.log("Номер 5:");

let sum = 0;
for (let i = 1; i <= 15; i++) {
    if (i === 5 || i === 7) {
        continue; 
    }
    sum += i;
}

console.log("Сумма всех целых чисел от 1 до 15, исключая 5 и 7:", sum);

console.log("Номер 6:");

let x6 = 2;
let y6 = -3;
let result = 1;
let exponent = Math.abs(y6);

while (exponent > 0) {
    result *= x6;
    exponent--;
}

if (y6 < 0) {
    result = 1 / result;
}

console.log(`%c${x6} в степени ${y6} равно ${result}`, "color: green;");
