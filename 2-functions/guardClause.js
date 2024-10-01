//Fonksiyonlarda belirli bir koşul sağlanmadığında akışın erken bitmesini sağlar


//ÖRNEK-1
//geleneksel yöntem
function checkAge(age) {
    if (age >= 18) {
        //Yaş 18 den büyük işlemlere devam edebiliriz...
        //
        //
        //
        console.log('You can continue...');
    } else {
        console.log('You can not continue...');
    }
}

//guard close yöntemi
function checkUserAge(age) {
    if (age < 18) {
        console.log('You can not continue...');
        return;
    }
    console.log('You can continue...');
}
//burada kodun heman başlangıcında gereksiz koşulları hızlıca kontrol edip returnle çıkıyorum


//ÖRNEK-2
function validatUser(email, age){
    if(email.includes('@')){
        if(age >= 18){
            console.log('You can continue...');
            //
            //
        }
        else{
            console.log('You can not continue because of age...');
        }
    }
    else{
        console.log('You can not continue because of email...');
    }
}


function validatePersonUser(email, age){
    if(!email.includes('@')){
        console.log('You can not continue because of email...');
        return;
    }
    if(age < 18){
        console.log('You can not continue because of age...');
        return;
    }
    console.log('You can continue...');
}