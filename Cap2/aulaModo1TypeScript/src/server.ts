import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ menssage: "Hello World!" });
});

app.listen(3333);
