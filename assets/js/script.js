
let changeThemeButton = document.getElementById("change-theme-btn");
var themeTitle = document.getElementById("theme");
var themeIcon = document.getElementById("theme-icon");
var userImage = document.getElementById("user-image");
const searchArea= document.querySelector("#search-area")
const searchBytton= document.querySelector("#search-btn")

console.log(searchArea.value);

function LightTheme(){
    if(themeIcon.src = "./assets/imgs/icon-sun.svg"){
        themeIcon.src = "./assets/imgs/icon-moon.svg"

        themeTitle.innerHTML = "Light"
    }
}

function darkTheme(){
    if(themeIcon.src= "./assets/imgs/icon-moon.svg"){
        themeIcon.src = "./assets/imgs/icon-sun.svg";
        themeTitle.innerText = "Dark"
    }
}

changeThemeButton.addEventListener("click",LightTheme,darkTheme);


// fetch("https://api.github.com/users").
// then(
//   responce => responce.json()
// )
// .then(data=>console.log(data));

async function fetchUsers(){
    try{
        const responce = await fetch("https://api.github.com/users");
        const users = await responce.json()
        console.log(users);

        users.map((user)=>{
            userImage.src = user.avatar_url;
         console.log(user.avatar_url);
        })
    }
    catch(error){
        console.log(error);
    }
}
fetchUsers();