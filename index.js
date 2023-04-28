const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

/* Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

    -If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
    -If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
    -At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."  */

function calculateTotal(customer) {
  let total = customer.pricePerRefill * customer.refills; // first we need to calculate the total cost of the price of the refill * how many refills there are

  if (customer.subscription) {  // then we check if theres a customer subscription and if true, apply a 25% discount
    total *= 0.75;
  }

  if (customer.coupon) {  // then we need to check after the subscription discount is calculated, if theres a coupon. If yes -10
    total -= 10;
  }

  return total;  // finally we return the total 
}

const timmyAmount = calculateTotal(timmy);

console.log(`Timmy's grand total is $${timmyAmount}.`);

const sarahAmount = calculateTotal(sarah);

console.log(`Sarah's grand total is $${sarahAmount}.`);

const rockyAmount = calculateTotal(rocky);

console.log(`Rocky's grand total is $${rockyAmount}.`);