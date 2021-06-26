// JS EXCERSISE-1

function calculateInvoice(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  let sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;
  return `You have to pay: ${sum} €`;
}

console.log(calculateInvoice(2, 10, 5, 3)); /////// = 20 €

// JS EXCERSISE-2

var justNothing = 2;
var normalBurger = 10;
var trianglePancake = 5;
var darkishCoffey = 3;

console.log(
  calculateInvoice(justNothing, normalBurger, trianglePancake, darkishCoffey)
); /////// = 20 €

// JS EXCERSISE-3

var starterPrice1 = 3;
var maindishPrice1 = 10;
var dessertPrice1 = 5;
var beveragePrice1 = 3;

console.log(
  calculateInvoice(starterPrice1, maindishPrice1, dessertPrice1, beveragePrice1)
); /////// = 21 €

let starterPrice2 = 4;
let maindishPrice2 = 9;
let dessertPrice2 = 5;
let beveragePrice2 = 2;

console.log(
  calculateInvoice(starterPrice2, maindishPrice2, dessertPrice2, beveragePrice2)
); /////// = 20 €

const starterPrice3 = 2;
const maindishPrice3 = 9;
const dessertPrice3 = 5;
const beveragePrice3 = 2;

console.log(
  calculateInvoice(starterPrice3, maindishPrice3, dessertPrice3, beveragePrice3)
); /////// = 18 €

// JS EXCERSISE-4

function studentInvoice(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  let foodSum = starterPrice + maindishPrice + dessertPrice;        //////I multiplied it with 0.9 because: I need 10% from 100%. 100% - 10% = 90%
  let discount10 = (foodSum * 0.9) + beveragePrice;                 //////so I will just pay 90%, which is (x/100)*90 or (x*0.9)   
  return `10% discount applied. You have to pay: ${discount10} €`;  //////e.g.: (1800/100)*90 = (18)*90 = 1620 or (18*0.9) = 16,2
}

console.log(studentInvoice(2, 10, 5, 2)); /////// = 17.3 € 
console.log(studentInvoice(3, 10, 5, 3)); /////// = 19.2 €
console.log(studentInvoice(2, 9, 5, 3)); /////// = 17.4 €
