const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

rl.question('Ingrese el nombre del archivo que quiere crear: ', (name) => {

  const layout = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name}</title>
<link rel="stylesheet" href="../UI/posts.css">
</head>
<body>
<header>
  <div class="nav">
    <div class="btn">
      <a href="../index.html" id="main">Main</a>
      <a href="../browse.html" id="browse">Browse</a>
      <a href="../search.html" id="search">Search</a>
    </div>
  </div>
</header>

<!-- Titulo -->

<div class="box">
<div class="mybox">
<h1 id="title">${name}</h1>
</div>
</div>



<script src="../client/app.js"></script>
</body>
</html>`

  fs.writeFile(`docs/${name}.html`, layout,  (error) => {
    if (error) {
      throw error;
    }

    console.log(`El archivo ${name} ha sido creado!!`);
  });
  
  rl.close();
});
