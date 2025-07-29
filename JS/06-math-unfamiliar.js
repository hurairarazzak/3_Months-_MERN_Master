// num++ (Post-Increment):
var num = 1;
var newNum = num++; 
// pehle newNum mein original value jayegi (1)
// Phir num increment hota hai (ab num = 2)
// Toh result:
// newNum = 1, num = 2

// ++num (Pre-Increment):
var num1 = 1;
var newNum1 = ++num1;
// Pehle num1 increment hota hai (ab 2)
// Phir newNum1 mein wo nayi value assign hoti hai
// Toh result:
// newNum = 2, num = 2

// num-- (Post-Decrement):
var num2 = 1;
var newNum2 = num--;
// Pehle newNum2 mein original value chali jati hai (1)
// Phir num2 decrement hota hai (ab num = 0)
// Toh result:
// newNum2 = 1, num = 0

// --num (Pre-Decrement):
var num3 = 1;
var newNum3 = --num;
// Pehle num3 decrement hota hai (ab 0)
// Phir newNum3 mein wohi value (0)
// Toh result:
// newNum3 = 0, num3 = 0


// ----------------- Practice Questions -----------------

var a = 5;
var b = a++;
alert(b); // Output is 5
 
var x = 7;
var y = ++x;
alert(y); // Output is 8

