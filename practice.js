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

/*

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

*/


function is_array(value) {
    if (typeof (value) === "object") {
        return true;
    }
    else {
        return false;
    }
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));




function first(value, n) {
    var val1;
    if (typeof (value) === 'object' && n >= 0) {
        val1 = value.slice(0, n);
        return val1;
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));





function last(arr, n) {
    var val1;
    if (typeof (arr) === 'object' && n >= 0 && n < arr.length) {
        val1 = arr.slice(arr.length - n, arr.length);
        return val1;
    }
    else if (typeof (arr) === 'object' && n > arr.length) {
        return arr;
    }
    else {
        return arr[arr.length - 1];
    }
}



console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));



myColor = ["Red", "Green", "White", "Black"];
var str = ''
for (var x in myColor) {
    str = str + myColor[x] + ",";
}
console.log(str.slice(0, str.length-1));


var nums = '01234678102';
var result = [];
for (var i = 1; i < nums.length; i++) {
    if (((Number(nums[i - 1])) % 2 === 0) && (Number(nums[i]) % 2) === 0) {
            //0                                        //1
           //1                                        //2
           //2                                        //
        result.push('-', nums[i]);
    }
    else {
        result.push(nums[i]);
    }
}
console.log(result.join(""));



var num = window.prompt();
console.log(num);
var str = num.toString();
console.log(str);
var result = [];
for (let x = 1; x < str.length; x++) { //1
    if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
        //0                         //2
        //2                        //3
        //3                           //4
        //4                          //6
        //6                           //8
        result.push('-', str[x]);
        console.log(result);
    }
    else {
        result.push(str[x]);
        console.log(result);
    }
}
console.log(result);


var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function (a, b) { return a - b; })
console.log(arr1);


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3];
var a = 1;
var b = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] === arr1[j]) {
            b = b + 1;
            if (a < b) {
                a = b;
                item = arr1[i];
            }
        }
    }
    b = 0;
}
console.log(item + " is "+ a + " Times present")



var str = 'The Quick Brown Fox';
var str1 = '';
for (var x in str) {
    if (str[x] === str[x].toLowerCase()) {
        str1 = str1 + str[x].toUpperCase();
    }
    else if (str[x] === str[x].toUpperCase()) {
        str1 = str1 + str[x].toLowerCase();
    }
    else {
        str1 = str1 + " "; 
    }
}
console.log(str1);



var a = [[1, 2, 1, 24], [8, 11, 9, 4],
[7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
var c;
var b = ''
for (var x in a) {
    console.log("Row " + x);
    for (var y in a[x]) {
        b = b + a[x][y] + " "
    }
    c = b;
    b = 0
    console.log(c);
}


function square(value) {
    var add = 0;
    var mul = 1;
    for (var x in value) {
        var q = value[x];
        add = add + q;
        mul = mul * q;
    }
    console.log(add);
    console.log(mul)
}
square([4, 1, 2, 3]);


var blank = [];
blank.push(10, 20, 30, 200);
for (var x in blank) {
    console.log("Element " + x + " = " + blank[x]);
}


var arr = [1, 2, 3, 'a', 'b', 2, 1, 'a'];
var arr2 = [];
for (var x in arr) {
    if (arr2.indexOf(arr[x]) === -1) {
        arr2.push(arr[x]);
    }
} 
console.log(arr2);



color = ["Blue ", "Green", "Red", "Orange", "Violet",
    "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"]
var m = o.shift();
o.push(m);
for (var h = 0; h < color.length; h++) {
    if (h < 3) {
        console.log(h+1 + o[h] + " is " + color[h]);
    }
    else {
        console.log(h + 1 + o[o.length-1] + " is " + color[h]);
    }
}



function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
         //7  //6
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
       // console.log(index);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        //6    //5
        arra1[ctr] = arra1[index];
        //6     //4
       // console.log(arra1[ctr]);
        arra1[index] = temp;
        //6    
       // console.log(arra1[index]);
    }
     return arra1;
}
var  myArray = [0, 1, 2, 3, 4, 5, 6];
console.log(shuffle(myArray));




function binary_Search(items, value) {
    let firstIndex = 0;
    let lastIndex = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
                   //4
                  //5  3  1         //1        //0          //8  4 
    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            //1          //5  3
            lastIndex = middleIndex - 1;
             //4   1        
        }
       // else if (value > items[middleIndex]) {
         //   firstIndex = middleIndex + 1;
       // }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
          //2   0                    //4  1      //0 
    }
                //1               //1
    return (items[middleIndex] != value) ? -1 : middleIndex;
}
const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
//console.log(binary_Search(items, 5));





var  binary1 = (array) => {
    var len = array.length - 1;
    var temp;
    var index;
    while (len > 0) {
       index = Math.floor(Math.random() * len);
        temp = array[len];
        array[len] = array[index];
        array[index] = temp;
        len--;
    }
    return array;
}
console.log(binary1([1, 2, 3, 4, 5]));





function search(item, value) {
    if (item.indexOf(value) != -1) {
        return (item.indexOf(value));
    }
    else {
        return "Null";
    }
}
console.log(search([1, 2, 3, 4, 5], 4));


var array10 = [1, 0, 2, 3, 4];
console.log(array10[array10.length]);
var array20 = [3, 5, 6, 7, 8, 13];
var array30 = [];
for (var i = 0; i < array20.length; i++) {
    if (array10[i] === undefined) {
        array30.push(array20[i]);
    }
    else if (array20[i] === undefined) {
        array30.push(array10[i]);
    }
    else {
        var array3 = array10[i] + array20[i];
        array30.push(array3);
        //console.log(array30);
    }
   // console.log(array10[i] + "===="+ array20[i])
}
console.log(array30);



var numbers10 = [10, 20, 10, 40, 50, 60, 70];
var target = 50;
var output = '';
for (var i = 0; i < numbers10.length; i++) {
    for (var j = i; j < numbers10.length; j++) {
        if ((numbers10[i] + numbers10[j]) === 50) {
            output = output + numbers10.indexOf(numbers10[i]) + " " + numbers10.indexOf(numbers10[j]) + ",";
            //console.log(output);
        }
        else {
            continue;
        }
    }
}
console.log(output);



var a = [0, 15, false, -22, '', undefined, 47, null, NaN];
var b = [];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
    if (a[i] == NaN || a[i] === 0 || a[i] === false || a[i] === '' || a[i] === undefined || a[i] === null) {
        continue;
    }
    else {
        b.push(a[i]);
    }
} 
console.log(b);




const range = (val1, val2, val3) => {
    var chars = 'abcdefghijklmnopqrstvuwxyz';
    var newArray = [];
    console.log(typeof (val1));
    if (typeof(val1) === 'string' && typeof(val2) === 'string')
    {
        var val4 = chars.slice(chars.indexOf(val1), chars.indexOf(val2));
        //   console.log(val4);
        for (var i = 0; i < val4.length; i++) {
            var val5 = i % Number(val3);
            if (val5 === 0) {
                newArray.push(val4[i]);
            }
        }
        return newArray;
    }
    else if (typeof (val1) === 'number' && typeof (val2) === 'number') {
   //  var val4 = chars.slice(val1,val2);
     //   console.log(val4);
       for (var i = val1; i <= val2; i++) {
          var val5 = i % Number(val3);
             if (val5 === 0) {
              newArray.push(i);
              }
        }
        return newArray;
    }
}
console.log(range(5, 15, 3));



var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var prop = '';
for (x in student) {
    prop = prop + x + ' ';
}
console.log(prop);
console.log(student);
console.log(Object.keys(student).length);
delete student.rollno;
console.log(student);

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) {
    var book = "Book name: " + library[i].title + " Author: " + library[i].author;
    if (library[i].readingStatus) {
        console.log(`${book}  readingStatus: Already Read `);
    }
    else {
        console.log(book + " readingStatus: Still Pending");
    }
}


var cylinder = function (height, diameter){
    this.height = height;
    console.log(height);
    this.diameter = diameter;
    console.log(diameter);
};

cylinder.prototype.volume = function(){
    var radius = this.diameter / 2;
    console.log(radius);
    return this.height * 3.14 * (radius ** 2);
}

var cyl = new cylinder(2, 7)
console.log(cyl.volume());

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume());



/*const dog = 'snickers';
function logDog() {
    console.log(dog);
}
function go() {
    const dog = 'sunny';
    logDog();
}
go();


const dog = 'snickers';
function logDog(dog) {
    console.log(dog);
}
function go() {
    const dog = 'sunny';
    logDog(dog);
}
go();
*/

function sayHi() {
    function yell() {
        console.log('hello');
    }
    yell()
}
sayHi()




/*
let person = {
    fname: "Muzammil",
    lname: "Irshad",
    age: 34,
    hello: function () {
        console.log("hello world");
    }
}
person.hello()
person.hello = function () {
    console.log(`Name: ${this.fname} ${this.lname} || age: ${this.age}`);
}
person.hello();
 
function person1(fname, lname, age) {
    return {
        fname:fname,
        lname:lname,
        age:age,
        describe:function () {
            console.log(`Name: ${this.fname} ${this.lname} || age: ${this.age}`);
        }
    }
}
var p1 = new person1("Muzammil", "Irshad", 30);
p1.describe();
*/
function person1(data) {
    console.log(data);
    var { fname, lname, age } = data;
    //console.log(fname);
    var description = {
        first : fname,
        last : lname,
        Age : age,
        describe : function () {
            console.log(`Name: ${this.first} ${this.last} || age: ${this.Age}`);
        }
    }
    return description.describe();
    //console.log(description.fname);
}
 person1({ fname: "Muzammil", lname: "Irshad", age: 30 });



var p4 = ["Muzammil", "Irshad", 30];

var person = function (fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.describe = function () {
        console.log(`Name: ${this.fname} ${this.lname} || age: ${this.age} || email: ${this.email}`);
    }
}
person.prototype.email = "mz@gmail.com";
var p2 = new person(...p4);
p2.describe();


let nums100 = [10, 2, 3, 100, 30, 40];
console.log(nums100.sort((a, b)=> a - b));

const helll = {};
helll.name = "MZ";
delete helll.name;
console.log(helll);




let address = [
    { country: "Pakistan", city: "Quetta" },
    { country: "India", city: "Mumbai" },
];
console.log(typeof address);

let enroll = (data) => {
    //console.log(data);
         const type = typeof data;
         let count = 0;
         for (var i in data) {
             count++;
         }
         //console.log(count);
         if (type === 'object' && count == 2) {
             address.push(data);
             return address;
            }
        else {
            return "Sorry Bro";
            }
        
}
/*
 enroll({ county: "America" }).then(() => {
    console.log("Data has Been recorded");
    console.log(address);
}).catch(function () { console.log("rejected"); console.log(address); });
*/

async function getData() {
    var data1 = await enroll({ country: "America"});
    //console.log(data1);
    setTimeout(() => {
        console.log(data1);
    }, 5000);
}
getData();




let myArray00 = [8, 0, 10, "Muz", true, false];
//myArray00.map(function (value, index, array) { console.log(array) });
let filteredArr = myArray00.filter(value => value);
console.log(filteredArr);



let posts = [
    { post: "One", detail: "Post number 1" },
    { post: "Two", detail: "Post number 2"},
]
const getPost = function () {
    posts.forEach((value, index) => {
        const val1 = `<li>${value.detail}</li>`;
        console.log(val1);
    });
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if (!error) {
                posts.push(post);
                resolve();
            }
            else {
                reject("Sorry!Something went wrong");
            }
        }, 3000);
    });
}
async function result100() {
    try {
        await createPost({ post: "Three", detail: "Post number 3" });
        getPost();
    }
    catch (error) {
        console.log(error);
    }
}
result100();


 function peekAtContent() {
     var whatsThere = document.getElementById("content").innerHTML;
     console.log(whatsThere);
 }









