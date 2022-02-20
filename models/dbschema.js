const mongoose = require('mongoose');

const todoschema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        },created_at    : { type: Date, required: true, default: Date.now }
       
        
},

);

const exportingTodoSchema = mongoose.model(
    'todos',todoschema
);

module.exports = exportingTodoSchema;