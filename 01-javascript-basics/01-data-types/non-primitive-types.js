/* 
    Non-primitive data types in JavaScript are reference-based values that can store 
    collections of data or more complex structures. The main non-primitive type is 
    Object, and arrays, functions, dates, maps, sets, etc. are objects or object-like 
    structures.

    ============================================
    NON-PRIMITIVE DATA TYPES IN JAVASCRIPT
    ============================================

    Non-primitive values are used to represent
    complex or structured data.

    The main non-primitive type is Object.

    Examples:
        - Object
        - Array
        - Function
        - Date
        - Map
        - Set
        - RegExp
*/


/*=========================================================================
    Non-Primitive -> value based behavior(Stack memory, Mutable)
    Object -> reference based behavior(Contains multiple key-value pairs)
//=========================================================================*/


// Objects Exaample
const user ={
    name: "Aniket",
    age:25,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "New York",
    }
}


/* =========================================================================
    An object can contain different types of values:

    String  -> name
    Number  -> age
    Array   -> skills
    Object  -> address
============================================================================*/


// Refference based behavior
const user1 = {
    name: "Aniket",
}
const user2 = user1;
user2.name = "Rahul";

console.log(user1.name);    // Output: "Rahul"

/* =============================================================================
    user2 = user1 does not create a new object.

    Both user1 and user2 refer to the same object.

    Therefore, modifying the object through user2
    is visible through user1.
===============================================================================*/