// Lec 1 

// Завдання 1 

var varString = "Hello World!";
var varNumber = 123;
var varArray = [1,2,3];
var varObject = {name: "Alexey"};
var varFunction = function() {
    return varNumber;
}
var varBoolean = true;

console.log("String is:", typeof varString, varString);
console.log("Number is:", typeof varNumber, varNumber);
console.log("Array is:", typeof varArray, varArray);
console.log("Object is:", typeof varObject, varObject);
console.log("Function is:", typeof varFunction, varFunction);
console.log("Boolean is:", typeof varBoolean, varBoolean);

// Завдання 2 

var stringToNumber = "123";
var numberToString = 123;

stringToNumber = Number(stringToNumber);
numberToString = String(numberToString);

console.log("StringToNumber is:", typeof stringToNumber, stringToNumber);
console.log("NumberToString is:", typeof numberToString, numberToString);

// Завдання 3 

var stringNumber = "100";
var numberNumber = 100;

console.log(stringNumber == numberNumber);
console.log(stringNumber === numberNumber);

// Завдання 4 

var key = 12;

var originalNumber = 12341234;
var shifr = originalNumber * (2 * key) / (8 * key);
var deshifr = shifr * (8 * key) / (2 * key);

console.log ("Число:", originalNumber);
console.log ("Шифр:", shifr);
console.log ("Розшифровка:", deshifr);

// Lec 2

var foo = 1;
function bar() {
    if (!foo) {
    var foo = 10;
    }
    alert(foo);
}
bar();

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();    
console.log(a);


// Lec 3 

var num = 10;

// Унарні оператори: 

var a1 = -num; 

var b1 = +num; 

var c = ++num; 
               
var d = num++; 

var e = --num; 
                
var f = num--; 

var g = !num; 

var h = ~num; 

var i = typeof num; 

var obj = {name: "Alexey"};
delete obj; 

var j = void num; 

// Бінарні оператори:

var k = 1 + 1; 

var l = 1 - 1; 

var m = 1 * 1;

var n = 1 / 1;

var o = 1 % 1;

var p = 1 ** 1;

var q = 1 < 2;

var r = 1 == 1;

var s = 1 == 1;

var t = 1 != 1;

var u = true && false;

var v = true || false;

var w = num;

num += 3;

num -= 3;

// Тернарні оператори:

var tern = (num > 20) ? "Так" : "Ні";

// Метод concat

var part1 = "Нехай завжди буде сонце, \n";
var part2 = "Нехай завжди буде небо, \n";
var part3 = "Нехай завжди буде мама, \n";
var part4 = "Нехай завжди буду я.";

var result = part1.concat(part2).concat(part3).concat(part4);

console.log(result);

// Lec Arrays

function maxOfArray (ar) {
    var maxSum = ar [0];
    var currentSum = ar [0];

    for (var i = 0; i < ar.length; i++) {
        currentSum = Math.max(ar[i], currentSum + ar [i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log (maxOfArray([1, 2, 0, -8, 6 , 12, -20]));


function sumOfNumbers (a, b) {
    var x = a.length - 1;
    var y = b.length - 1;
    var carry = 0;
    var result = '';

    while (x >= 0 || y >= 0 || carry) {
        const k = x >= 0 ? Number(a[x--]) : 0;
        const m = y >= 0 ? Number(b[y--]) : 0;

        var sum = k + m + carry;
        carry = Math.floor(sum/10);
        result = (sum % 10) + result;
    }
    return result;
}

console.log(sumOfNumbers("12412516789087654321", "1234356789875123456784"));

function sumOfNumbersAlt(a, b){
    var result = BigInt(a) + BigInt (b);
    return(result);
}

console.log(sumOfNumbersAlt("12412516789087654321", "1234356789875123456784"));

function arrayMinus(a, b) {

    for (var x of b) {
        var index = a.indexOf(x);
        if (index !== -1) {
            a.splice(index, 1);
        }
    }

    return a;
}
console.log(arrayMinus([1, 2, 2, 3], [2, 3])); 
