const express = require("express")

const app = express()

app.get("/products", (req, res) => {
    res.send("hello")
})

app.get("/users", (req, res) => {
    res.send("byee")
})

app.listen(3000, () => {
    console.log("listening to the port");
    
})