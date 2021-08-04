import express from "express"
// @types/express
const app = express();

// Request => Entrando
// Response => Saindo

// PRIMEIRA ROTA GET
app.get("/test-get", (request, response) => {
  return response.send("Olá, NLW");
})

// PRIMEIRA ROTA POST
app.post("/test-post", (request, response) => {
  return response.send("Olá, NLW");
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));