const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");

//se usa la funcion de express llamada express static para que muestre las imagenes en el index, esto son archivos estaticos
//se coloca la ruta en este caso es la carpeta img donde estan las imagenes
app.use(express.static("img"));

//solicitud a la pagina principal con la diagonal en donde esta la pagina de inicio
app.get("/", (req, res) => {
  //res.send("hello");
  /*res.sendFile(
    "D:/DOCUMENTOS/CURSOS/SEMINARIO/SERVIDOR/expressServer/img/hello-world.jpg"
  );*/
  res.sendFile(path.join(__dirname + "/index.html"));
});

//solicitud para las imagenes en el index.html
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("server on running on port", 3000);
});
