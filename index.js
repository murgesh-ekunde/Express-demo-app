const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars")
const app  = express();
const port = 3001;


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname,"static")));
app.use('/', require(path.join(__dirname, "routes/blog.js")))

app.listen(port, ()=>{
    console.log(`Blog app listening at ${port}`)
})