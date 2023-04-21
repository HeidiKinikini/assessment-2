///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]



let initialValue = 0;
const sumWithInitial = cart.reduce((acc, curr) => acc + curr.price, 0);
  
  console.log(sumWithInitial);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice (cartTotal, couponValue, tax) {
    let cartValue = Math.ceil(cartTotal + cartTotal * tax - couponValue)
    return cartValue
}

console.log(calcFinalPrice(26.99, 10, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    My object would be called restrCustomer. It would have property names like 'firstName' & 'lastName' to identify the customer. I would also have a property name of 'phone' to be able to contact them, as well as their 'email' to send promos.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const restrCustomer = {
    firstName: "High",
    lastName: "Duck",
    number: 1234567899,
    email: "High.Duck@hotmail.com"
}
