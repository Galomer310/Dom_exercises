// 🌟 Exercise 1 : Find the numbers divisible by 23
// function displayNumbersDivisible() {
//     var numSum = 0
//     for (let i = 0; i < 500; i++) {
//         if (i % 23 === 0) {
//             numSum += i
//             console.log(i);
//         } 
//     }
//     console.log(numSum);
// }
// displayNumbersDivisible()

// 🌟 Exercise 2 : Shopping List
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ['banana','orange','apple'];

// function mybill() {
//     totalToPay = 0
//     for (let i = 0; i < shoppingList.length; i++) {
//         if (shoppingList[i] in stock && stock[shoppingList[i]] !=0) {
//             totalToPay += prices[shoppingList[i]];
//             console.log(shoppingList[i]);
//         } else {
//             continue
//         }
//     }
//     console.log(`My Bill is ${totalToPay}`); 
// }
// mybill()

// 🌟 Exercise 4 : Vacations Costs

// function hotelCost(numOfNights) {
//     try {
//         if (isNaN(numOfNights) || numOfNights <= 0) {
//             throw new Error("Invalid number of nights");
//         }
//         let needToPay = numOfNights * 140;
//         return `The hotel will cost you $${needToPay}.`;
//     } catch (error) {
//         return "The values you entered are incorrect for the hotel stay!";
//     }
// }

// function planeRideCost(userDestination) {
//     try {
//         const validDestination = /^[a-zA-Z\s]+$/;
//         userDestination = userDestination.trim().toLowerCase();

//         if (!userDestination || !validDestination.test(userDestination)) {
//             return "Please enter a valid destination (letters only).";
//         } else if (userDestination === "london") {
//             return `The London flight costs $183.`;
//         } else if (userDestination === "paris") {
//             return `The Paris flight costs $220.`;
//         } else {
//             return `The flight will cost you $300.`;
//         }
//     } catch (error) {
//         return "An error occurred while calculating the flight cost.";
//     }
// }

// function rentalCarCost(numOfDays) {
//     try {
//         if (isNaN(numOfDays) || numOfDays <= 0) {
//             return "Please enter a valid number of days!";
//         }
//         let price = numOfDays * 40;
//         if (numOfDays > 10) {
//             let discount = price * 0.05; 
//             price -= discount;
//         }

//         return `The car rental will cost $${price}.`;
//     } catch (error) {
//         return "An error occurred while calculating the car rental cost.";
//     }
// }

// function totalVacationCost() {
//     try {
//         let numOfNights = parseInt(prompt("For how many nights would you like to stay?"), 10);
//         let userDestination = prompt("What is your destination?");
//         let numOfDays = parseInt(prompt("For how many days would you like to rent a car?"), 10);

//         console.log(hotelCost(numOfNights));
//         console.log(planeRideCost(userDestination));
//         console.log(rentalCarCost(numOfDays));
//     } catch (error) {
//         alert("An error occurred while calculating the total vacation cost.");
//     }
// }

// totalVacationCost();



