const express = require('express');
const bodyParser = require('body-parser');
var Todo = require('../models/Todo');
var todoRouter = express.Router();
todoRouter.use(bodyParser.json());

todoRouter.get('/todo',function(req,res){
	Todo.find({})
	.then((todo)=>{
		res.statusCode = 200;
		res.setHeader('Content-Type','application/json');
		res.json(todo);
	},(err) => next(err))
	.catch((err) => next(err));
	});

todoRouter.post('/newtodo' , (req,res,next)=>{
	Todo.findOne({project : req.body.project}).then((todo)=>{
		if(todo != null){
			var err = new Error('User '+req.body.project+' already exists');
			err.status = 403;
			next(err);
		}
		else{
			return Todo.create({
				project : req.body.project
			});
		}
	}).then((todo)=>{
		res.statusCode = 200;
		res.setHeader('Content-Type' , 'application/json');
		res.json({status : 'Project added' , todo : todo});
	} , (err)=>next(err))
	.catch((err)=>next(err));
});
module.exports = todoRouter;