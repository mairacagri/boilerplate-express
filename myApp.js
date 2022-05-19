let express = require('express');
let app = express();

// const PORT = 4000;

app.get("/", (req, res) =>{
    res.send(`Hello World`)
})


// app.listen(PORT, () => {
//     console.log(`server is running on ${PORT}`);
// })



































 module.exports = app;
