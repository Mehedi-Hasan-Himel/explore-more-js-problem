const shoppingCart = [
  { name: `shoe`, price: 1200 },
  { name: `T-Shirt`, price: 2200 },
  { name: `Pant`, price: 37000 },
  { name: `belt`, price: 600 },
];

function totalCost(products) {
   let sum = 0;
  for (let i = 0; i < products.length; i++) {
     const product = products[i];
     sum += product.price;
   //  console.log(product);
  }
   return sum
}

const expense = totalCost(shoppingCart);
console.log(`Total Expense Today: `, expense);
