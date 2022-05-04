// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let result_1 = 1;

while (i<11) {
    result_1 = result_1*2;
    i++;
}
console.log(result_1);

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// Вариант 1

const power = function(num) {
    let result = 1;
    for (let i = 1; i<=num;i++) {
        result = result*2;
    }
    return result;
}

console.log(power(10));

// Вариант 2

const power2 = function(num) {
    return 2**num;
}

console.log(power2(10));

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ":)";
let result_2 = "";

for (let i = 1; i<=5;i++) {
    result_2+=smile;
    console.log(result_2);
}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// Вариант 1

const printSmile = function(stroka, numberOfRows) {
    let result = "";
    for (let i = 1; i <= numberOfRows; i++){
        result+=stroka;
        console.log(result);
    }
}

printSmile(":)", 5);

// Вариант 2

const printSmile2 = function(stroka, numberOfRows) {
    for (let i = 0; i <= numberOfRows; i++){
        console.log(stroka.repeat(i));
    }
}

printSmile2(":(", 5);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

// Вариант 1

const getWordStructure = function(word) {
    let numberOfVowels = 0;
    let numberOfConstants = 0;
    let vowels = ["a","A","e","E","i","I","o","O","u","U","y","Y"];
    let consonants = ["b","B","c","C","d","D","f","F","g","G","h","H","j","J","k","K","l","L",
    "m","M","n","N","p","P","q","Q","r","R","s","S","t","T","v","V","w","W","x","X","z","Z"];

    for (i = 0; i < word.length; i++){
        for (j = 0; j < vowels.length; j++){
            if (word[i] === vowels[j]){
                numberOfVowels++;
                break
            }
        }
        for (q = 0; q < consonants.length; q++){
            if (word[i] === consonants[q]){
                numberOfConstants++;
                break
            }
        }
    }
    console.log("Слово " + word + " состоит из " + numberOfVowels + " гласных и " + numberOfConstants + " согласных букв");
}

getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-list");

// Вариант 2

function getWordStructure2(word) {
    let vowels = "aeiouy".split("");
    let consonants = "bcdfghjklmnpqrstvwxz".split("");
    let numberOfVowels = 0;
    let numberOfConstants = 0;
    
    for (char of word.toLowerCase()) {
        if (vowels.includes(char)) numberOfVowels++;
        if (consonants.includes(char)) numberOfConstants++;
    }
    console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConstants} согласных букв`);
}

getWordStructure2("case");
getWordStructure2("Case");
getWordStructure2("Check-list");

// Вариант 3 через регулярные выражения

function getWordStructure3(word) {
    let vowels = word.match(/[aeiouy]/gi);
    let consonants = word.match(/[bcdfghjklmnpqrstvwxz]/gi);
    console.log(`Слово ${word} состоит из ${vowels.length} гласных и ${consonants.length} согласных букв`);
};

getWordStructure3("case");
getWordStructure3("Case");
getWordStructure3("Check-list");

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

// Вариант 1

function isPalindrome(word) {
    let newStr = "";
    for (i = word.length - 1; i >= 0 ;i--) {
        newStr = newStr + word[i];
    }
    if (word.toLowerCase() == newStr.toLowerCase()) {
        console.log(`${word} - is a Polindrom`)
    } else {
        console.log(`${word} - is not Polindrom`)
    }
}

isPalindrome("abba")
isPalindrome("Abba")
isPalindrome("Petya")

// Вариант 2

function isPalindrome2(str) {
    str = str.toLowerCase();

    // find the length of a string
    const len = str.length

    // loop through half of a string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - i -1]) {
            return 'It is not palindrome';
        }
    }
    return 'It is a Palindrome';
}

console.log(isPalindrome2('Abba'));


// Вариант 3

function isPalindrome3(word) {
    return word.toLowerCase() == word.toLowerCase().split("").reverse().join("");
}

console.log(`${isPalindrome3('Abba') ? 'It is a Palindrom' : 'It is a not Polindrom'}`);