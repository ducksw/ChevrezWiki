function loginn() {
  //let login = document.getElementById('login');
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;

  let loginData = JSON.parse(localStorage.getItem("loginData")) || {};

  loginData[name] = password

  localStorage.setItem("loginData", JSON.stringify(loginData));


  window.location.href = "index.html";
  console.log(name);
}

