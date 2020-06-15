var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new mongoose.Schema({
	project: {
        type: String
    }
}, {
        collection: 'todos'
    },{timestamps : true})

module.exports = mongoose.model('Todo' , Todo);