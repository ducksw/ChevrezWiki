const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre del archivo que quiere crear: ', (name) => {

  const layout = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="title">
  <h1><a href="../index.html">ChevrezWiki</a></h1>
  <hr/>
</div>
<div class="box">
<article>

<!-- Titulo -->
<h1 id="title">${name}</h1>


<!-- Puedes usar el div class parr, para poder poner un parrafo y a lado una image -->
<!-- <div class="parr"></div> -->

</article>
</div>

<script src="../client/app.js"></script>
</body>
</html>`

  fs.writeFile(`posts/${name}`, layout,  (error) => {
    if (error) {
      throw error;
    }

    console.log(`El archivo ${name} ha sido creado con exito`);
  });
  
  rl.close();
});

