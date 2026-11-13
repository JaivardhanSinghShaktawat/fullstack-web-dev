/*
Implement a function `calculateTotalSpentByCategory` which takes a list of 
transactions as parameter and return a list of objects where each object is 
unique category-wise and has total price spent as it's value.

Transactions is an array where each Transaction - an object like 

{
 id : 1,
 timestamp: 1794553071666,
 price: 10,
 category: 'Food',
 itemName: 'Pizza'
}

Output: [{category: 'Food', totalSpent: 10 }] 
// can have multiple categories, only one example is mentioned here.
*/

function calculateTotalSpentByCategory(transactions) {
  let category = new Map();

  for (let i = 0; i < transactions.length; i++) {
    let type = transactions[i].category;
    if (category.has(type)) {
      let currentPrice = category.get(type);
      category.set(type, currentPrice + transactions[i].price);
    } else {
      category.set(type, transactions[i].price);
    }
  }

  let result = [];

  for (const [type, price] of category) {
    result.push({ category: type, totalSpent: price });
  }

  return result;
}

let result = calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1794553071666,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1794553071666,
    price: 10,
    category: "Product",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1794553071666,
    price: 100,
    category: "Coding",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1794553071666,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1794553071666,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1794553071666,
    price: 10,
    category: "Coding",
    itemName: "Pizza",
  },
]);

console.log(result);
