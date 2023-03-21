import express, { request } from 'express'

const app = express();

app.get("/", (request, response) => {
    return response.json({ messager: "Hello World!!!" })
})

app.listen(3333, () => console.log("Server is Running!"));