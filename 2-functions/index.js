//SINGlE RESPONSIBILITY PRINCIPLE ( Tek sorumluluk ilkesi )

//KÖTÜ ÖRNEK
function saveUserDataandSendEmail(user) {

    //burada kullanıcı verisini kaydediyorum
    saveUserData(user);

    //burada kullanıcıya email gönderiyorum
    sendEmail(user);
}

//İYİ ÖRNEK.
//Kodların test edilebilirliği ve bakımı açısından her fonksiyonun tek bir iş yapmasını sağlamak önemlidir.
//Ayrıca her fonksiyonun ne yaptığını açık bir şekilde belirtmek kodun okunabilirliğini artırır.
function saveUserData(user) {
    //burada kullanıcı verisini kaydediyorum
}

function sendEmail(user) {
    //burada kullanıcıya email gönderiyorum
}

saveUserData(user);
sendEmail(user);
//********************************************* */
//Fonksiyon isimleri ne iş yaptığını açık bir şekilde belirtmelidir.

//KÖTÜ ÖRNEK
function calculate() {
    //... burada fonksiynun ne yaptığını anlamak zor
}

//İYİ ÖRNEK
function calculateArea() {
    //... alan hesaplaması yapıyorum
}


//********************************************* */
//Özellikle zamanla büyüyecek fonksiyonlar az sayıda argüman almalıdır.

//kötü örnek
//fonksiyonun alacağı argüman sayısı arttıkça fonksiyonun karmaşıklığı artar, ileride fonksiyon güncellemek istediğimizde imzaları değiştirmek zorunda kalabiliriz.Böylelikle fonksiyonu çağırdığımız yerleri de güncellememiz gerekir.
function createUser(name, surname, age, email, phone, address, city, country) {
    //... 
}

//iyi örnek
function craetePerson(user) {
    const { name, surname, age, email, phone, address, city, country } = user;
    //...
}

//********************************************* */
//Yan etkilerden kaçının ( AVOID SIDE EFFECTS )
//fonksiyonların normal koşullarda dış dünyadan etkilenmemesi gerekmektedir. Fonksiyonlar sadece girdi almalı ve çıktı üretmelidir.

//kötü örnek
//özel bir durum olmadığı sürece bir fonksiyon kendi dışarısındaki değişkenlere değiştirmemelidir.
let totalPoint = 0;

function addPoint(point) {
    totalPoint += point;
}

//iyi örnek
function addPoint(totalPoint, point) {
    return totalPoint + point;
}


//********************************************* */
// EARLY EXIT veya Guard Clause

//kötü örnek
function isUserValid(user) {
    if(user){
        if(user.age > 18){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

//iyi örnek
function isPersonValid(user) {
    if(!user) return false;
    if(user.age <= 18) return false;
    return true;
}


//Kötü Örnek
function processTransaction(amount, userId) {
    if (userId !== null && amount > 0) {
        // Kullanıcı bilgileri kontrol ediliyor
        let user = getUser(userId);
        if (user) {
            // İşlem onaylanıyor
            let transactionId = approveTransaction(amount, userId);
            // İşlem e-postası gönderiliyor
            sendEmail(user.email, transactionId);
        }
    }
}

//İyi Örnek
function processTransaction(amount, userId) {
    if (!isValidTransaction(amount, userId)) return;
    const user = getUser(userId);
    if (!user) return;
    
    const transactionId = approveTransaction(amount, userId);
    sendTransactionEmail(user.email, transactionId);
}

function isValidTransaction(amount, userId) {
    return userId !== null && amount > 0;
}

// Fonksiyonlar küçük olmalı ve tek bir işi yerine getirmelidir.
// Açıklayıcı, eylem belirten isimler kullanılmalıdır.
// Az sayıda parametre almalı ve yan etkilerden kaçınmalıdır.
// Erken çıkış (guard clauses) ile karmaşıklık azaltılmalıdır.