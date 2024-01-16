const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

//Ejecutar express atraves de su metodo, pero retorna el objeto de la aplicacion
//Por ello se lo atribuimos a una constante

const app = express();

//Podemos asignarle al puerto una variable y le asignamos una variable de ambiente
//Para al desplegar la aplicacion en un servicio de hosting tomaria ese puerto en caso contrario el 9000
const port = process.env.PORT || 9000;

//Usamos a la APP con el metodo listen
//Para decirle que escuche en una puerta en especifica

//middleware
app.use(express.json());
app.use("/api", userRoutes);


//ROUTES
app.get("/", (req,res)=>{
    res.send("Welcome to my API");
});


//MONGO DB Connection
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log('Connected to MongoDB Atlas')).catch((error)=> console.error(error));

app.listen(port, ()=> console.log('server listening on port ',port));