const express = require("express");
const app = express();
const path  = require("path");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3003;
app.use(express.static('src'));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'src', 'Public', 'index.html'));
})

app.listen(PORT,()=>console.log("http://localhost:3003"));