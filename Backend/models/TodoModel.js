const mongoose = require("mongoose");

//creating the schema or model for ToDoList
const todoSchema = new mongoose.Schema({
    text: {
        type: String,                     //type of text must be a String and it is require
        require: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema);