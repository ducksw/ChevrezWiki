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
      arr.push(`<div id="box"><a id="links" href="${link}"><b">${wordText}</b></a></div>`);
    }
  }

  if (arr.length === 0) {
    let res2 = document.getElementById('res2');
    res2.innerHTML = `El resultado <b>${input}</b> no fue encontrado.`
    result.innerHTML = "";
    return;
  } else {
    res2.innerHTML = "";
    document.getElementById('input').value = "";
  }

  result.innerHTML = `<b>Search Results</b><div style="display: flex; flex-direction: column;" id="arrLink">${arr.join('')}</div>`;
}

let art = document.getElementById('art');
let lis = document.getElementById('list').children; 
art.innerHTML = `<div id="art"><b>${lis.length}</b> artículos en <b style="color: #5a3696;">español</b></div>`

/*
window.onload = function() {
  let loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    let nameData = Object.keys(loginData)[0];
    let login = document.getElementById('login')
    login.innerHTML = `<b style="font-size: 20px;"><span style="color: black;" >${nameData}</span></b>`;
    console.log(nameData);
  }
}
*/

document.getElementById('input').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    buscar();
  }
});

function rand() {
  let lis = document.getElementById('list').children;
  let res2 = document.getElementById('res2');

  let random = Math.floor(Math.random() * lis.length);
  let randomLink = lis[random].getAttribute('href');

  res2.innerHTML = `<span style="font-size: 30px;">pending...</span>`;

  setTimeout(function () {
    window.open(randomLink, "_self");
    res2.innerHTML = "";
  }, 1000)
}

function index() {
  window.location = "index.html";
}
