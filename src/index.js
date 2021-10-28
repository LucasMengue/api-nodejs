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

// criando rota PUT para adicionar novos customers
app.put("/api/customers/:id", (request, response) => {
  // pegando o parametro id do request e guardando na constante id
  const { id } = request.params;
  // pegando o request e guardando na constante body
  const { body } = request;

  // usando o método findIndex para encontrar o id do customer e guardando na constante index
  const index = customers.findIndex((customers) => customers.id == id);
  customers[index] = body;

  // mostrando customers
  response.send(customers);
});

// criando rota DELETE para adicionar novos customers
app.delete("/api/customers/:id", (request, response) => {
  // pegando o parametro id do request e guardando na constante id
  const { id } = request.params;

  // usando o método filter para encontrar o id do customer e guardando na constante newArray
  const newArray = customers.filter((customers) => customers.id != id);

  // mostrando newArray
  response.send(newArray);
});

// criando servidor na porta 8000
app.listen(8000, () => {
  console.log("Servidor funcionando na porta 8000...");
});
