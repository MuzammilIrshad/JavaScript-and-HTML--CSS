// JavaScript source code
//ARRAYS
var foods = ["Pizza", "Burger", "Sandwich", 300, 500, true];
var a = foods[0];
console.log(a); //Pizza
console.log(foods[1]);
console.log(foods[4]);
console.log(foods); //returns Complete Array
console.log(foods[10]);//undefined

var sports = [];
console.log(sports);
sports[0] = "Cricket";
sports[1] = "Football";
sports[2] = "Basketball";
console.log(sports);
sports[5] = "Boxing";
console.log(sports);
console.log(sports[3]);//undefined
sports[1] = "Hockey";
console.log(sports);

console.log(sports.length);

var foods = [];
foods.push(prompt("Enter the Food"));
foods.push("Pizza");
foods.push(23);
foods.push("Snacks", "Chicken");
console.log(foods);
console.log(foods.length)
//Stack  (Last in First Out)
var a1 = foods.pop();
console.log(foods);
console.log(a1);
foods.push("haleem");
console.log(foods);
//Queue (First in First Out)
var num = [1, 2, 3, 4]
num.push(10);
num.push(5);
console.log(num);
var a = num.shift();
console.log(num);
console.log(num.length);
console.log(a);

//UnShift Function
console.log(num);
num.unshift(100);
console.log(num);


//ARRAY with LOOPS
var names = ["Muzaamil", "Hiraa", "Yasir"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
var names = ["Muzamil", "Hiraa", "Yasir khan"];
for (var i = 0; i < names.length; i++) {
    names = [1, 2, 3,];
}
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

var arr = [10, 9, 20, 30];
var input = parseInt(prompt("Enter number"));
var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
        console.log("Found" + i);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Not found");
}
//Splice and Slice function
var foods = ["Tokyo", "Quetta", "NewYork"];
console.log(foods);
foods.splice(1, 0, "Karachi");
console.log(foods);
var a = foods.splice(2, 1, "Murree");
console.log(foods);
console.log(a);
var city = foods.slice(0, 2);
console.log(city);

var characters = ["Muzammil", "Sher", "Akhtar", "Hiraa",];
characters.splice(1, 0, "Jameel");
console.log(characters);
characters.splice(1, 1);
console.log(characters);


//Reverse and Sort Function
characters.reverse();
console.log(characters);
characters.sort();
console.log(characters);

//IndexOf and lastIndexOf Function
var name = characters.indexOf("Muzammil");
console.log(name);
characters.push("Muzammil");
console.log(characters);
var name = characters.lastIndexOf("Muzammil");
console.log(name);


//Arrays For Loop;
//initialization, test, increment/decrement
var names = ["Muzammil ", "Akhtar ", "Haleem ", "Hira ", "Sher ", "Sheryar ", "Hasnad "];
for (var i = 0; i < 5; i++) {
    for (j = 0; j <= i; j++) {
        names.sort();
        document.write(names[i]);
    }
    document.write("<br/>");
}

//Objects

var student1 = { "name": "Samiullah", "age": 10 };
var student2 = { "name": "Muzammil", "age": 20 };
var students = [student1, student2];
console.log(student1);
console.log(student2);
console.log(students);
//adding objects at the end of array
var student3 = { "name": "Jameel", "age": 40 };
students.push( student3 );
console.log(students);
students.push({ "name": "Naisr", "age": 50 });
console.log(students);
console.log(students[1]);
//adding properties in objects
student1.class = 5;
console.log(student1);
student2["class"] = 10;
console.log(student2);
console.log(students);
students[2].age = 12;
students[3]["age"] = 11;
console.log(students);
//for...in loops
console.log(students.length);  //4
for (var type in student1) {
    // console.log(type);
    //console.log(student1[type]);
    console.log("In ", type, " we have ", student1[type]);
}
for (var prop in students) {
   // console.log(prop);
    //console.log(student1[prop]);
    console.log("In ", prop, " we have ", students[prop]);
}

//forEach 
var names = ["Hira", "Muzamil", "Sher", "Akhtar",];
names.forEach(function (items, index, array) {
    console.log(index, items, array);
})
names.forEach(function (name, index, array) {
    if (name === "Muzamil") {
        name = name.toUpperCase();
    } else {
        name = name.toLowerCase();
    } console.log(index, name);
})


//Nested Loops with Arrays and Objects
var nums = [[1, 2, 3, 4], [2, 4, 6], [1, 3]];
for (i = 0; i < nums.length; i++) {
    var numItems = nums[i].length;
    console.log(i, numItems);
    for (j = 0; j < numItems; j++) {
        console.log(nums[i][j]);
    }
}

var degrees = { "Subjects": [{ name: "BBA", years: 4 }, { name: "BPA", years: 4 }, { name: "Economics", years: 2 }] };
var deg = degrees.Subjects;
console.log(deg.length);
console.log(degrees.Subjects.length);
for (i = 0; i < deg.length; i++) {
    console.log(deg[i]);
    console.log(deg[i].name);
    console.log(deg[i]["years"]);
    for (var types in deg[i]) {
        console.log(types, deg[i][types]);
    }
}

//Map method
var cities = ["Karachi", "Lahore", "Quetta", "Delhi"];
var nameOfCities = cities.map(function (items, index , array) {

    return items.length;
});
console.log(nameOfCities);

//Array Concatination
//for()
//(for in)
//for Each()
var a = [1, 2, 3];
var b = [4, 5, 5, 1];
var c = a.concat(b);
console.log(c);
var d = [].concat(a, b, c);
console.log(d);


//String spilt and array join methods
//converting string to arrays
var name = "My name is Muzammil Irshad";
var words = name.split(" ").sort();
console.log(words);
var words1 = name.split("name");
console.log(words1);
//Converting arrays into strings
var words2 = words.join("-");
console.log(words2);
var words3 = name.split(" ").join(" ");
console.log(words3);


//Array every()
//checks EVERY element to see if it returns true
var nums = [1, 2, 3, 4, 5, 6];
var greaterThan4 = nums.every(function (number) {
    console.log(number);
    return number > 3;
});
console.log(greaterThan4);

//Includes method
//checks if array containes the specific item
let alphabets = ["a", "b", "c", "d"];
let check = alphabets.includes("c");
console.log(check);
let check1 = alphabets.includes("c", 3);
console.log(check1);


//Filter method()
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let smallerThan5 = number.filter(function (nums) {
    return nums < 5;
})
console.log(smallerThan5);

let largerThan5 = number.filter(function (nums) {
    return nums > 5;
})
console.log(largerThan5);

let odd = number.filter(function (nums) {
    //var a = nums%2;
    return nums & 1;
})
console.log(odd);

let even = number.filter(function (nums) {
    var a = nums % 2;
    if (a === 0) {
        return nums;
    }
})
console.log(even);



//Reduce method
//reduces all the values of an array to a single value
//Uses a callBack function just like map, forEach, filter
let numbers = [2, 1, 3, 5];
let sum = numbers.reduce(function (passedIn, item) {
    console.log(passedIn, item);
    return passedIn + item;
}, 0);
console.log(sum);

let movies = ["alien", "Bodyguard", "Hello", "xxxx", "zzzzz"];
let first = movies.reduce(function (current, item) {
    console.log(current, item);
    // return (current > item) ? current : item;
    if (current > item) {
        return current;
    } else {
        return item;
    }
}, "religion");
 
console.log(first);



//Chaining array methods and using Arrow Function
















