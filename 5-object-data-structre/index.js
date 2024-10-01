
//kötü örnek
//veri yapılarının sadece veriyi saklaması gerekmektedir. İçerisinde herhangi bir davranış bulunmamasına özen gösterilir.
const user = {
    name: 'John',
    age: 30,

    printUserInfo: function(){
        console.log(this.name, this.age);
    }
}



//iyi örnek
const person = {
    name: 'John',
    age: 30,
}

function printPersonInfo(person){
    console.log(person.name, person.age);
}


//clean code yaklaşımında veriye doğrudan erişim ile getter ve setter metotları arasında bir tercih yapılmalıdır.

//kötü örnek
const account = {
    balance: 1000,

    setBalance(balance){
        this.balance = balance;
    }
}


//iyi örnek
const product = {
    _price: 100,// burada _ işareti ile private olduğunu belirttik.

    getprice(){
        return this._price;
    },
    setPrice(price){
        if(price < 0){
            throw new Error('Price cannot be negative');
        }
        this._price = price;
    }
}

