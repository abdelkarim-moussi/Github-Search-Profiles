let changeThemeButton = document.getElementById("change-theme-btn");
var themeTitle = document.getElementById("theme");
var themeIcon = document.getElementById("theme-icon");
var userImage = document.getElementById("user-image");
const searchArea = document.querySelector("#search-area");
const searchButton = document.querySelector("#search-btn");
const form = document.querySelector("#form");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  let searchValue = searchArea.value.toLowerCase().replace(/\s/g, "");

  async function fetchUsers() {
    try {
      const responce = await fetch(
        `https://api.github.com/users/${searchValue}`
      );
      const user = await responce.json();

      console.log(user);
      console.log("search value", searchValue);

      // for(let i = 0;i < users.length;i++){
      if (user.login.toLowerCase() === searchValue) {
        userImage.src = user.avatar_url;
        if (user.name === undefined) {
          document.getElementById("name").innerHTML = user.login;
        } else {
          document.getElementById("name").innerHTML = user.name;
        }
        document.getElementById("name").setAttribute("href", user.html_url);
        document.getElementById("login").innerHTML = "@" + user.login;
        if (user.bio === null) {
          document.getElementById("card-bio").innerHTML =
            "This Profile has no bio";
        } else document.getElementById("card-bio").innerHTML = user.bio;
        //stats
        document.getElementById("repos").innerText = user.public_repos;
        document.getElementById("followers").innerText = user.followers;
        document.getElementById("following").innerText = user.following;
        //info
        document.getElementById("location").innerText = user.location;
        document.getElementById("twitter").innerText = user.twitter_username;
        document.getElementById("website").innerText = user.blog;
        document.getElementById("company").innerText = user.company;
        const date = new Date(user.created_at);
        const formatedDate = date.toLocaleDateString("en-Us", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        document.getElementById("date").innerHTML = "Joined " + formatedDate;

        document.getElementById("not-exist").innerHTML = "";
      } else {
        console.log("not found");
      }

      // }
    } catch (error) {
      document.getElementById("not-exist").innerHTML = "Not Exist";
      console.log(error);
    }
  }
  fetchUsers();
});

function changeTheme() {
  let element = document.body;
  if ((themeIcon.src.includes = "icon-moon.svg")) {
    themeIcon.setAttribute("src", "./assets/imgs/icon-sun.svg");
    themeTitle.innerHTML = "Light";
    element.classList.toggle("light-mode");
  } else if ((themeIcon.src.includes = "moon-sun.svg"))
    themeIcon.setAttribute("src", "./assets/imgs/icon-moon.svg");
}

changeThemeButton.addEventListener("click", changeTheme);
