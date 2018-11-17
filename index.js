var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = {
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 99) + 2
 };
 cart.push(object);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var array = [];
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      if(cart.length === 1) {
    array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
    return `In your cart, you have ${array}.`;
     }
     else if(cart.length === 2) {
       array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}`);
       return `In your cart, you have ${array}.`;
     }
     else {
      array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}, and ${getCart()[i + 2].itemName} at $${getCart()[i + 2].itemPrice}`);
       return `In your cart, you have ${array}.`; 
     }
    }
  }
}
  
function total() {
  var sum = 0;

  for(var i = 0; i < cart.length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}



 function removeFromCart(item) {
  var itemInCart = false;
  for(var i = 0; i < cart.length; i++){
    if (item === getCart()[i].itemName) {
      cart.splice(i, 1);
    }
  } 
  if (!itemInCart) {
    return "That item is not in your cart.";
  }
  return cart;
}



function placeOrder(cardNumber) {
  const cartTotal = total();

 //how do I indicate if there is an arguement or not?
 
 if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
 else {
    cart.length = 0;
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
  
  
  
}

/*
describe("placeOrder()", function() {
  it("doesn't place the order if a credit card number is not provided", function() {
    
    expect(placeOrder()).toEqual("Sorry, we don't have a credit card on file for you.");
  });

  it("places an order when a credit card number is provided", function() {
    addToCart("zucchini");

    const cartTotal = total();
    const cardNumber = Math.floor(Math.random() * 100000000);

    

    expect(placeOrder(cardNumber)).toEqual(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  });

  it("empties the cart", function() {
    addToCart("apples");

    placeOrder(12345678);

    expect(getCart()).toEqual([]);
  });
});
*/