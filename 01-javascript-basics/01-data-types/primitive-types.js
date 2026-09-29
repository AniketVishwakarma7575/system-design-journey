/*
    ============================================
    PRIMITIVE DATA TYPES IN JAVASCRIPT
    ============================================

    JavaScript has 7 primitive data types:

    1. String
    2. Number
    3. BigInt
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol


    Primitive values:

    - Represent individual values
    - Are immutable
    - Assignment copies the value
*/

























// ============================================
// 1. STRING
// ============================================

const name = "Aniket";

console.log(typeof name); // string


// ============================================
// 2. NUMBER
// ============================================

const age = 25;
console.log(typeof age);   // number

// Special Number values

console.log(10 / 0);       // Infinity
console.log("hello" / 2);  // NaN

console.log(typeof NaN);   // number


// ============================================
// 3. BIGINT
// ============================================

const bigNumber = 9007199254740991000n;

console.log(typeof bigNumber); // bigint


// BigInt and Number cannot normally be mixed

// console.log(10 + 20n); // TypeError


// ============================================
// 4. BOOLEAN
// ============================================

const isLoggedIn = true;
const isAdmin = false;

console.log(typeof isLoggedIn); // boolean


// ============================================
// 5. UNDEFINED
// ============================================

let city;

console.log(city);        // undefined
console.log(typeof city); // undefined


// ============================================
// 6. NULL
// ============================================

const user = null;

console.log(user);        // null
console.log(typeof user); // object


/*
    IMPORTANT:

    null is a primitive value.

    typeof null returns "object"
    because of a historical JavaScript behavior.
*/


// ============================================
// 7. SYMBOL
// ============================================

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false

console.log(typeof id1); // symbol


// ============================================
// PRIMITIVE ASSIGNMENT
// ============================================

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


/*
    b receives a copy of the primitive value.

    Changing b does not affect a.
*/


// ============================================
// PRIMITIVE VALUES ARE IMMUTABLE
// ============================================

let language = "JavaScript";

language.toUpperCase();

console.log(language); // JavaScript

/*
    toUpperCase() creates a new string.
    It does not modify the original string.
*/


// ============================================
// TRUTHY / FALSY
// ============================================

console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false

console.log(Boolean(100));     // true
console.log(Boolean(0));       // false

console.log(Boolean([]));      // true
console.log(Boolean({}));      // true