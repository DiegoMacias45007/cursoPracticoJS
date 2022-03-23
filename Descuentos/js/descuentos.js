const price = document.getElementById("itemPrice");
const discount = document.getElementById("itemDiscount");
const coupon = document.getElementById("itemCoupon");
const itemResult = document.getElementById("itemResult");
const savingsResult = document.getElementById("savingsResult");

let x;
let y;
let z;


function showPrice(){
    x = parseInt(price.value);
    y = parseInt(discount.value);
    z = parseInt(coupon.value);

    discountOperation(x, y, z);
}

const discountOperation = function(price, discount, coupon){
    let result = price * (100 - discount) / 100;
    if (coupon != 0){
        result = result * (100 - coupon) / 100;
    }
    let savings = price - result;
    itemResult.innerHTML = "Tu producto cuesta: " + result + " pesos ";
    savingsResult.innerHTML = "Ahorraste " + savings + " pesos";
    return;
}