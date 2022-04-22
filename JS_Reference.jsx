/*Comment*/

/*Data Types*/

var undefined = undefined
var nothing = null
var boolean = true
var boolean = false
var string = "Hello World"
var number = 0
var float = 1.0
var symbol = symbol("id") /* Immutable identification */
var object = { key: value }

/* variable*/
var variable = 0 /*Can be used throughout entire program*/
let variable = 0 /*Used within scope of declaration*/
const variable = 0 /*Unchangeable*/

/*declaring variable*/
var a

/*assigning variable*/
var a = 0

/*displaying data to console*/
console.log(data)

/*Java Script declarations are case-sensitive*/
apple != APPLE

/*Best Practice for data names is to use camelCase*/
/*lowercase first word, and uppercase everyword after*/
var camelCaseIsBestPractice

/*Operators*/

var additon = 1 + 1
var subtraction = 1 - 1
var multiplication = 1 * 1
var division = 1 + 1
var remainder = 10 % 4 /*2*/ /*Commonly used to find a odd or even number*/
var increment = increment++
var increment = decrement--
number += 1; /*Plus then equals*/ /*example: let a = 10; a =+ 2; a = 10 + 2; a = 12 */
number -= 1; /*Subtract then equals*/
number *= 1; /*Multiply then equals*/
number /= 1; /*Divide then equals*/

/*Using quotes within string*/
var string = 'Hello "my" friend!'; /*Hello "my" Friend*/
var string = "Hello 'my' friend";
var string = ` "He'llo' "my" 'frie'nd" `; /*allows literal use of " and ' */

/*Esaping with "\" */
/*
\'
\"
\\
\n - newline
\r carriage return\
\t - tab
\b - backspace
\f - form freed 
*/

/*Examples of string concentation*/
var firstName = "John"
var lastName = "Doe"
var fullName = firstName + lastName /*"John Doe"*/


var fullName = "John"
fullName += "Doe" 
/*"John Doe"*/


var myName = "John"
var greeting = "Hello, my name is " + myName + ". Its nice to meet you."
/*"Hello, my name is John. It's nice to meet you.*/


/*Find Length of String*/
 myName = "John"
 myNameLength = myName.length
 myNameLength = 4

/*Finding character at specific index of string*/
myName="John";
firstLetterOfMyName = myName[0] /*J*/

/*String Immutability*/
var brokenString = "Jello World"
/*Can not change characters of a string, must be replaced*/
var brokenString = "Hello World"

/*Finding -nth / last character of a string*/
var greeting = "Hello, how are you today?"
greetingLastLetter = greeting[greeting.length - 1]; /*?*/

/*Assigning Basic Function*/
function myCar (year, make, model) {
    var result = ""
    result += "John drives a " + year + make + model + "." 
    return result; 
}

/*Declaring Basic Function*/
myCar("2015", "Toyota", "Camry")
/*John Drives a 2015 Toyota Camry.*/

/*Array*/
var myArray = ["John", 25 , "Male" ]

/*Nested Array*/
var parentArray = [["John",25,"Male" ],["Jane", 30, "Female"], ["Fido", 5, "Male-Dog"]]

/*Indexing Array */
var myData = myArray[0] /*John*/

/*Indexing Nested Array*/
var parentData = parentArray[1[1]] /*30*/

