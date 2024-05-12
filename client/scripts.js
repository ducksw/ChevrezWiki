function replaceLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function buscar() {
  let input = document.getElementById('input').value.trim().toLowerCase(); 
  let lis = document.getElementById('list').children; 
  let result = document.getElementById('res');

  console.log(lis);

  let arr = [];

  for (let i = 0; i < lis.length; i++) {
    let text = lis[i].textContent.toLowerCase().trim();
    let link = lis[i].getAttribute('href'); 

    if (input == "" || input == null) {
      return 0;
    } else if (text.toLocaleLowerCase().includes(input)) {
      let wordText = text.split(' ').map(replaceLetter).join(' ');
      arr.push(`<div id="box">Search Result -> <a id="links" href="${link}"><b">${wordText}</b></a></div>`);
    } 
  }

  if (arr.length === 0) {
    let res2 = document.getElementById('res2');
    res2.innerHTML = `El resultado <b>${input}</b> no fue encontrado.`
    document.getElementById('input').value = "";
  } 

  //document.getElementById('input').value = "";

  result.innerHTML = `<div style="display: flex; flex-direction: column;">${arr.join('')}</div>`;
}

let art = document.getElementById('art');
let lis = document.getElementById('list').children; 
art.innerHTML = `<div id="art"><span id="arti">Articulos</span> <b style="color: darkred; font-size: 25px;">${lis.length}</b></div>`

window.onload = function() {
  let loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    let nameData = Object.keys(loginData)[0];
    let login = document.getElementById('login')
    login.innerHTML = `<b style="font-size: 20px;"><span style="color: black;" >${nameData}</span></b>`;
    console.log(nameData);
  }
}

document.getElementById('input').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    buscar();
  }
});


function rand() {
  let lis = document.getElementById('list').children; 

  let random = Math.floor(Math.random() * lis.length); 
  let randomLink = lis[random].getAttribute('href'); 
  window.open(randomLink, "_self"); 
}

//rand();

