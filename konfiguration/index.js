
require("dotenv").config();
const express = require('express');
const app = express();

// app.length('/',(req) => {
//     response.send("Hello")

// })

// app.listen(port, function(){
//     console.log("hello")
// })

// external config

let a = process.env.NAMA

app.get('/',(req,res) => {
    //  jika di port 5000 maka akan mengeluarkan poduction, jika tidak maka akan mengeluarkan Development
    let status = process.env.PORT == 5000 ? "Production" : "Development"
    res.send(`Hello. anda sedang di halaman : ${a} page.`)
    res.send(a)
})

app.listen(process.env.PORT, function(){
    console.log(`Anda sedang berjalan menggunakan port : ${process.env.PORT}`)
})