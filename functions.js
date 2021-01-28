// JavaScript source code
function tellFortune(children, partner, location, job) {
    console.log("You will be a Muzammil " + location + " , and married to " + partner + " with " + children + " kids");
}

tellFortune(4, "Hira", "Quetta");


function calculateDogAge(humanAge) {
    dogAge = humanAge * 7;
    console.log("Your doggie is " + dogAge + " years old in dog years");
}
calculateDogAge(5);

function calculateSupply(age, amountPerDay) {
    var ageInDays = age * 365;
    var amountWholeLife = ageInDays * amountPerDay;
    console.log("You will need " + Math.round(amountWholeLife) + " to last you until the ripe old age of " + age);
}
calculateSupply(10, 200);
calculateSupply(15, 100.30);


function calCircum(radius) {
    var circumferene = 2 * 3.14 * radius;

    console.log("The circumference is " + Math.round(circumferene));
}
function calArea(radius) {
    var area = 3.14 * radius ** 2;
    console.log("the area is " + area);
}

calArea(10);
calCircum(10);


function reverseNum(numbr) {
    var reverse = String(numbr).split("").reverse().join("");
   // console.log(reverse);
    console.log(reverse + " is the reverse of " + numbr);
  
}
reverseNum(23456);

function palindrom(passedstr) {
    if (String(passedstr) === String(passedstr).split("").reverse().join("")) {
        console.log("Yes it is Palindrom " + String(passedstr).split("").reverse().join(""))
    } else {
        console.log("It is not palindrom");
    }
}

palindrom("nursesrun");


function comb(word) {
    for (var i = 0; i < word.length; i++) {
        for (var j = i; j < word.length; j++) {
            if (word[i] === word[j]) {
                console.log(word[i]);
            } else {
                console.log(word[i] + word[j]);
            }
        }
  
    }
}

comb("dog");


function alphaOrder(passedStr) {
    var order = String(passedStr);
    console.log(order);
    console.log(order + " is the alphabetical order of " + passedStr);
}

alphaOrder("Hello");



function string(sentence) {
    var arr1 = String(sentence).split(" ");
   // console.log(arr1);
    var arr3 = " "; 
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i][0].toUpperCase();
        arr3 = arr3 + " "+ arr2 + arr1[i].slice(1, arr1[i].length);

        //console.log(arr2);
    }
    console.log(arr3);
}
string("this is the tree");


function words(theWord) {
    var wor = String(theWord).split(" ");
    var wor1 = wor[0].length;
    var wor2 = wor[1].length;
    if (wor1 >= wor2) {
        console.log(wor[0]);
    } else {
        console.log(wor[1]);
    }
}

words("development web");


function word(letters) {
    letters = String(letters);
    // console.log(letters);
    var alpha = letters.length;
    //console.log(alpha);
    var countVowels = 0;
    for (var i = 0; i < alpha; i++) {
        if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
       
            countVowels = countVowels + 1;
          }
       // console.log(countVowels);
    }
    console.log(countVowels);
}

word("Hello world my name is Muzammil");


function number(num) {
    num = Number(num);
    var isPrime = true;
    for (var i = 2; i < num; i++) {
        var result = num % i;
        if (result === 0) {
            isPrime = false;
            console.log("The number is even");
            break;
        }
    } if (isPrime) {
        console.log("the number is prime");
    }
}

number(10);


function type(input) {
    if (input === Number(input)) {
        return "Number";
    } else if (input === Object(input)) {
        return "Object";
    } else if (input === true || input === false) {
        return "Boolean";
    } else if (input === String(input)) {
        return "string";
    }
}
var typeOf = type({"name": "value"});
console.log(typeOf);


function numList(nums) {
    //nums = String(nums).split(",")
    // console.log(nums);
    var numsArr = nums.sort((a, b) => a - b);
   console.log(numsArr);
    var nums2 = " ";
    for (var i = 0; i < numsArr.length; i++) {
        if ((Number(numsArr[i]) > Number(numsArr[0])) && (Number(numsArr[i]) < Number(numsArr[2]))) {
           // console.log(numsArr[i]);
           nums2 = nums2 + numsArr[i];
        } 
    }
    for (var j = 0; j < numsArr.length; j++) {
        if (Number(numsArr[j]) < Number(numsArr[numsArr.length-1]) && Number(numsArr[j]) > Number(numsArr[numsArr.length - 3])) {
            //console.log(numsArr[j]);
             nums2 = nums2 + ", "+ numsArr[j];
        }
    }      
   console.log(nums2);
    
}
numList([10, 32, 27, -6, -4]);



function perNum(number) {
    number = Number(number);
   // console.log(number);
    var divisorsExcItself = 0;
    var diviIncItself = 0;
    for (var i = 1; i < number; i++) {
        var result = number % i;
        if (result === 0) {
            divisorsExcItself = divisorsExcItself + i;
        }
    } //console.log(divisorsExcItself);
    for (var j = 1; j <= number; j++) {
        var res = number % j;
        if (res === 0) {
            diviIncItself = diviIncItself + j;
           // console.log(diviIncItself);
        }
    } //console.log(diviIncItself);
    if (divisorsExcItself === number && (diviIncItself / 2) === number) {
        console.log("Perfect Number = " + number);
    } else {
        console.log("Not a perfect number");
    }
}
  perNum(8128);



function factors(int) {
    var fac = " "
    for (var i = 0; i <= int; i++) {
        var res = int % i;
        if (res === 0) {
            fac = fac + " ," + i;
        }
    }
    console.log(fac);
    }
factors(6);


function values(b, n) {

    var compute = b ** n;
    console.log(compute);

}
values(parseInt(prompt("Enter value b")), 2);



function code(limit) {
    var result = " ";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var charslength = chars.length;
    for (var i = 0; i < limit; i++) {
        result = result + chars.charAt(Math.floor(Math.random() * charslength));
    }
    console.log(result);
}
code(5);


function occur(str, letter) {
    var noOfOccurs = 0;
    for (var i = 0; i < letter.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (letter === str[j]) {
                noOfOccurs = noOfOccurs + 1;
            }
        }
    }
    console.log(noOfOccurs);

}
occur("announce", "n")

function char(word) {
    var wor = String(word);
    var nonRepChar = " ";
    for (var i = 0; i < wor.length; i++) {
        if (wor.indexOf(wor.charAt(i)) === wor.lastIndexOf(wor.charAt(i))) {
           // nonRepChar = wor.charAt(wor[i]);
            console.log(wor[i]);
            break;
        }

        
        // console.log(nonRepChar);
        //console.log(arr[0]);
    }
}
char ("ppaacckdd")



function bigCountryName(list) {
    var arr = list.sort((list1, list2)=>list1.length - list2.length)

    
    /*for (var i = 0; i < list.length; i++) {
        var listNum = list[i].length;
        arr = arr + listNum+",";
    }
    // console.log(arr);
    arr = arr.split(",");*/
    console.log(arr[arr.length-1]);
     
}
bigCountryName(["Pakistan", "India", "China", "Bangladesh", "United states of America", "Iran" ])



var mul = multi(2);
console.log("MUL " + mul);
function multi(a) {
    return a * 3;
}

//var c = sum(5);
//console.log(c);
var sum = function add(a) {
    return a + 10;
};

//Passed value Or Reference Function
var c = { age:10, name: "Muzammil" };
function multiply(a) {
    return a.age = 43;
}
console.log(c.age);
console.log(multiply(c));

var b = [2, 3, 4]
function mult(a) {
    return a[0] = 43;
}
console.log(b);
console.log(mult(b));


//Recursive function
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// 4 * factorial (4-1);    4 * 6
// 3 * factorial (3-1);    3 * 2
// 2 * factorial (1-1);    2 * 1



console.log(factorial(4));





































