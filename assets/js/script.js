
let changeThemeButton = document.getElementById("change-theme-btn");
var themeTitle = document.getElementById("theme");
var themeIcon = document.getElementById("theme-icon");
var userImage = document.getElementById("user-image");
const searchArea = document.querySelector("#search-area")
const searchButton= document.querySelector("#search-btn")
const form = document.querySelector("#form");


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


searchButton.addEventListener("click",e =>{
    e.preventDefault();

    let searchValue = ((searchArea.value).toLowerCase()).replace(/\s/g,''); 

    async function fetchUsers(){
        try{
            const responce = await fetch("https://api.github.com/users");
            const users = await responce.json();

            // console.log(users);
            // console.log(searchValue)
            users.map((user)=>{
                if(user.login.toLowerCase() === searchArea.value){
                    console.log("login",user.id)
                    console.log("true");
                  }
                  
                  else{
                    console.log("not found");
                  }
                  
                 console.log("S type",typeof(searchValue))
                 console.log("L type",typeof(user.login))
            
            })
              
        }
        catch(error){
            console.log(error);
        }
    }
    fetchUsers();
    
})