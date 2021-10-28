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

// criando rota GET e mostrando as informações dos customers
app.get("/api/customers", (request, response) => {
  // mostrando o array de customers
  response.send(customers);
});

// criando rota POST para adicionar novos customers
app.post("/api/customers", (request, response) => {
  // constante body guarda as requisições
  const { body } = request;

  // faz um push no array customers para o body
  customers.push(body);

  // apresenta os customers
  response.send(customers);
});

// criando servidor na porta 8000
app.listen(8000, () => {
  console.log("Servidor funcionando na porta 8000...");
});
