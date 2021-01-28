// JavaScript source code
alert("hello world");
console.log("hello World");
console.log(23 + 7);


//document.write(10 + 10);

//document.write("hello world");
var nationality = "Pakistani";
var age = 20;
console.log(age);
console.log(nationality);
age = 10;
console.log(age);


var message = "It's alright";
console.log(message);
var message = 'It"s alright';
console.log(message);

var num1 = 20;
var num2;
num2 = 15.5;
var sum = num1 + num2;
console.log(sum);

var Ans1 = true;
var Ans2 = false;
console.log(Ans1);
alert(Ans2);

var name1 = "Muzammil";
name1 = undefined;
console.log(name1);
var name2;
console.log(name2);

//null operator
var name3 = null;
var value = 90;
value = null;
console.log(name3);
console.log(value);

//typeof operator
var age = 20;
var name = "Hello";
var isfeepaid = true;
console.log(typeof age);
console.log(typeof name);
console.log(typeof isfeepaid);

//camelcase
var firstName = "Muzammil";
console.log(firstName);


//arithematic Operators
var a = 2;
var b = 2;
var c = a + b; var d = a - b; var e = a * b; var f = a / b; var g = a % b; var h = a ** b;
console.log(f); console.log(h);


//assignment operators
var a = 5;
a = a + 2;
console.log(a);
a += 2;
console.log(a);
h /= 2;
console.log(h);


//increment operator and decrement operator
var a = 10;
var b = ++a
console.log(a);//11
console.log(b);//11
var c = a++;
console.log(a); //11
console.log(c); //10
var a = 4;
var b = 3;
var c = a++ + --b - --a;
console.log(a);//4
console.log(b);//2
console.log(c);//4 + 2 - 4 = 2
var d = ++a - b-- + a--;
console.log(a);//4
console.log(b);//1
console.log(d);//5 - 1 + 4 = 8


//string concatenation
var a = "hello" + 3 + 4;
console.log(a);
var b = 3 + 4 + "hello";
console.log(b);
var c = "Hello" + (3 + 4);
console.log(c);


/*prompt
var name = prompt("what is your name?", "Zeeshan");
var age = prompt("what is your age?");
console.log(name);
console.log(age);
var newAge = age + 5;
console.log(newAge);

//Convert string into integer
var age = prompt("what is your age?");
var num = 4;
var newAge = parseInt(age) + num;
console.log(newAge);
//Convert string into decimal
var newAge = parseFloat(age) + num;
console.log(newAge);
//Convert string to Number
var newAge = Number(age) + num;
console.log(newAge);
console.log(Number("hello"));


//Comparison Operator
var a = 5; var b = 6;
console.log(a == b);
console.log(a != b);
console.log(a <= b);
var c = "5";
console.log(a == c);
console.log(a === c);


//logical Operator   ||OR, &&AND, !NOT, !!NOT
var a = 60;
var b = 50;
var c = a > b && b > 10 && a === 30;
console.log(c);
var d = a < 100 || a < 40;
console.log(d);
var e = console.log(!c);
var f = !(a < 100 || a < 40);
console.log(f);
console.log(!1);
console.log(!0);
var a = 6;
var b = !a;
var c = !!a;
console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);


//Conditions if-else
var age = prompt("what is your age?");
if (age > 60) {
    console.log("Age = " + age)
} else {
    console.log("Not Qualified!")
    console.log("sorry")
}
//Conditions elseif
var score = prompt("Score?");
score = Number(score);
if (score > 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("grade B");
} else if (score > 60) {
    console.log("Grade C");
}
else {
    cosole.log("Failed");
}
//Conditions Nested If
var score = prompt("Score?");
if (score > 80 && score < 100) {
    console.log("grade A")
    if (score > 90) {
        console.log("Reward 100$");
    } else {
        console.log("Good");
    }
} else if (score > 50 && score < 80) {
    console.log("Passed");
} else if (score < 50) {
    console.log("Failed")
} else {
    console.log("Not found")
}
//Conditions with Logical Operators
//Value Conversion to boolean
var name = ""; //if value is (null, NaN, undefined, 0, empty string) than the return will be False and else will be executed
if (name) {
    console.log("Name = " + name)
} else {
    console.log("Hello");
}
//value Conversion to Boolean with && operator
var a1 = 'cat' && 'dog'; // t && t returns "dog"
var a2 = false && 'cat';// f && t returns false
var a3 = 'cat' && false;// t && f returns false
var a4 = ' ' && false;// f && f returns ""
var a5 = 0 && 1; // f && t returns 0
var a6 = 1 && false; // t && f returns false
var a7 = true && {} // t && t returns {}
var a8 = false && {} // f && t returns false
var a9 = 'cat' && (3 === 4); // t && f returns false
var a10 = 'cat' && 0; //t && f returns 0
var a11 = undefined && 'cat';// && t returns undefined

//value Conversion to Boolean with || operator
var a1 = 'cat' || 'dog';// t || t returns "cat"
var a2 = false || 'cat'; // f || t returns "cat"
var a3 = 'cat' || false; // t || f returns "cat"
var a4 = '' || false; // f || f returns false
var a5 = false || ""; // f || f returns ""
var a6 = 0 || 1; // f || t returns 1
var a7 = true || {};// || t returns true
var a8 = false || {}; // f || t returns {}
var a9 = 'cat' || (3 === 4) // t || f returns "cat"
var a10 = undefined || "cat"; //f || t returns "cat"

var a = 6;
var b = 8;
var c = a && b;
console.log(c);
var a = 0;
var b = 8;
var c = a && b;
console.log(c);
var c = true && 0;
console.log(c);
var c = true && null;
console.log(c);
var c = true && null && "cat";
console.log(c);
var c = true || null || "cat";
console.log(c);
var c = "" || 0 || "cat";
console.log(c);
var c = true && {};
console.log(c);


//For Loop
//for (initialization; condition; expression){ code to be executed }

var num = prompt("Enter number");
for (var i = prompt("enter the number"); i <= i && i > 0; i--) {
    console.log(num+" x "+i+" = "+ (num*i)  )
}


//Break 
var num = 9;
for (var i = 4; i <= i && i > 0; i--) {
    console.log(num + " x " + i + " = " + (num * i))
    if (i === 4) {
        break;
    }
}
//Continue
var num = 10;
for (var i = 0; i <= 10; i++) {
    
    if (i === 4) {
        continue;
    } console.log(num + " x " + i + " = " + (num * i))
}

//Task Prime Number
var num = 11;
var isPrime = true;
for (var i = 2; i < num; i++) {
    var result = num % i;
    if (result == 0) {
        console.log("Number is even")
        isPrime = false;
        break;
    }
   }
     if (isPrime = true){
       console.log("number is Prime")
   }
   */


var country = "united kingdom";
var country1 = "";
console.log(country);
for (var i = 0; i < country.length; i++) {
    if (country.charAt(i) === "u") {
        var countryName = country[i].toUpperCase();

       country1 = country1 + countryName + country.slice(i + 1);
    } if (country1.charAt(i) === "k") {
        var char = country1[i].toUpperCase();
        country1 =  countryName + country.slice(1, i) + char + country.slice(i + 1); 
    }
}
console.log(country1);


var country2 = country.replace("u", "U");
var country3 = country2.replace("k", "K");
console.log(country3);
var a = "To be or not to be";
var b = a.replace(/be/g, "Hello");
var c = b.replace(/To/ig, "Ok");
console.log(b);
console.log(c);

/*var score = Math.ceil(0.3456);
var score1 = Math.floor(2.8998);
console.log(score + " and "+ score1);


var randomNumbr = Math.random();
var totalNumbr = (randomNumbr * 6) + 1;
var finalNumbr = Math.floor(totalNumbr);
console.log(finalNumbr);

var num = "371";
var num1 = 0;
var ifNotEqual = true;
for (var i = 0; i < num.length; i++) {
    num1 = num1 + (Number(num[i]) ** 3);
    if (num === num1.toString()) {
        ifNotEqual = false;
        console.log(num + " and " + num1);
        break;
    }
}
if (ifNotEqual) {
    console.log("Not Equal");
}


var d = new Date();
console.log(d);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = d.getDay();
var dayName = days[day];
console.log(dayName);


var doomsDay = new Date("June 30, 2035");
console.log(doomsDay);
var doomsTime = doomsDay.getTime();
console.log(doomsTime);

var d = new Date();
d.setFullYear(2001);
console.log(d);

var a = "to be, or not to be";
var b = a.split(",");
console.log(b);


var c = 22 / 3;
var d = c.toFixed(1);
console.log(d);


var date = new Date("2019/7/3");
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
    date.setFullYear(2030);
console.log(date);

var newDate = new Date();
function date(newDate) {
    
   console.log(newDate);
}
var newdate1 = new Date("Dec 2019 3 7");
var newdate2 = new Date("Dec 2030 3 7");
var newdate = newdate2.getTime() - newdate1.getTime();
var days = newdate / (1000 * 60 * 60 * 24);
console.log(days);

function triangle() {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j <= i; j++) {

            document.write("x");
        }
        document.write("<br/>");
    }
    for (var i = 4; i > 0; i--) {
        for (var j = i; j > 0; j--) {
            document.write("x")
        }
        document.write("<br/>");
    }
}
date(newDate);


triangle();
*/

function add(a, b) {
    var c = a + b;
    console.log(c);
}

add(3, 5);
add("Hello", "John");


function marks(obtainedMarks) {
    
    if (obtainedMarks >= 80) {
        console.log("Grade A");
    } else if (obtainedMarks >= 60) {
        console.log("Grade B");
    } else {
        console.log("Fail");
    } //return obtainedMarks;
}

var result = marks(90);
console.log(result);


function multiply(a, b) {
    return a * b;
}
function add(a, b) {
    //return a + b;
    return (multiply(a, b) + b);
}
//var mul = multiply(2, 4);
//var sum = add(multiply(2, 4), 5) / 5;
//console.log("Multiply = " + mul);
var sum = add(2, 4);
console.log("sum = " + sum);


var x = 0;
switch (x) {
    case 0: console.log("Off");
        break;
    case 1: console.log("On");
        break;
    default: console.log("Wrong number");
        break;
}

var day = 6;
switch (day) {
    case 6:
    case 0:
        console.log("Its weekend");
        break;
    default:
        console.log("No weekend");
        break;
}





















