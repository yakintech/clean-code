//değişkenler, fonksiyonlar, sınıf gibi kod parçalarına anlamı ve doğru isimler vermenin önemi. Böylelikle kodun okunabilirliği artar ve kodun anlaşılması kolaylaşır.

//1. ANLAMLI VE AÇIKLAYICI İSİMLER KULLANIN
//tek bir harf, kısaltma ya da anlamsız isimler yerine kodun amacını gösteren isimler kullanın.
//Kötü örnek:
let a = 1;
let b = 2;
function c() {
    return a + b;
}

//İyi örnek:
let width = 1;
let height = 2;
function calculateArea() {
    return width * height;
}

//değişken veya fonksiyonun hangi bağlamda ve hangi kapsamda kullanıldığı hakkında bilgi veren isimler kullanın.
//kötü örnek
let hp = 100; //burada healthPoint demek istedim ama bu healthPoint mi hp bilgisanayı mı anlamak zor

//iyi örnek
let healthPoint = 100;


//yanıltıcı isimlerden kaçınmak

//kötü örnek
let accountList = {}; //Bir obje tanımladım ama verdiğim isimlendirmede bir liste olduğunu düşünülebilir.

//iyi örnek
let accounts = []; //accounts isminde bir dizi tanımladım ve bu isim daha açıklayıcı ve anlamlı.



//kısaltmalardan kaçının

//kötü örnek
function getRanNum() {
    return Math.random();
}

//iyi örnek
function getRandomNumber() {
    return Math.random();
}

//tekrarlanan bilgiden kaçının

//kötü örnek
//aşağıdaki örnekte property isimlerinde tekrarlanan bilgi var. userFirstName ve userLastName isimlerinde user kelimesi tekrarlanmış.
let user = {
    userFirstName: 'John',
    userLastName: 'Doe',
    userAge: 30,
};

//aşağıdaki örnekte productObject yazmama gerek yok
let productObject = {
    name: 'product1',
    price: 100
}


//iyi örnek
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

let product = {
    name: 'product1',
    price: 100
}


//bağlama göre belirsiz isimlerden kaçının

//kötü örnek
let count; //count neyi sayıyor? ne tür bir sayım yapılıyor?

//iyi örnek
let userCount; //kullanıcı sayısını sayıyor