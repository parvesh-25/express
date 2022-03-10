const express = require('express');

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Halo saya belajar express');
});

app.listen(3000, function(){
    console.log(`Server berjalan di localhost ${port}`)
})