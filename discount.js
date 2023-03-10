/* 
1. if ticket number less than 100, per ticket price: 100;
2. if ticket number more than 100, but less than 200, First 100 tickets will be 100 / ticket rest tickets will be 90 tk per piece. 
3. if you purchese more than 200 tickets 
   1 to 100 ---> 100
   101 to 200 ---> 90
   200+ ---> 70
*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
     const restTicketPrice = restTicketQuantity * restTicketRate;
     const totalPrice = first100Price + second100Price + restTicketPrice;
     return totalPrice
  }
}

const price = ticketPrice(201);

console.log(price);
