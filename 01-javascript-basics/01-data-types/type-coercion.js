/*
    ============================================================
                    TYPE COERCION IN JAVASCRIPT
    ============================================================

    Type coercion is the automatic or implicit conversion
    of one data type into another by JavaScript.

    JavaScript performs type coercion when different data
    types are used together in an operation or condition.

    Example:

        "5" - 2

    JavaScript automatically converts:

        "5" -> 5

    Therefore:

        5 - 2 -> 3


    ============================================================
                TYPE CONVERSION vs TYPE COERCION
    ============================================================

    Type Conversion:
        We explicitly convert a value from one type to another.

        Example:

            Number("10")
            String(10)
            Boolean(1)


    Type Coercion:
        JavaScript automatically converts the value.

        Example:

            "10" - 5

        JavaScript automatically converts:

            "10" -> 10

        Result:

            10 - 5 -> 5


    ============================================================
                    IMPORTANT DIFFERENCE
    ============================================================

    Type Conversion
        ->
    Explicit conversion
        ->
    Developer converts the value


    Type Coercion
        ->
    Implicit conversion
        ->
    JavaScript automatically converts the value
*/


/*=========================================================================
                    TYPE COERCION WITH OPERATORS
=========================================================================*/


/*
    ============================================================
                        + OPERATOR
    ============================================================

    The + operator is special in JavaScript.

    It can perform:

        1. Numeric addition
        2. String concatenation

    If a string is involved, JavaScript may perform
    string concatenation.
*/


console.log(10 + 20);

// Output:
// 30


console.log("10" + 20);

// Output:
// "1020"


/*
    Explanation:

        "10" + 20

        JavaScript converts:

            20 -> "20"

        Then:

            "10" + "20"

        Result:

            "1020"


    Therefore:

        + can perform string concatenation.
*/


// Another example:

console.log(10 + "20");

// Output:
// "1020"


/*
    Explanation:

        10 -> "10"

        "10" + "20"

        -> "1020"
*/


/*=========================================================================
                        - OPERATOR
=========================================================================*/


/*
    Unlike +, the - operator performs numeric operations.

    Therefore, JavaScript converts string numbers
    into Number values.
*/


console.log("10" - 5);

// Output:
// 5


/*
    Explanation:

        "10" -> 10

        10 - 5

        -> 5
*/


console.log("20" - "5");

// Output:
// 15


/*
    Both strings are converted into numbers:

        "20" -> 20
        "5"  -> 5

        20 - 5

        -> 15
*/


/*=========================================================================
                        * OPERATOR
=========================================================================*/


console.log("10" * 2);

// Output:
// 20


/*
    Explanation:

        "10" -> 10

        10 * 2

        -> 20
*/


/*=========================================================================
                        / OPERATOR
=========================================================================*/


console.log("20" / 2);

// Output:
// 10


/*
    Explanation:

        "20" -> 20

        20 / 2

        -> 10
*/


/*=========================================================================
                        % OPERATOR
=========================================================================*/


console.log("10" % 3);

// Output:
// 1


/*
    Explanation:

        "10" -> 10

        10 % 3

        -> 1
*/


/*=========================================================================
                    IMPORTANT OPERATOR RULE
=========================================================================*/


/*
    Remember:

        +   -> Can perform string concatenation
        -   -> Numeric operation
        *   -> Numeric operation
        /   -> Numeric operation
        %   -> Numeric operation


    Example:

        "5" + 2
        -> "52"


        "5" - 2
        -> 3


        "5" * 2
        -> 10


        "5" / 2
        -> 2.5


        "5" % 2
        -> 1
*/


/*=========================================================================
                    BOOLEAN TYPE COERCION
=========================================================================*/


/*
    JavaScript automatically converts values into Boolean
    when they are used in conditions.

    Example:

        if (value)

    JavaScript internally evaluates:

        Boolean(value)
*/


const name = "Aniket";

if (name) {
    console.log("User exists");
}

// Output:
// User exists


/*
    Explanation:

        "Aniket" -> true

    because a non-empty string is truthy.
*/


/*=========================================================================
                        FALSY VALUES
=========================================================================*/


/*
    The following values are FALSY in JavaScript:

        false
        0
        -0
        0n
        ""
        null
        undefined
        NaN


    All other values are generally TRUTHY.
*/


if ("") {
    console.log("This will not execute");
}


/*
    Explanation:

        "" -> false

    Therefore, the if condition is false.
*/


if (100) {
    console.log("100 is truthy");
}

// Output:
// 100 is truthy


/*
    Explanation:

        100 -> true

    Therefore, the condition executes.
*/


/*=========================================================================
                    IMPORTANT TRUTHY EDGE CASES
=========================================================================*/


/*
    Empty Array is TRUTHY.
*/


console.log(Boolean([]));

// Output:
// true


/*
    Empty Object is also TRUTHY.
*/


console.log(Boolean({}));

// Output:
// true


/*
    An empty string is FALSY.
*/


console.log(Boolean(""));

// Output:
// false


/*
    A string containing "false" is TRUTHY.

    Because "false" is a non-empty string.
*/


console.log(Boolean("false"));

// Output:
// true


/*=========================================================================
                    TRUE AND FALSE WITH NUMBERS
=========================================================================*/


console.log(true + 1);

// Output:
// 2


/*
    Explanation:

        true -> 1

        1 + 1

        -> 2
*/


console.log(false + 1);

// Output:
// 1


/*
    Explanation:

        false -> 0

        0 + 1

        -> 1
*/


console.log(true + true);

// Output:
// 2


/*
    Explanation:

        true  -> 1
        true  -> 1

        1 + 1

        -> 2
*/


/*=========================================================================
                        NULL COERCION
=========================================================================*/


/*
    In numeric operations:

        null -> 0
*/


console.log(null + 5);

// Output:
// 5


/*
    Explanation:

        null -> 0

        0 + 5

        -> 5
*/


console.log(null - 5);

// Output:
// -5


/*
    Explanation:

        null -> 0

        0 - 5

        -> -5
*/


/*=========================================================================
                    UNDEFINED COERCION
=========================================================================*/


/*
    In numeric operations:

        undefined -> NaN
*/


console.log(undefined + 5);

// Output:
// NaN


console.log(undefined - 5);

// Output:
// NaN


/*
    Explanation:

        undefined -> NaN

        NaN + 5

        -> NaN
*/


/*=========================================================================
                    NULL vs UNDEFINED
=========================================================================*/


/*
    Numeric conversion behavior:

        null      -> 0
        undefined -> NaN
*/


console.log(Number(null));

// Output:
// 0


console.log(Number(undefined));

// Output:
// NaN


/*
    This difference is very important for interviews.
*/


/*=========================================================================
                    STRING TO NUMBER COERCION
=========================================================================*/


console.log("10" - 2);

// Output:
// 8


/*
    "10" is automatically converted into:

        10

    Then:

        10 - 2

        -> 8
*/


console.log("hello" - 2);

// Output:
// NaN


/*
    Explanation:

        "hello" cannot be converted into a valid number.

        "hello" -> NaN

        NaN - 2

        -> NaN
*/


/*=========================================================================
                    LOOSE EQUALITY (==)
=========================================================================*/


/*
    The == operator performs loose equality.

    It can perform type coercion before comparison.
*/


console.log(5 == "5");

// Output:
// true


/*
    Explanation:

        5       -> Number
        "5"     -> String

    == performs type coercion.

    Therefore:

        5 == "5"

        -> true
*/


/*=========================================================================
                    STRICT EQUALITY (===)
=========================================================================*/


/*
    The === operator performs strict equality.

    It compares:

        1. Value
        2. Type

    It does not perform the same type coercion
    that == performs.
*/


console.log(5 === "5");

// Output:
// false


/*
    Explanation:

        5   -> Number
        "5" -> String

    Types are different.

    Therefore:

        5 === "5"

        -> false
*/


/*=========================================================================
                    == vs ===
=========================================================================*/


/*
    ==

        Loose equality
        Type coercion may happen


    ===

        Strict equality
        Type and value must match
*/


console.log(10 == "10");

// Output:
// true


console.log(10 === "10");

// Output:
// false


/*
    Interview recommendation:

        Prefer === when you want strict comparison.

        Use == only when you intentionally want
        JavaScript's loose-equality coercion rules.
*/


/*=========================================================================
                    BOOLEAN COERCION WITH !
=========================================================================*/


/*
    The ! operator converts a value to Boolean
    and then reverses the Boolean value.
*/


console.log(!"Aniket");

// Output:
// false


/*
    Explanation:

        "Aniket" -> true

        !true -> false
*/


console.log(!0);

// Output:
// true


/*
    Explanation:

        0 -> false

        !false -> true
*/


/*=========================================================================
                        DOUBLE NOT (!!)
=========================================================================*/


/*
    !! is commonly used to convert a value into
    its Boolean representation.
*/


console.log(!!"Aniket");

// Output:
// true


console.log(!!0);

// Output:
// false


/*
    Explanation:

        "Aniket"
            ->
        true
            ->
        !true
            ->
        false
            ->
        !false
            ->
        true


    Therefore:

        !!value

    gives the Boolean representation of value.
*/


/*=========================================================================
                    LOGICAL OR (||) COERCION
=========================================================================*/


/*
    The || operator uses truthiness.

    If the first value is truthy,
    it returns the first value.

    If the first value is falsy,
    it returns the second value.
*/


const username = "";

const result = username || "Guest";

console.log(result);

// Output:
// "Guest"


/*
    Explanation:

        username = ""

        "" -> falsy

    Therefore:

        "" || "Guest"

        -> "Guest"
*/


const userName = "Aniket";

const result2 = userName || "Guest";

console.log(result2);

// Output:
// "Aniket"


/*
    Explanation:

        "Aniket" -> truthy

    Therefore:

        "Aniket" || "Guest"

        -> "Aniket"
*/


/*=========================================================================
                    LOGICAL AND (&&) COERCION
=========================================================================*/


/*
    The && operator also uses truthiness.

    If the first value is falsy,
    it returns the first value.

    If the first value is truthy,
    it evaluates and returns the second value.
*/


const isLoggedIn = true;

isLoggedIn && console.log("Welcome to dashboard");

// Output:
// Welcome to dashboard


/*
    Explanation:

        true -> truthy

    Therefore, JavaScript evaluates the second expression.
*/


/*=========================================================================
                    IMPORTANT TYPE COERCION EXAMPLES
=========================================================================*/


console.log("5" + 2);
// Output: "52"


console.log("5" - 2);
// Output: 3


console.log("5" * 2);
// Output: 10


console.log("5" / 2);
// Output: 2.5


console.log(5 + true);
// Output: 6


console.log(5 + false);
// Output: 5


console.log(5 + null);
// Output: 5


console.log(5 + undefined);
// Output: NaN


console.log(5 == "5");
// Output: true


console.log(5 === "5");
// Output: false


/*=========================================================================
                    INTERVIEW SUMMARY
=========================================================================*/


/*
    TYPE COERCION:

    Type coercion is the automatic or implicit conversion
    of a value from one data type to another by JavaScript.


    IMPORTANT RULES:

        1. + is special.

            "5" + 2
            -> "52"


        2. -, *, / and % generally perform numeric coercion.

            "5" - 2
            -> 3


        3. Boolean coercion happens in conditions.

            if (value)


        4. Important falsy values:

            false
            0
            -0
            0n
            ""
            null
            undefined
            NaN


        5. Empty arrays and objects are truthy.

            Boolean([]) -> true
            Boolean({}) -> true


        6. == allows coercion.

            5 == "5"
            -> true


        7. === performs strict comparison.

            5 === "5"
            -> false


        8. Numeric coercion:

            null      -> 0
            undefined -> NaN


        9. ! performs Boolean coercion.

            !"hello"
            -> false


        10. !! can be used to get the Boolean
            representation of a value.


    ============================================================
                    INTERVIEW DEFINITION
    ============================================================

    "Type coercion is the automatic or implicit conversion
    of one data type into another by JavaScript during an
    operation or evaluation.

    For example, when we write '5' - 2, JavaScript
    automatically converts the string '5' into the number 5,
    so the result is 3.

    This is different from type conversion, where we explicitly
    convert a value using functions like Number(), String(),
    or Boolean()."
*/