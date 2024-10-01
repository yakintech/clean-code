//kodun sınırlarını belirlemek ve dış sistemlerle etkileşimini yönetmek için sınırlar belirleyin.


function fetcUserData(id){
    return fetch(`https://api.example.com/user/${id}`)
    .then(response => response.json())
    .then(data => data);
}