
//Lab 1 ---------------------------------------------------
// This line logs my name to the console
console.log("Bahaa Zenhom ");
// This line logs my age to the console
console.log("23");
// This line logs my favorite programming language to the console
console.log("Java");

//Lab 2 ---------------------------------------------------

try {
    var firstName = "Bahaa";
    console.log(firstName);
    var LastName = "Zenhom";
    console.log(LastName);
    var age_in_years = 23;
    console.log(age_in_years);
    var 123isStudent = true;
    console.log(123isStudent);
}
catch (error) {
    console.error("Bad variable naming " + error.message);
}

//Lab 3 ---------------------------------------------------
var grade = prompt("Enter your grade: ");
if(grade >=90 && grade <= 100) {
    alert("Excellent");
}
else if(grade >=75 && grade < 90) {
    alert("Good");
}
else if(grade >=60 && grade < 75) {
    alert("Pass");
}
else {
    alert("Fail");
}

//Lab 4 ---------------------------------------------------

var randomPrice = Math.random() * (91) + 10;
randomPrice = randomPrice.toFixed(2);
console.log(randomPrice);

//Lab 5 ---------------------------------------------------
var productName = prompt("Enter the product name: ");
productName = productName.toLowerCase();
if(productName.includes("phone"))alert("This product could be a smartphone");

//Lab 6 ---------------------------------------------------
var date = new Date();
date.setHours(date.getHours() + 72);
console.log("New date: " + date);

//Lab 7 ---------------------------------------------------
var password = "test";
var userInput;
var attempts = 3;
do{
    userInput = prompt("Enter your password: ");
    attempts--;
}
while(userInput !== password && attempts > 0);
if(attempts === 0) {
    alert("You have been locked out.");
}

//Lab 8 ---------------------------------------------------
for(var i=1;i<=50;i++){
    if(i%2==0)continue;
    console.log(i);
    if(i==37)break;
}

//Lab 9 ---------------------------------------------------
var number = prompt("Enter a number: ");
for(var i=1;i<=number;i++){
    for(var j=0;j<i;j++){
        console.log("*");
    }
    console.log("\n");
}

//Lab 10 ---------------------------------------------------
var amount = prompt("Enter the amount: ");
amount+=12; amount-=5; amount*=2; amount/=3;
alert("Final amount: " + amount);

//Lab 11 ---------------------------------------------------
var password = prompt("Enter your password: ");
if(password.length >= 8 &&
    password[i].match(/[a-zA-Z]/) &&
    password[i].match(/[0-9]/)) {
    alert("Password is strong");
}
else alert("Password is weak");

//Lab 12 ---------------------------------------------------
var cnt = 5;
while(cnt > 0) {
    var promoCode = "PROMO" + Math.floor(Math.random() * 10000);
    console.log("Generated promo code: " + promoCode);
    cnt--;
}

//Lab 13 ---------------------------------------------------
(function(){
    var name = "Bahaa Zenhom";
    var age = 23;
    console.log("Name: " + name + ", Age: " + age);
})();

//Lab 14 ---------------------------------------------------
var firstNum = prompt("Enter first number: ");
var secondNum = prompt("Enter second number: ");
try {
    if(secondNum == 0) throw new Error("Division by zero");
    alert("Division result: " + (firstNum / secondNum));
} catch (error) {
    alert("Error - Cann't be divided by zero.");
} finally {
    console.log("Division operation completed.");
}

