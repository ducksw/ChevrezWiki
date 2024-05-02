function replaceLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function buscar() {
  let input = document.getElementById('input').value.trim().toLowerCase(); 
  let lis = document.getElementById('list').children; 
  //let result = document.getElementById('res');

  let arr = [];

  for (let i = 0; i < lis.length; i++) {
    let text = lis[i].textContent.toLowerCase().trim();
    let link = lis[i].getAttribute('href'); 

    if (text.toLocaleLowerCase().includes(input)) {
      let capitalizedText = text.split(' ').map(replaceLetter).join(' ');
      arr.push(`<div id="box"><a id="links" href="${link}" style="display: block; padding-left: 30px; padding: 1px; text-decoration: none; color: #36c;"><b">${capitalizedText}</b></a></div>`);
    }
  }

  document.getElementById('input').value = "";
  
  //result.innerHTML = `<div style="display: flex; flex-direction: column;">${arr.join('')}</div>`;

  let resultHTML = `<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Resultado de la búsqueda</title></head><body>`;
  resultHTML += `<div id="art">Articulos <b style="color: brown; font-size: 25px;">${lis.length}</b></div>`;
  resultHTML += '<h1 style="font-size: 3rem; text-align: center;">ChevrezWiki (Search)</h1>';
  resultHTML += '<hr/ style="width: 100%;>';
  resultHTML += `<div id="list" style="display: flex; flex-direction: column; color: blue; max-width: 100%; width: 300px;">${arr.join('')}</div>`;
  resultHTML += `<br/>`;
  resultHTML += `<a style="color: black; text-decoration: none;" href="">Click para buscar otro articulo</a>`;
  resultHTML += `</body></html>`;

  document.body.innerHTML = resultHTML;
}

let art = document.getElementById('art');
let lis = document.getElementById('list').children; 
art.innerHTML = `<div id="art">Articulos <b style="color: brown; font-size: 25px;">${lis.length}</b></div>`



window.onload = function() {
  let loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    let nameData = Object.keys(loginData)[0];

    let login = document.getElementById('login')

    login.innerHTML = `<b style="font-size: 20px;">${nameData}</b>`;
    console.log(nameData);
  }
}

document.getElementById('input').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    buscar();
  }
});
