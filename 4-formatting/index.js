//kodun TEXT olarak düzgün bir şekilde yazılması gerekmektedir. Kodun okunabilirliğini arttırmak için kodunuzu düzenli bir şekilde yazın.


//DİKEY BOŞLUK KULLANIN
//kötü örnek
function validateOrder(order){if(order.price<0){return false;}if(order.quantity<0){return false;}return true;}

//iyi örnek
function validateProduct(product){
    if(product.price < 0){
        return false;
    }
    if(product.quantity < 0){
        return false;
    }
    return true;
}


//YATAY BOŞLUK KULLANIN
//kötü örnek
let total=price*quantity;

//iyi örnek
let totalPrice = price * quantity;

//fonksiyonlar arasında bir boşluk bırakın

//kötü örnek
function sum(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}

//iyi örnek
function add(a, b){
    return a + b;
}

function remove(a, b){
    return a - b;
}


//iç içe if bloklarının seviyeleri
//kötü örnek

if(condition1){
if(condition2){
        //...
    }
}

//iyi örnek
if(condition1){
    if(condition2){
        //...
    }
}


//Kod satırı uzunluğu
//kod satırlaırnın çok uzun olması ekranda yatay kaydırma yapılmasına neden olur ve kodun okunabilirliğini azaltır.

//kötü örnek
let orderSummary = calculateOrderSummary(order, customer) + calculateOrderDiscount(order, customer) - calculateOrderTax(order, customer); + calculateOrderShipping(order, customer);


//iyi örnek
let orderTotal = calculateOrderSummary(order, customer)
let taxes = calculateOrderTax(order, customer)
let finalSummary = orderTotal + taxes