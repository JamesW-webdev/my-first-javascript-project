const input = require('sync-input');


console.log("Prices:");

console.log("Bubblegum: $2");
console.log("Toffee: $0.2");
console.log("Ice cream: $5");
console.log("Milk chocolate: $4");
console.log("Doughnut: $2.5");
console.log("Pancake: $3.2");


console.log("Earned amount:");

console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");

console.log("Income: $5405");

//console.log("Staff expenses:")
let staffExpenses = parseInt(input("Staff expenses:\n"));
let otherExpenses = parseInt(input("Other expenses:\n"));
let netIncome = 5405 - (staffExpenses + otherExpenses);

console.log("Net income: " + netIncome.toString());