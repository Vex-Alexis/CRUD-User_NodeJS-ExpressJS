const express = require("express");
const userSchema = require("../models/user");

//Este objeto express, va a tener un constructor llamada route

//Este objeto router es lo que vamos a exportar apartir de este archivo
//Y que usaremos en el servidor
const router = express.Router();


//-----RUTAS
//Crear usuario, sera con el metodo post
router.post("/users", (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Obtener todos los usuarios
router.get("/users", (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Obtener un usuario
router.get("/users/:id", (req, res)=>{
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Actualizar un usuario
router.put("/users/:id", (req, res)=>{
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
    .updateOne({_id: id}, { $set: {name, age, email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Eliminar usuario
router.delete("/users/:id", (req, res)=>{
    const { id } = req.params;
    userSchema
    .remove({_id: id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Exportacion para el modulo
module.exports = router;