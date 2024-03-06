let country ='Australia';
let price = 120;
let deliveryFee = 50;
let getShippingMessage = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
console.log(getShippingMessage);

country ='Germany';
price = 80;
deliveryFee = 20;
getShippingMessage = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
console.log(getShippingMessage);

country ='Sweden';
price = 100;
deliveryFee = 20;
getShippingMessage = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
console.log(getShippingMessage);



/*
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
*/