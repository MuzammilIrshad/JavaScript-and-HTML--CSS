// JavaScript source code
var date = new Date();
var day = date.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = days[day];
console.log("Today is : " + today);
var hours = date.getHours();
var mins = date.getMinutes();
var secs = date.getSeconds();
console.log(hours + " PM : " + mins + " : " + secs);

function leapYear(year) {
    if ((year % 4 === 0)) {
        return "Year is a leap year";
    } else {
        return "Not a leap year";
    }
}
console.log(leapYear(2000));


function isSunday(year) {
    var d = new Date(year, 0, 1);
    //console.log(d);
    var sun = false;
    for (var i = 2014; i <= 2050; i++) {
        var day = d.getDay();
        if (day === 0) {
            sun = true;
            console.log("Its Sunday");
              break;
        } 
    }
    if (sun === false) {
        console.log("No sunday");
    }

}
isSunday(2023);



function matchNum(guessNum) {

    var ranNum = Math.floor(Math.random() * 10);
    //console.log(ranNum);
    if (ranNum === guessNum) {
        console.log("Matched");
    } else {
        console.log("Not matched");
    }

}
matchNum(4);

function chrisms() {
    var date = new Date();
    var chDate = new Date("Dec 25, 2020");
    var daysLeft = (chDate.getTime() - date.getTime())/(1000*60*60*24);
    console.log(daysLeft);
}
chrisms();

function temp(inp) {
    var c = inp; f = inp;
    c = ((inp - 32) / 9) * 5;
    f = ((inp * 9) / 5) + 32;
    console.log(c + " is " + f);
}
temp(140);

function sum(a, b) {
    var add = a + b;
    if (a === b) {
        return add * 3;
    } else {
        return add;
    }
}
console.log(sum(2, 2));


var num = 20;
if (num < 19) {
    console.log(19 - num);
} else if (num > 19) {
    console.log((19 - num) * 3);
}

var num1 = 20; num2 = 30;
if ((num1 || num2) === 50 || (num1 + num2) === 50) {
    console.log(true);
}


var num = 381;
if ((num >= 80 && num <= 100) || (num <= 400 && num >= 380)) {
    console.log(true);
}


var num1 = -1;
var num2 = -2;
if (num1 < 0 && num2 > 0) {
    console.log("Negative" + num1)
} else if (num2 < 0 && num1 > 0) {
    console.log("Negative " + num2);
} else if (num1 > 0 && num2 > 0) {
    console.log("Both are positive")
} else {
    console.log("Both are negative");
}


var word = "hython";
if (word[0] === "P" && word[1] === "y") {
    console.log(word);
} else {
    console.log("Py" + word);
}

var word = "Hellow";
var word1 = "F" + word.slice(1, word.length);
console.log(word1);



var word = "world";
word = word[word.length - 1] + word.slice(0, word.length);
word = word[0] + word.slice(2, word.length - 1) + word[1];
console.log("world = " + word);


var word;
word = word + word[0];
console.log(word);


var num = 30;
if ((num % 3) === 0) {
    console.log("Multiple of 3");
} else if ((num % 7) === 0) {
    console.log("Multiple of 7");
}

var word = "hello world";
var word1 = word.slice(word.length - 3, word.length);
var word2 = word1 + word;
console.log(word + " = " + word2);


var word = "JavaScript";
if (word.slice(0, 4) === "Java") {
    console.log(true);
} else {
    console.log(false);
}

var num1 = 60;
var num2 = 10;
if ((num1 && num2) > 50 && (num1 && num2) < 90) {
    console.log(true);
} else {
    console.log(false);
}



var word;
if (word.slice(4, word.length) === "Script") {
    console.log(word.slice(0, 4));
} else {
    console.log(word);
}

var num1; num2;
if ((num1 > num2) && num1 <= 100) {
    console.log(num1);
} else {
    console.log(num2);
}

var word = "JataScript";
var word1 = word.slice(1, 4);
var isPresent = false;
for (var i = 0; i < word1.length; i++) {
    if (word[i] === "v") {
        isPresent = true;
        console.log("Present");
        break;
    }
} if (isPresent === false) {
    console.log("Not Present");
}


var num1 = String(66);
var num2 = String(26);
//console.log(num1[1]);
if (num1[1] === num2[1]) {
    console.log(true);
} else {
    console.log(false);
}


var word = "she"
if (word.length <= 3) {
    console.log(word.toUpperCase());
} else {
    console.log("Long word");
}

var marks = 35;
if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
} else {
    console.log("Grade A-");
}


var num1 = 30;
var num2 = 40;
var sum = num1 + num2;
if (sum > 50 && sum < 80) {
    console.log(65);
} else {
    console.log(80);
}

var word = "hello world my name is muzammil";
var word1 = word.split(" ");
var word2 = "";
for (var i = 0; i < word1.length; i++) {
    word2 = word2 + " " + word1[i][0].toUpperCase() + word1[i].slice(1, word1[i].length);
}

console.log(word2);



var num = 230;
var hours = Math.floor(num / 60);
var mins = num % 60;
console.log(hours+ " : "+ mins);


var word = " Pakistan";
var word = word.split("").sort().join("");
console.log(word);



var word = "aeiou";
var vowel = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] === ("a") || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
        vowel = vowel + 1;
    }
}

console.log(vowel);


var word = "Pakistan";
var Ps = 0;
var Ts = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] === "P") {
        Ps = Ps + 1;
    }
}
for (var i = 0; i < word.length; i++) {
    if (word[i] === "t") {
        Ts = Ts + 1;
    }
}
console.log("P = " + Ps + " T = " + Ts);

var word = "Hello";
var copies = word.repeat(5);
var copies1 = word.slice(word.length - 3, word.length).repeat(3);
console.log(copies);
console.log(copies1);


var word = "Bangladesh";
var word1 = (word.length) / 2;
var word2 = word.slice(0, word1 + 1);
var word3 = " ";
for (var i = 0; i < word2.length; i++) {
    var result = i % 2;
    if (result === 0) {
        word3 = word3 + word[i];
    }
}
console.log(word3);


var word = "Pakistan";
var word1 = word.slice(1, word.length - 1);
console.log(word1);


var word1 = "hello";
var word2 = "world";
var word1 = word1.slice(1, word1.length);
var word2 = word2.slice(1, word2.length);
var word = word1 +" "+ word2;
console.log(word);


var word = "United States";
var word1 = word.slice(word.length - 3, word.length);
var word = word1 + word;
console.log(word);


var word = "Pakistan";
var word1 = (word.length) / 2;
var word2 = word.slice(word1 - 1, word1 + 3);
console.log(word2);


var word1 = "web";
var word2 = "development";
var word3 = word1 + " " + word2;
var wor1 = word1.length;
var wor2 = word2.length;
if (wor1 === wor2) {
    console.log(word3);
} else {
    var word4 = word1 + " " + word2.slice(0, 3);
    console.log(word4);
}



var word = "JavaScript";
var word1 = "Script";
if (word.slice(word.length - 6, word.length) === word1) {
    console.log(true);
} else {
    console.log(false);
}


var word = "pope";
if ((word[0] && word[word.length - 1]) === "p") {
    console.log(word)
} else {
    console.log(false);
}


var word1 = word.charAt(0) + word.charAt(word.length - 1);
console.log(word1);


var nums = [2, 2, 3, 2];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
console.log(sum);

if (nums[0] === 1 || nums[nums.length - 1] === 1) {

    console.log(true);
} else {
    console.log(false);
}


if (nums[0] === nums[nums.length - 1]) {
    console.log(true);
}


var nums = [2, 4, 1, 3];
var nums = nums.sort((a, b) => a - b);
console.log(nums);



var arr1 = [2, 4, 6];
var arr2 = [1, 3, 5];
var arr3 = [arr1[1], arr2[1]];
console.log(arr3);
var arr4 = [arr1[0], arr1[arr1.length-1]];
console.log(arr4);
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] === 1 || arr2[i] === 3) {
        console.log(true);
    }
}

var arr = [20, 30, 40, 20, 30, 40];
var numrep = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 30 || arr[i] === 40) {
        var numrep = numrep + 1;
    }
}
console.log(numrep);


[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
console.log(arr);

var arr = [2, 4, 6, 8];
[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
console.log(arr);


var arr = ["Pakistan", "Canada", "China", "Bangladesh", "United states Of America"].sort((b, a) => b.length - a.length);
console.log(arr[arr.length-1]);


var arr = [1, 2, 3, 4, 5, 6];
var arr1 = 0;
var arr2 = 0;

for (var i = 0; i < arr.length; i++) {
    var result = i % 2;
    if (result !== 0) {
         arr1 = arr1 + arr[i];
    }
}
for (var j = 0; j < arr.length; j++) {
    var result = j % 2;
    if (result === 0) {
         arr2 = arr2 + arr[j];
    }
}
var arr3 = [arr1, arr2];
console.log(arr3);



var nums = [10, 25, 40, 30];
var diff = nums[1] - nums[0];
console.log(diff);

var nums = [10, 25, 40, 30];
var diff = "";
for (var i = 0; i < nums.length; i++) {
    diff = diff + (nums[i + 1] - nums[i]) + " ";
}
diff = diff.split(" ").sort((a, b) => a - b);
diff.pop();
console.log(diff[diff.length-1]);



/*var num = 20;
var numArr = [10, 20, 30];
var arr = [];
for (var i = 0; i < numArr.length; i++) {
    arr = arr + numArr[i].
}

var num = [2, 4, 6, 8, 2, 6, 2];
var arrangeNum = num.sort((a, b) => a - b);
console.log(arrangeNum);
*/


var num = [2, 4, 6, 8, 15];
var sum = 0;
for (var i = 0; i < num.length-1; i++) {
    sum = sum + (num[i + 1] - num[i]);
}
console.log(sum);

/*
var x = "he";
var x1 = x.length;
console.log(x1);
switch (x1) {
    case 3 || 2 || 1 :
        console.log(x.toUpperCase(x[0]));
        break;
    default:
        console.log(x.toUpperCase());
        break;
}



var num = [2, 4, 6, 9];
var num1 = [1, 3, 5, 9];

console.log(match);


var num = [2, 3, 5, 6, 9];
var n = 4;
for (var i = 0; i < num.length - 1; i++) {
    //console.log(num[i + 1]);
    var diff = num[i] - num[i + 1];
    console.log(diff);
    if (n diff) {
        console.log(num[i] + "-" + num[i + 1] + " is almost equal to : " + diff);
        break;
    }
}*/



var num = [2, 4, 16];
var a = [];
for (var i = 0; i < num.length - 1; i++) {
    for (var j = i + 1; j < num.length; j++) {
        var result = num[j] % num[i];
        if (result === 0) {
             a = a + "(" + num[i] + ", " + num[j] + ")";
            //console.log(a);
        }
    }
}
console.log(a);


var num = 10;
var pNum = '';
for (var i = 0; i < num; i++) {
    var result = i % 2;
    if (result !== 0) {
        pNum = pNum + i + ",";
    }
}
console.log(pNum);

var str = "hello world.";
if (str[0] === "H" && str[str.length - 1] === ".") {
    console.log("Correct sentence");
} else {
    console.log("In correct");
}

/*var numArr = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
for (var i = 1; i <= numArr.length; i++) {
    for (var j = 0; j < numArr.length; j++) {

    }
}
*/



var a = "20";
var b = "30";
console.log(a.length);
if (a[1] === b[1]) {
    console.log("Same");
} else {
    console.log("Not same");
}


function numNatural(limit) {
    if (limit === 0) {
        return 0;
    }
    else {
        return limit + numNatural(limit - 1);
    }
}
var sumNatural = numNatural(5);
console.log(sumNatural);


var str = "Hello";
var str1 = str.replace("Hello", "world");
console.log(str1);




var arr = {name : "Muzamil", age : 30,}
arr.lastName = "Irshad";
console.log(arr);



var str = "Muzammil".toLowerCase();
var letter = "m"
var noOfOccur = 0;
for (var i = 0; i < str.length; i++) {
    if (letter !== str[i]) {
        continue;
    } else {
        noOfOccur = noOfOccur + 1;
    }
}
console.log(noOfOccur);
/*
function obj() {
    name: "Muzammil";
    age: 30;
    section: function class1() {
        Institute: "IMS";
        Department: "BBA"
        Semester: "4th semester";
    }
}
console.log(obj(class1.Institute));


var arr = { name: "Muzammil", lastName: "Irshad" }
var str = "";
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < 1; j++) {
        
    }
    str = str + arr[i][j];
}

console.log(str);
*/

var num = [1, 2, 4, 4];
var num1 = [1, 2, 3, 4];
for (var i = 0, j = 0; i < num.length; i++, j++) {
    if (num[i] === num1[j]) {
        continue;
    } else {
        console.log("Not equal at :" + i);
        break;
    }
}

/*var arr = [1, 2, 3, 4, 5];
var ranNum = arr(Math.floor(Math.random() * arr.length));
    console.log(ranNum);

*/

var num = 12.45;
num = String(num);
console.log(num[2]);

var num = 6;
var a = 0; b = 1;
var nextItem;
var arr = [""]
for (var i = 0; i < num; i++) {
   // console.log(a);
    arr = arr + a;
    nextItem = a + b;
    a = b;
    b = nextItem;
}

console.log(arr);

var num = 1637;
var num1 = 1600;
var cubes = 0;
var isArmStrong = false;
for (var i = num1; i < num; i++) {
    
    var n = String(i);
    var result = 0;
    //console.log(n);
    for (var j = 0; j < n.length; j++) {
      //  console.log(j);
        var res = Number(n[j]) ** n.length;
       // console.log(n.length);
        // console.log(result);
        result = result + res;
        
    }
   // console.log(result);
    cubes = result;
    if (Number(n) === cubes) {
        isArmStrong = true;
        console.log("Armstrong Number" + cubes);
        break;
    } 
}
if (isArmStrong === false) {
    console.log("NOT");
}


var num1 = String(21);
var num2 = String(31);
//console.log(num1[num1.length - 1]);
if (num1[num1.length - 1] === num2[num2.length - 1]) {
    console.log("Same");
}


function fabronica(n) {
    if (n < 2) {
        return n;
    } else {
        return fabronica(n - 1) + fabronica(n - 2);
    }
}
var nterms = 5;
var series = "";
for (var i = 0; i < nterms; i++) {
    if (i >= 0) {
        series = series + fabronica(i);
    }
}
console.log(series);


var num = 5;
var bin = num.toString(2);
console.log(bin);

var  student1 = {
    name: "Muzammil",
    age: 40,
    greet : function() {
        console.log("Hello everyone");
    },
    hobbies: ["Reading", "Writing"],
    score: {
        Math: 90,
        Urdu : 20
    },

}
delete student1.score.Math;
delete student1.greet;
console.log(student1);
var hasKey = 'name' in student1;

var hasKey1 = student1.hasOwnProperty('greet');
if (hasKey && hasKey1) {
    console.log("Key exits");
} else {
    console.log("Doesn't exist");
}
for (var key in student1) {
    var value = student1[key];
    //console.log(value);
    console.log(key + " : " + value);
    
}

var score = { Math: 40 };
var assign = Object.assign(score, student1);
console.log(assign);
var count = 0;
for (var keys in assign) {
    ++count;
    console.log(count);
}
console.log(Object.keys(assign).length);

var str = `the quick brown 
fox jumps over the moving car.`;
console.log(str);
var str = "  Hello world  ";
var subStr = "Hell";
console.log(str.trim());
console.log(str.includes(subStr));


var str = "Muzammil Irshad";
var encode = window.btoa(str);
console.log(encode);
var decode = window.atob(encode);
console.log(decode);


/*var d1 = new Date().getTime();
var d2 = new Date("Dec 12, 2020, 9:25:00").getTime();
console.log(d2);
var x = setInterval(function (x) {

    var timeLeft = d2 - d1;
    console.log(timeLeft);
    if (timeLeft > 0) {
       // clearInterval(x);
        //document.write("countdown finished");
        var days = Math.floor((timeLeft / (24 * 60 * 60 * 1000)));
        var hours = Math.floor((timeLeft / (60 * 60 * 1000)) % 24);
        var mins = Math.floor((timeLeft / (60 * 1000)) % 60);
        var secs = Math.floor((timeLeft / (1000)) % 60);

        document.write(days + "d : " + hours + "h : " + mins + "m : " + secs + "s : ");
    }
    
    
}, 2000)   

*/

var a1 = 0;
var a2 = 1;
var series = "";
for (var i = 0; i < 6; i++) {
    series = series + a1;
    var nterms = a1 + a2;
    a1 = a2;
    a2 = nterms;
    }
console.log(series);


var num = 157;
var num1 = 150;
var sum = 0;
for (var i = num1; i < num; i++) {
    var n = String(i);
    var res = 0;
    for (var j = 0; j < n.length; j++) {
        var result = Number(n[j]) ** n.length;
        res = res + result;
       // console.log(result);
    }
   // console.log(res);
        if (res === Number(n)) {
        console.log("Same: "+ n);
    }
}

function add(nums) {
    if (nums < 0) {
        return 0;
    } else {
        return nums + add(nums - 1);
    }
}
console.log(add(5));

function fabonica(num) {
    if (num < 2) {
        return 1;
    }
    else {
        return fabonica(num - 1) + fabonica(num - 2);
    }
}
var nterms = 5;
var series = "";
if (nterms < 0) {
    console.log("Enter Positive NUmber");
} else {
    for (var i = 0; i <= nterms; i++) {
        series = series+ fabonica(i);
    }
}
console.log(series);

var a = 12;
var b = console.log(a.toString(12));

var bio = {
    name: "Muzammil", age: 30, score: function () { Math: 40; urdu: 50 }, school: ["University", "IMS"], region: { city: "Quetta", District: "Quetta" }
};
delete bio.score;
delete bio['age'];
console.log(bio);
var iskey = bio.hasOwnProperty('score');
console.log(iskey);
var count = 0; 
for (var key in bio) {
    console.log(key);
    count = count + 1;
}
console.log(count);
bio.age = 90;
console.log(bio);

/*var age = { age: 30 };
var newObj = new Object(age, bio);
console.log(newObj);

var str = "JavaScript";
var str1 = str.startsWith("Java");
console.log(str1);
var str2 = str.endsWith("Script");
console.log(str2);


var countDown = new Date("Dec 15, 2020 7:30:00").getTime();
console.log(countDown);

var arr = ["Muzamil", "Irshad", "Jameel"];
console.log(arr.includes("Muzamil"));

var addObj = function (arr, obj) {
    arr.push(obj);
    console.log(arr);

    var index = arr.length;
     arr.splice(index, 0, obj);
    console.log(arr);
    console.log(Array.isArray(arr)); 
}
addObj([1, 2, 3], { name: "Muzammil", age: 40 });

function dupEle(arr) {
    uniqueArr = [];
    for (var i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
var arr = [3, 5, 7, 5, 3, 2];
dupEle(arr);
*/

var i = 1;
while (i < 6) {
   
    var j = 0;
    while (j < i) {
        document.write("x");
        j++;
    }
    document.write("<br/>");
    i++;
}

var i = 1;
do {
    i++;
    var j = 6;
    do {
        //var j = 6;
        //j--;
        document.write("x");
        j--;

    } while (j > i);
    document.write("<br/>");
} while (i < 5);

document.write("<br/>");
function nums3(num1, num2, num3 = 40) {
    document.write(num1, num2, num3);
}
nums3(10, 20, 30);

document.write("<br/>");


function nums4(a, b, c = null) {
    document.write(a + " " + b + " " + c + " ");
}
nums4(10);

function show(a, ...args) {
    console.log(args);
    console.log(args[args.length - 1]);
}
show(3,10, 30, "Hello");

var name1 = ["Muzammil", "Irshad", "Saim", "Yasir", ["Ahmed", "Ali"]]
name1.forEach(function (value, index, arr) {
    console.log(value + " " + index);
})

for (var value of name1) {
    console.log(value);
}

var marks = [[], []];
marks[0][0] = "Yasir";
marks[0][1] = 40;
marks[1][0] = "Ali";
marks[1][1] = 50;
console.log(marks);
for (i = 0; i < marks.length; i++) {
    var k = "";
    for (j = 0; j < marks[i].length; j++) {
       k = k + (marks[i][j]) + " ";
    }
    console.log(k);
}

var z = function (a) {
    return function (b) {
        return a + b;
    };
};
var x = z(5);
//console.log(x(8));
var c = Number(x(8));
console.log(c);
function mz(myfun) {
    var a = myfun();
    return a * 2;
}
console.log(mz(function (d = 5) {
   // console.log(c + 2);
    return c + 2 + d;
}));














