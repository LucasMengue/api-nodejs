// importando a biblioteca express
import express from "express";

// guardando o express na constante app
const app = express();

// criando um array de customers
const customers = [
  { id: 1, name: "Marcos Vinicius" },
  { id: 2, name: "Maria Eduarda" },
  { id: 3, name: "José Francisco" },
];

// transformando em JSON
app.use(express.json());

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
