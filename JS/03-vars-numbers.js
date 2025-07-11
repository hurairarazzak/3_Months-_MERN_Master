var weight = 150;
console.log(weight);

var age1 = 15;   // This var value is Number bcz the value is not in the string 
var age1 = "15"  // This var value is the String bcz we add in the string

var num = 100;
console.log(num + 25);  // Output: 125

var originalNum = 24;
var newNum = 7;
console.log(originalNum + newNum);  // Output: 31

var a = 10;
var b = 20;
var sum = a + b
console.log(sum);   // Output: 30

var totalnum = 90;
totalnum = 90 + 10;
console.log(totalnum);  // Output: 100

var realNum = "23";
var numNew = realNum + 7;
console.log(numNew);  // Output: "237" (Addition nahi, Concatenation hogi)

// var 1stPresident = "Washington";    // Illegal bcz we can't begin a variable name with number
var prezWhoCame1st = "Washington";  // Legal bcz we can add number in the middle of the variable name or in the end.

alert(144);
var caseQty = 125;
alert(caseQty);  // Alert mein agar number daalo ya number wala variable tou JS khud string bana deta hai


// -------- Practice Questions for Chapter 3: Variables for Numbers ----------2

// 1. Ek variable banao age aur usmein 18 daalo.
var age = 18;

// 2. Ek variable banao marks aur usmein 83 daalo. Console par usmein +10 ka result print karo.
var marks = 83;
console.log(marks + 10);

// 3. num1 = 5, num2 = 6 → Ek variable total banao jo in dono ka sum ho.
var num1 = 5;
var num2 = 6;
var total = num1 + num2;

// 4. Ek variable price = 100, phir usmein 20 aur add karo.
var price = 100;
price = price + 20;
console.log(price);


// 5. Ek variable score = 50, usi ko update karo score + 25 ke saath. Final result show karo.
var score = 50;
score = score + 25
console.log(score);


// --------- Fix the Code (Debug Practice) ---------

// Q1:  var 1num = 23;
// Ans: var num1 = 23 

// Q2: What will be the output "5010" ya 60?

var points = "50";
var final = points + 10;
console.log(final);   // Output will be 5010 as a string text

// --------- Mini Challenge ---------
// Ek game ka example imagine karo:
// var level = 3;
// Player 2 aur levels clear karta hai → Update karo level = level + 2
// Alert karo: "Your new level is: 5

var level = 3;
level = level + 2;
alert("Your new level is: " + level);


// Ek shop mein item quantity track karo:
var items = 10;
items = items + 5;
items = items - 2;
console.log(items);  // Output will be 13

