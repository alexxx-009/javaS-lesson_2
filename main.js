const number1 = +prompt("Введите первое число");
const number2 = +prompt("Введите второе число");
const number3 = +prompt("Введите третье число");

if (number1 >= number2 && number1 >= number3) {
    console.log(number1);
}

if (number2 >= number1 && number2 >= number3) {
    console.log(number2)
}

if (number3 >= number2 && number3 >= number1) {
    console.log(number3)
}

const age = +prompt("Укажите ваш возвраст")

console.log(age >= 18 && age <= 60);

const username = "admin";
const password = "12345";

const inputUsername = prompt("Введите username");
const inputPassword = prompt("Введите пароль")

if (inputPassword == 12345 && inputUsername === username) {
    console.log("Вы успешно вошли в систему");
} else {
    console.log("Некорректный username или пароль")
}

const correctAnswer1 = "4"
const correctAnswer2 = "6"
const correctAnswer3 = "9"
const correctAnswer4 = "81"
const correctAnswer5 = "500"

const userAnswer1 = prompt("Сколько будет 2 + 2?");
const userAnswer2 = prompt("Сколько будет 2 + 2 * 2?")
const userAnswer3 = prompt("Сколько будет 3 * 3?")
const userAnswer4 = prompt("Сколько будет 9 * 9?")
const userAnswer5 = prompt("Сколько будет 5 * 100?")

let score = 0;
if (userAnswer1 === correctAnswer1) {
    score = score +1;
}
if (userAnswer2 === correctAnswer2) {
    score = score +1;
}
if (userAnswer3 === correctAnswer3) {
    score = score +1;
}
if (userAnswer4 === correctAnswer4) {
    score = score +1;
}
if (userAnswer5 === correctAnswer5) {
    score = score +1;
}
console.log(score)

const number = +prompt("Введите число");
number % 2 === 0 || number % 7 === 0

if (number % 2 === 0 || number % 7 === 0) {
    console.log("Подходит")
} else {
    console.log("Не подходит")
}
const sum = +prompt("Введите сумму покупки");
if (sum > 5000) {
    console.log(sum * 0.9);
} else {
    console.log(sum);
}

const letter = prompt("Введите букву")
console.log(
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
);

const numberPercent = +prompt("Введите число");
const percent = +prompt("Введите процент");

console.log(number * percent / 100);