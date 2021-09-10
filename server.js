// DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000;

// index route
app.get("/",(req,res)=>{
  res.render('index.ejs')
})






app.use(express.static(__dirname + '/public'));


// Listen Route
app.listen(PORT, ()=>{
  console.log("listening on PORT", PORT);
})
