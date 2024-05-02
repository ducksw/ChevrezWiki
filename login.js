function loginn() {
  //let login = document.getElementById('login');
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let conn = document.getElementById('connect');
  let perfil = document.getElementById('perfil'); 

  let loginData = JSON.parse(localStorage.getItem("loginData")) || {};

  loginData[name] = true;

  localStorage.setItem("loginData", JSON.stringify(loginData));


  conn.innerHTML = `connect to chevrezWiki as <b style="font-size: 20px;">${name}</b>`
  conn.style.padding = "5px";

  setInterval(function () {
    window.location.href = "index.html";
  },3000)
}

document.addEventListener('DOMContentLoaded', function () {
  // recupera el dato
  let loginData = JSON.parse(localStorage.getItem("loginData")) || {};
  let userName = Object.keys(loginData)[0]; // elije el primer dato que es nombre

  let perfil = document.getElementById('perfil'); 

  if (userName) {
    perfil.innerHTML = userName;
  }
});



