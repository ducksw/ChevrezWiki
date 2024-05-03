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

    if (input == "" || input == null) {
      return 0;
    } else if (text.toLocaleLowerCase().includes(input)) {
      let capitalizedText = text.split(' ').map(replaceLetter).join(' ');
      arr.push(`<div id="box"><a id="links" href="${link}" style="display: block; padding-left: 30px; padding: 1px; text-decoration: none; color: #36c;"><b">${capitalizedText}</b></a></div>`);
    }
  }

  document.getElementById('input').value = "";
  
  //result.innerHTML = `<div style="display: flex; flex-direction: column;">${arr.join('')}</div>`;

  // RESULTADO DE BUSQUEDA
  let resultHTML = `<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Resultado de la búsqueda</title></head><body>`;
  resultHTML += `<div id="art" style="font-family: monospace";>Articulos <b style="color: brown; font-size: 25px;">${lis.length}</b></div>`;
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
art.innerHTML = `<div id="art"><span id="arti" onclick="al()">Articulos</span> <b style="color: brown; font-size: 25px;">${lis.length}</b></div>`

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

function al() {
  let listHTML = `<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Resultado de la búsqueda</title></head><body>`;
  listHTML += `<a style="color: blue; text-decoration: none;" href="index.html">Volver...</a>`;
  listHTML += `<h1>TODO EL CONTENIDO</h1>`;

  for (let i = 0; i < lis.length; i++) {
    let linkss = document.getElementById('link');
    let url = linkss.href;
    let nameList = lis[i].textContent;
    listHTML += `<ul id="lis"><li><a href="${url}">${nameList}</a></li></ul>`
  }

  listHTML += `</body></html>`;
  
  document.body.innerHTML = listHTML;
}
