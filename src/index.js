// importando a biblioteca express
import express from "express";

// guardando o express na constante app
const app = express();

// criando primeira rota GET respondendo com uma mensagem
app.get("/api/ping", (request, response) => {
  response.send({
    message: "pong",
  });
});

// criando servidor na porta 8000
app.listen(8000, () => {
  console.log("Servidor funcionando na porta 8000...");
});
