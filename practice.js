// JavaScript source code
/*var celTemp = Number(prompt("Enter Celcius Temperature:"));
var celToFar = (celTemp * 9/5) + 32 + "<sup>o</sup>F";
document.write(celTemp + "<sup>o</sup>C" + " is " + celToFar + "<br/>");

var farTemp = Number(prompt("Enter Celcius Temperature:"));
var farTocel = (farTemp - 32) * 5/9 + "<sup>o</sup>C";
document.write(farTemp + "<sup>o</sup>F" + " is " + farTocel);
*/
var a = 2;
var b = 1;
--a;
--a - --b;
--a - --b + ++b;
var result = --a - --b + ++b + b--;
console.log("a is " + a);
console.log("b is " + b);
console.log("result is " + result);

var cityName = "karachi";
if (cityName.toLowerCase() === "karachi") {
    console.log("Welcome");
}

var color = "red";
if (color === "red") {
    console.log("Must stop");
}
else if (color === "yellow") {
    console.log("Ready to move");
}
 else if (color === "green") {
    console.log("Move");
}

var sub1 = 40;
var sub2 = 70;
var sub3 = 60;
var totalMarks = 300;
var marksObt = sub1 + sub2 + sub3;
var percent = (marksObt * 100) / totalMarks;
var grade;
var remarks;
if (percent >= 80) {
    grade =  "A";
    remarks = "Excellent";
}
else if (percent >= 70) {
    grade =  "B";
    remarks =  "Good";
}
else if (percent >= 60) {
    grade =  "C";
    remarks = "You need to Improve";
}
else {
    grade =  "Fail";
    remarks = "Sorry";
}
console.log("MARKS SHEET");
console.log("Total marks: " + totalMarks);
console.log("Marks Obtained: " + marksObt);
console.log("Percentage: " + percent);
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);


var num = 5;
var guessNum = 6;
if (guessNum === num) {
    console.log("Bingo!Correct");
}
else if (guessNum === (num + 1)) {
    console.log("Close Enough to Number");
}


var num = 198;
var evenNum = num % 2;
if (evenNum === 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}


var num1 = 10;
var num2 = 2;
var sign = "+"
if (sign === '-') {
    console.log(num1 - num2);
}
else if (sign === '+') {
    console.log(num1 + num2);
}
 else if (sign === '*') {
    console.log(num1 * num2);
}
else if (sign === '/') {
    console.log(num1 / num2);
}
else if (sign === '%') {
    console.log(num1 % num2);
}


var num = -23;
if (num > 0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
}


var char = "i";
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(true);
}
else {
    console.log(false);
}


var corrPass = 'abc123';
var pass = 'abc12345';
if (pass === '') {
    console.log("Please Enter your password");
}
else if (corrPass === pass) {
    console.log("Correct!");
}
else {
    console.log("Incorrect Password");
}



var time = '2200';
var tlenght = time.length;
time = Number(time);
if (tlenght === 4) {
    if (time >= 0000 && time < 1200) {
        console.log("Good Morning");
    }
    else if (time >= 1200 && time < 1700) {
        console.log("Good Afternoon");
    }
    else if (time >= 1700 && time < 2100) {
        console.log("Good Evening");
    }
    else if (time >= 2100 && time <= 2359) {
        console.log("Good Night");
    }
}
else {
    console.log("Please Enter 24 hours Format");
}



var arr = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
console.log("Qualifications:");
for (var i = 0; i < arr.length; i++) {
    console.log(i + 1+") "+ arr[i]);
}

var names = ['Michael', 'John', 'Tony'];
var marks = ['320', '230', '480'];
for (var i = 0; i < names.length; i++) {
    var percentage = (Number(marks[i]) * 100) / 500 + "%";
    console.log("Score of " + names[i] + " is " + marks[i] + ". Percentage: " + percentage);
}


var colors = [];
colors.unshift("red");
colors.push("yellow");
colors.unshift("green", "white");
colors.shift();
colors.pop();
colors.splice(1, 0, "black");
colors.splice(0,2)
console.log(colors);


var list = ['karachi', 'quetta', 'lahore', 'Multan', 'Kashmir'];
var selcities = list.slice(0, 3);
console.log(selcities);

var array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var array3 = "";
for (var i = 0; i < array1.length; i++) {
    if (array3.indexOf(array1[i]) === -1) {
        array3 = array3 + array1[i] + " ";
    }
}
var array3 = String(array3).split(" ");
console.log(array3);


var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];
var a0 = o.shift();
o = o.slice(0, o.length);
o.push(a0);
for (var i = 0; i < aCities.length; i++) {
    console.log(i + 1 + o[i] + " choice is " + aCities[i]);
}



var x = [10, 20, 4, 40, 60, 70]
var y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y = y.concat(x);
var z = '';
for (var i = 0; i < y.length; i++) {
    if (z.indexOf(y[i]) === -1) {
        z = z + y[i] + ' ';
    }
}
z = String(z).split(" ");
z = z.slice(0, z.length-1);
console.log(z);


var c = ''
for (var i = 1; i < 22; i++) {
    var result = i % 2;
    if (result === 0) {
        c = c + i + "k "
    }
}
console.log(c);


var A = [24, 53, 78, 91, 12];
var large = A.sort();
console.log(large[large.length - 1]);


/*
var B = ["cake", "apple", "pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABC Bakery.What do you want to order").toLowerCase();
var notFound = true;
for (var i = 0; i < B.length; i++) {
    if (B.indexOf(input) !== -1) {
        notFound = false;
        console.log(input + " is available at index " + B.indexOf(input));
        break;
    } 
}
if (notFound) {
    console.log("We are Sorry");
}


var city1 = 'Hyderabad';
var city2 = 'Islam';
var city3 = city2 + city1.slice(city2.length, city1.length);
console.log(city3);



var password = prompt("Enter");
var chars = 'abcdefghijklmnopqrstuvwxyz';
var nums = '0123456789';
var isChars = false;
var isNum = false;
for (var i = 0; i < 3; i++) {
    if (chars.includes(password[0])) {
        for (var j = 0; j < password.length; j++) {
            if (chars.includes(password[j]) === true) {
                isChars = true;
                break;
            }
        } 
    }
     if (isChars) {
        for (var k = 0; k < password.length; k++) {
            if (password.includes(nums[k]) === true) {
                isNum = true;
                break;
            }
        }

    } if (isNum && isChars && password.length >= 8 && chars.includes(password[0])) {
        break;
    } 
     else if (isChars === false || isNum === false || chars.includes(password[0]) === false || password.length < 8) {
         console.log("Wrong");
    }
}
*/

var email = 'muzamil@gmail.com';
var chars = 'abcdefghijklmnopqrstuvwxyz';
var nums = '0123456789';
var index = email.indexOf("@");
var charsBefore = email.slice(0, index);
console.log(charsBefore);
var dotAfter = email.slice(index, email.length);
console.log(dotAfter);
var conChars = false;
var beforeDot = false;
var afterDot = false;
if (email.includes('@') === true && dotAfter.includes('.') === true) {
    for (var j = 0; j < email.length; j++) {
        if (chars.includes(email[j]) === true) {
            conChars = true;
            break;
        }
    }
}
if (conChars) {
    for (var k = 0; k < charsBefore.length; k++) {
            if (chars.includes(charsBefore[k]) === true) {
                afterDot = true;
                break;
            }
        }
    }
    if (afterDot) {
        for (var i = 0; i < dotAfter.length; i++) {
            if (chars.includes(dotAfter[i]) === true) {
                beforeDot = true;
                break;
            }
        }
    }
    else if (afterDot === false || conChars === false || beforeDot === false) {
        alert("Wrong");
    }
    if (afterDot && conChars && beforeDot) {
        console.log("Correct");
    }
else {
    console.log("Wrong");
}


var sent = "The quick brown fox jumps over the lazy dog".toLowerCase().split(" ");
var word = 'the';
var num = 0;
for (var i = 0; i < sent.length; i++) {
    if (sent[i] === word) {
        num = num + 1;
    }
}
console.log(num);


var number = '1597';
var ones = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
var tens = ['ten','eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var twoDigits = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var ans = '';
if (number.length === 2 && Number(number[0]) >= 2) {
    console.log(twoDigits[Number(number[0])] + " " + ones[Number(number[1])]);
}
else if (number.length === 1) {
    console.log(ones[Number(number[0])]);
}
else if (number.length === 2 && Number(number[0]) === 1) {
    if (Number(number[1]) === 0) {
        console.log(tens[0]);
    }
    else {
        console.log(tens[Number(number[1])]);
    }
}
else if (number.length === 3) {
    if (number[1] === '0' && number[2] === '0') {
        console.log(ones[Number(number[0])] + " Hundred");
    }
    else if (number[1] === '0' && number[2] !== '0') {
        console.log(ones[Number(number[0])] + " Hundred and " + ones[Number(number[2])]);
    }
    else if ( Number(number[1]) === 1) {
        if (Number(number[2]) === 0) {
            console.log(ones[Number(number[0])] + " Hundred and ten");
        }
        else {
            console.log(ones[Number(number[0])] + " Hundred and " + tens[Number(number[2])]);
        }
    }
   else if (Number(number[1]) >= 2) {
        console.log(ones[Number(number[0])] + " Hundred " + twoDigits[Number(number[1])] +' '+ ones[Number(number[2])]);
    }
}
else if (number.length === 4) {
    if (number[1] === '0' && number[2] === '0' && number[3] === '0') {
        console.log(ones[Number(number[0])] + " Thousand");
    }
    else if (number[1] === '0' && number[2] === '0' && number[3] !== '0') {
        console.log(ones[Number(number[0])] + " thousand and " + ones[Number(number[3])]);
    }
    else if (Number(number[2]) === 1) {
        if (Number(number[3]) === 0) {
            console.log(ones[Number(number[0])] + " thousand and ten");
        }
        else {
            console.log(ones[Number(number[0])] + " thousand and " + tens[Number(number[3])]);
        }
    }
    else if (Number(number[1]) >= 3) {
        console.log(ones[Number(number[0])] + " thousand " + ones[Number(number[1])] + " hundred " +twoDigits[Number(number[2])] + ' ' + ones[Number(number[3])]);
    }
}


var date = new Date();
var date1 = date.getDate();
if (Number(date1) < 23) {
    console.log("First 15 days of month");
}
else {
    console.log("Last days of Month");
}


var date = new Date();
var Time = date.getTime();
var TimeMins = (Time / (1000 * 60));
console.log(Time);
console.log(TimeMins);


var hours = date.getHours();
var hourAgo = hours - 1;
var hours = date.setHours(hourAgo);
console.log(date);


var age = 21;
var year = date.getFullYear();
var birthYear = year - age;
console.log(birthYear);



function factorial(num) {
    num = Number(num);
    if (num <= 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}
console.log(factorial(8));


function palindrom(word) {
    word = String(word).toLowerCase();
    var word1 = '';
    for (var i = word.length - 1; i >= 0; i--) {
        word1 = word1 + word[i]; 
    }
    if (word === word1) {
        console.log("It is Palindrom");
    }
    else {
        console.log("Its not");
    }
}
palindrom("madam");





function value(num) {
    var hundreds = Math.floor(Number(num) / 100);
    console.log(hundreds);
    var fiftys = Math.floor((Number(num) % 100) / 50);
    console.log(fiftys);
    var tens = Math.floor(((Number(num) % 100) % 50) / 10);
    console.log(tens);
    if (hundreds > 0 && fiftys === 1 && tens > 0) {
        console.log(hundreds + " Hundreds " + fiftys + " fifty " + tens + " tens");
    }
    else if (hundreds > 0 && (fiftys === 0 && tens >0)) {
        console.log(hundreds + " Hundreds " + tens + " tens");
    }
    else if (hundreds > 0 && (fiftys === 1 && tens === 0)) {
        console.log(hundreds + " Hundreds " + fiftys + " fifty");
    }
    else if (hundreds > 0 && (fiftys === 0 && tens === 0)) {
        console.log(hundreds + " Hundreds ");
    }
}
value(909);



var arr = [0, 5, 6, 7, 9, 11];
var arr1 = arr.slice(0, arr.length).reverse();
var arr2 = arr +","+ arr1;
console.log(arr2);



function isWeekend(date) {
    var d = new Date(date);
    console.log(d);
    var date = d.getDate();
    var day = d.getDay();
    if (day === 0) {
        console.log("Its Weekend");
    }
    else {
        var wait = 7 - day;
        console.log("Sorry! wait for "+wait+" more days")
    }
}
isWeekend("Oct 20, 2019");



function isBirthDay(date) {
    var bD = new Date(date);
    var cD = new Date();
    var years = cD.getFullYear() - bD.getFullYear();
    var months = cD.getMonth() - bD.getMonth();
    var days = cD.getDate() - bD.getDate();
    if (months < 0 && days < 0) {
        console.log("You are " + years + " years, " + (-months) + " month and " + (-days) + " days old");
    }
    else if (days < 0 && months >= 0) {
        console.log("You are " + years + " years, " + months + " month and " + (-days) + " days old");
    }
    else if (days >= 0 && months < 0) {
        console.log("You are " + years + " years, " + (-months) + " month and " + days + " days old");
    }
    else {
        console.log("You are " + years + " years, " + months + " month and " + days + " days old");
    }
}
isBirthDay("Oct 30, 2019");



function guessGame() {
    var randNum = Math.floor(Math.random() * 100);
    console.log(randNum);
    var i = 0;
    var won = false;
    var lose = false;
    while (i < 3) {
        var userGuess = Number(prompt("Guess Number"));
        if (randNum != userGuess) {
            console.log("Incorrect Please Try Again");
            lose = true;
        }
        else {
            console.log("You are Right, You Won");
            lose = false;
            won = true;
            break;
        }
        i++;
    }
    if (lose === false && won === true) {
        var ask = prompt("Play or Not:").toLowerCase();
        if (ask === 'yes') {
            return guessGame();
        }
        else {
            console.log("Thank you for Playing with us Today");
        }
    }
    else if (lose === true) {
        console.log("You Lose");
        var ask = prompt("Play or Not:").toLowerCase();
        if (ask === 'yes') {
            return guessGame();
        }
        else {
            console.log("Thank you for Playing with us Today");
        }
    }

}

guessGame();


















