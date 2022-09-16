const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  //res.send("hello");
  /*res.sendFile(
    "D:/DOCUMENTOS/CURSOS/SEMINARIO/SERVIDOR/expressServer/images/hello-world.jpg"
  );*/
  res.sendFile(path.join(__dirname + "/images/hello-world.jpg"));
});

app.listen(3000, () => {
  console.log("server on running on port", 3000);
});
