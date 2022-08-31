
// Primeira Aula - Subindo servidor com node

// var http = require('http');
//
// http.createServer(function (req,res) {
//     res.end("Olá");
// }).listen(8081);
//
// console.log("Servidor Rodando!")


// Segunda Aula - introdução ao express

// const express = require('express');
// const app = express();
//
// app.get("/blog", function (req,res){
//     res.send("Bem Vindo ao caminho 'Blog'!");
// })
//
// app.get("/sobre", function (req,res){
//     res.send("Bem Vindo ao caminho 'Sobre'!");
// })
//
// app.get("/ola/:cargo/:nome", function (req,res){
//     res.send(req.params);
// })
//
// app.get("/", function (req,res){
//     res.send("Bem Vindo!");
// })
//
// app.listen(8082, function (){
//     console.log("Servidor Rodando! na URL localhost:8082")
// });

// Terceira Aula - enviando arquivos em Html

const express = require('express');
const app = express();

app.get("/", function (req,res){
    res.sendFile(__dirname + "/html/index.html");
})

app.listen(8082, function (){
    console.log("Servidor Rodando! na URL localhost:8082")
});