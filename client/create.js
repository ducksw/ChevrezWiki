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
<link rel="stylesheet" href="style.css">
<style>
body {
  font-family: 'Cascadia Mono', monospace;
  font-size: 13px;
  max-width: 900px;
}

img {
  cursor: pointer;
}

h1 {
  font-size: 30pt;
}
</style>
</head>
<body>
<a href="../index.html">Back...</a>
<!-- Titulo -->
<h1 id="title">${name}</h1>



<script src="../client/app.js"></script>
</body>
</html>`

  fs.writeFile(`posts/${name}.html`, layout,  (error) => {
    if (error) {
      throw error;
    }

    console.log(`El archivo ${name} ha sido creado!!`);
  });
  
  rl.close();
});
