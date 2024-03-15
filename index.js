bla = process.cwd()
__path = process.cwd()
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
// const PORT = process.env.PORT || 4012
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
const express = require('express')
const path = require("path");
var __dirname = path(__filename);

const router = express.Router();
var upload = multer()
var app = express()
 
app.use(express.static(__dirname));

app.get("/", (res, next) => {
res.sendFile(path.join(__dirname, "./inicio.html"))
})
app.use(router);

app.get('/politicadecadastro',(req, res) => {
res.sendFile(path.join(__dirname, "./politica-de-cadastro.html"))})

//////MOSTRA SE O APP FOI ABERTO
/* app.listen(PORT, () => {
console.log('Aplicativo aberto na porta: ' + PORT)
})