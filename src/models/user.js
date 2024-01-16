const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        requiered: true
    },
    age:{
        type: Number,
        requiered: true
    },
    email:{
        type: String,
        requiered: true
    }
});

//Extamos exportando el modelo de datos de un usuario
module.exports = mongoose.model("User", userSchema);

