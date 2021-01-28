// JavaScript source code
/*var a = prompt("Enter the number");
var b = prompt("Enter the number");
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}*/
var a = prompt("Enter numer");
var b = 2
var c = 2;
var d = a * b * c;
if (a > 0 && b > 0 && c > 0) {
    console.log("+");
} else {
    console.log("-");
}



var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
if (a > b && a > c && a > d && a > e){
    console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
} else if (c > a && c > b && c > d && c > e) {
    console.log(c);
} else if (d > a && d > b && d > c && d > e) {
    console.log(d);
} else {
    console.log(e);
}

//var num = 2;
for (var i = 0; i <= 15; i++) {
    var result = i % 2
    if (result === 0) {
        console.log(i + " is even");
    } else if (result === 1) {
        console.log(i + " is odd");
    }
}

/*var David = 80;
var Vinoth = 77;
var Divyaa = 88;
var Ishitta = 95;
var Thomas = 68;
if ()*/

for (var i = 1; i <= 100; i++) {
    var a = i % 3
    var b = i % 5
    if (a === 0 && b === 0) {
        console.log("FizzBizz" + i);
    }
    else if (a === 0) {
        console.log("Fizz" + i);
    } else if (b === 0) {
        console.log("Buzz" + i);
    }  
}
/*for (i = 1; i <= 5; i++) {
    for (j = 0; j < i; j++) {

        document.write("*");
    }
    document.write("<br />");
}*/
for (var i = 1; i <= 5; i++) {
    for (var k = 4; k >= 5 - i; k--) {
        document.write("&nbsp; ");
    }
    for (var j = 5; j >= i; j--) {
        
            document.write("* &nbsp;");
        
    }
    document.write("<br/>");
}

/*for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 5; j++) {
        if ((j >= i && j <= 4-i)) {
            document.write("*");
        }else if ()
    }
    document.write("<br/>");
}*/
var s = "";
for (var i = 0; i <= 5; i++) {
    s = s + i;
}
    console.log(s);

for (var i = 0; i <= 20; i++) {
    var multiplesOf3 = i % 3;
    if (multiplesOf3 === 0) {
        console.log(i);
    }
}

var a = "";
for (var i = 20; i >= 0; i--) {
    a = a + i + " ";
}
console.log(a);

var userInput = 8;
var sum = 0;
for (var i = 0; i <= userInput; i++) {
    sum = sum + i;
}
    console.log(sum);

var userInput = 8;//parseInt(prompt("Enter Number: "));
var sum = 0;
for (var i = 0; i <= userInput; i++) {
    sum = sum + i;
}
console.log(sum /i);


var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < num1.length; i++) {
    sum1 = sum1 + num1[i];
}
for (var i = 0; i < num2.length; i++) {
    sum2 = sum2 + num2[i];
}
console.log(sum1 + sum2);

var mOf2 = "";
for (var i = 2; i <= 22; i++) {
    var multipleOf2 = i % 2;
    if (multipleOf2 === 0) {
        mOf2 = mOf2 + i + " ";
    }
}
console.log(mOf2);

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let arr1 = arr.reverse();
console.log(arr1);


let arr_1 = [2, 4, 6];
let arr_2 = [2, 4, 6];
let arr3 = [];
for (var i = 0; i < 3; i++) {
    arr3 = arr3 + (arr_1[i] + arr_2[i]) + ",";
}
console.log(arr3);


var word = "javascript";
var word1 = word.length
for (var i = 0; i < word1; i++) {
    if ((i % 2) === 0) {
        console.log("z");
    } else {
        console.log(word[i]);
    }
}

let str2 = "don’t know why";
var ifNotfound = true;
for (var i = 0; i < 1; i++) {
    for (var j = 0; j < str2.length; j++) {
        if (str2[j] === "a") {
            ifNotfound = false;
            console.log(true);
            break;
        }
    }
    
}
if (ifNotfound) {
    console.log(false);
}

var a = 1;
for (var i = 1; i <= 4; i++) {
    a = a * i;
}    
console.log(a);


var pinNotFound = true;
for (var i = 0; i < 4; i++) {
    var pinGuess = parseInt(prompt("Enter you Pin"));
    if (pinGuess === 4444) {
        pinNotFound = false;
        console.log("That's Correct");
        break;
    } else if (pinGuess !== 4444) {
        console.log("That was wrong" + pinGuess);
    }
}
if (pinNotFound) {
    console.log("Incorrect pin");
}


var a = [0, -1, 4];

console.log(a.sort());

var a = -5; b = -3; c = -2; d = -4;
if (a > b && a > c && a > d) {
    console.log(a);
}
else if (b > a && b > c && b > d) {
    console.log(b);
}
else if (c > a && c > b && c > d) {
    console.log(c);
} else {
    console.log(d);
}



for (var i = 0; i < 15; i++) {
    if ((i % 2) === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

var studentsMarks = [80, 77, 88, 95, 60];
var totalMarks = 0;
for (var i = 0; i < studentsMarks.length; i++) {
    totalMarks = totalMarks + studentsMarks[i];
}
console.log(totalMarks);
var average = totalMarks / studentsMarks.length;
console.log(average);
if (average < 60) {
    consoel.log("Grade F");
} else if (average > 80) {
    console.log("Grade A");
} else {
    console.log("Grade B");
}

for (var i = 0; i < 15; i++) {
    if ((i % 5) === 0) {
        console.log("Fizz Buzz " + i);
    } else if ((i % 2) === 0) {
        console.log("Fizz " + i);
    } else if ((i % 3) === 0) {
        console.log("Buzz " + i);
    }
}


var num = "371";
var num1 = 0;
var ifNotEqual = true;
for (var i = 0; i < num.length; i++) {
    num1 = num1 + (Number(num[i]) ** 3);
    if (Number(num) === num1) {
        ifNotEqual = false;
        console.log("Both are equal");
        break;
    }
}
if (ifNotEqual) {
    console.log("Not Equal");
}



var cities = ["new york", "karachi", "delhi", "mumbai"]
var populatedCity = "New York";
var populatedCity = populatedCity.toLowerCase();
for (var i = 0; i < cities.length; i++) {
    if (cities[i] === populatedCity) {
        console.log("The cleanest city");
    }
}

var text = "World War II";
for (var i = 0; i < text.length; i++) {
 if (text.slice(i, i + 12) === "World War II") {
     text =  "the Second World War";
     console.log(text);
    }
}












