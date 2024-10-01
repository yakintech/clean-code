//Temel prensip kod yazarken mümkün olduğunca yoruma ihtiyaç bırakmamaktır! Temiz kod yoruma ihityaç bırakmayan koddur.

//kötü örnek

//kullanıcı adı kontrol ediliyor
if(username.length < 3){
    //kullanıcı adı 3 karakterden küçük olamaz
    console.log('Kullanıcı adı 3 karakterden küçük olamaz');
}


if(isUserNameValid(username)){
    console.log('Kullanıcı adı geçerli');
}


//kötü örnek
let num = 5; //maximum 5 karakter olabileceği için bu değeri atadım
//iyi örnek
let maxNum = 5;

//NEDEN YAPILDIĞINI AÇIKLA NE YAPILDIĞINI DEĞİL ( TEMEL PRENSİP )

//kötü örnek

//İndirim hesaplanıyor...
let discount = calculateDiscount(price, customerType);

//iyi örnek
//Müşteri tipine göre indirim hesaplanıyor. Özel müşteriye %20 indirim uygulanıyor.
let discountForCustomerType = calculateDiscount(price, customerType);

//Kodun alternatif yollarını açıklamaktan kaçının

//kötü örnek

//eski kod: tax = price * 0.18
//şimdilik bu şekilde hesaplanıyor ama ileride değişebilir
let tax = price * 0.2;


//Yapılacak iş varsa ve kod eksikse bunu yorum satırına TODO olarak belirt. Bu TODOlar yazıldığında issue olarak da açılabilir.
//TODO: Aşağıdaki oran dinamik olarak hesaplanmalı
let discountRate = 0.2; 


// DIŞ APIlerle, üçüncü parti kütüphanelerle ve frameworklerle çalışırken ne yaptığınızı açıklayın.

function payment(price) {
    //Stripe API ile ödeme yapılıyor. price decimal olmalı. Gece 00:00'dan sonra ödeme yapılamaz. reponse 500 döner
    stripe.charge(price);
}