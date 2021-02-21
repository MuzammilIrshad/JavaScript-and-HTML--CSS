
const range = (val1, val2, val3) => {
    var chars = 'abcdefghijklmnopqrstvuwxyz';
    var newArray = [];
    console.log(typeof (val1));
    if (typeof (val1) === 'string' && typeof (val2) === 'string') {
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


var cylinder = function (height, diameter) {
    this.height = height;
    console.log(height);
    this.diameter = diameter;
    console.log(diameter);
};

cylinder.prototype.volume = function () {
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
        first: fname,
        last: lname,
        Age: age,
        describe: function () {
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
console.log(nums100.sort((a, b) => a - b));

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
    var data1 = await enroll({ country: "America" });
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
    { post: "Two", detail: "Post number 2" },
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