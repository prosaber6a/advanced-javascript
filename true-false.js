
/**
 * ********False**********
 * 0
 * ""
 * undefined
 * null
 * NaN
 * false
 * ********True**********
 * '0'
 * " "
 * []   // empty array
 * {}   // empty object
 */


const age = 0; 
if (age) {
    console.log("age is true");
} else {
    console.log("age is false");
}

const name = "";

if (name) {
    console.log("name is true");
} else {
    console.log("name is false");
}

let father;
if (father) {
    console.log("father is true");
} else {
    console.log("father is false");
}

let mother = null;
if (mother) {
    console.log("mother is true");
} else {
    console.log("mother is false");
}

let grandpa = NaN;
if (grandpa) {
    console.log("grandpa is true");
} else {
    console.log("grandpa is false");
}


let arr = [];
if (arr) {
    console.log("arr is true");
} else {
    console.log("arr is false");
}


let obj = {};
if (obj) {
    console.log("obj is true");
} else {
    console.log("obj is false");
}
