//kodun sınırlarını belirlemek ve dış sistemlerle etkileşimini yönetmek için sınırlar belirleyin.


//kötü örnek
function fetchUserData(id){
    return fetch(`https://api.example.com/user/${id}`)
    .then(response => response.json())
    .then(data => data);
}


//iyi örnek
function fetchPersonData(id){
    const url = `https://api.example.com/person/${id}`;
    return fetchFromApi(url);
}

function fetchFromApi(url){
    return fetch(url)
    .then(response => response.json())
    .then(data => data);
}
