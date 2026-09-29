/*
    Primitive data types in JavaScript represent simple,
    individual values.

    JavaScript has 7 primitive data types:

        1. String
        2. Number
        3. BigInt
        4. Boolean
        5. Undefined
        6. Null
        7. Symbol

    Primitive values are immutable.

    Assignment of a primitive value creates an independent
    value, so changing one variable does not affect another.

    Note:
    "Stack memory" is a common conceptual model, but actual
    memory allocation is implementation-dependent on the
    JavaScript engine.
*/

/*=========================================================================
    Primitive -> value-based behavior
                 Immutable
                 Represents a single value(individual)

    Object -> reference-based behavior
              Can contain complex/structured data
//=========================================================================*/



// ============================================
// 1. STRING
// ============================================

    /*Strings are immutable.

    We cannot directly change an individual character
    of an existing string. */

const name = "Aniket";

console.log(typeof name); // string


// ============================================
// 2. NUMBER
// ============================================

const age = 25;
console.log(typeof age);   // number

// Special Number values

console.log(10 / 0);       // Infinity
console.log("hello" / 2);  // NaN("Even though NaN means "Not-a-Number")

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

console.log(isLoggedIn);       // Output: true
console.log(isAdmin);          // Output: false

console.log(typeof isLoggedIn); // Output: "boolean"


/*
    Boolean represents one of two values:

        true
        false

    Boolean values are commonly used in:

        - if statements
        - loops
        - conditions
        - logical operations
        - ternary operators
*/


if (isLoggedIn) {
    console.log("User is logged in");
}


// ============================================
// 5. UNDEFINED
// ============================================

let city;

console.log(city);        // undefined
console.log(typeof city); // undefined

/*
    undefined generally means that a variable has been
    declared but has not been assigned a value.
*/


// Function without return

function test() {
    console.log("Hello");
}

const result = test();

console.log(result);        // Output: undefined


/*
    If a function does not explicitly return a value,
    JavaScript returns undefined.
*/



// ============================================
// 6. NULL
// ============================================

const selectedUser = null;

console.log(selectedUser);       // Output: null
console.log(typeof selectedUser); // Output: "object"


/*
    null represents an intentional absence of a value.

    Example:

        const user = null;

    This means we intentionally don't have a user value.
*/


/*
    IMPORTANT EDGE CASE:
        typeof null returns "object".
        However, null is actually a primitive value.
        This is a historical behavior of JavaScript.
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
/*
    JavaScript converts values to Boolean when they are
    used in conditions.

    Important falsy values:

        false
        0
        -0
        0n
        ""
        null
        undefined
        NaN
*/


console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


/*
    Most other values are truthy.
*/


console.log(Boolean("Hello"));   // true
console.log(Boolean(100));       // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true