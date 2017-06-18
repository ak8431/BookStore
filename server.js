var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Book = require('./models/book');
Genre = require('./models/genre');
//setting express
var app = express();

//creating a static file
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

//connecting to database
mongoose.connect('mongodb://localhost:27017/bookstore');
// var db = mongoose.connection();

//apis for genres
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, data){
		if(err) throw err;
		res.json(data);
	});
});

app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenre(genre, function(err, data){
		if(err) throw err;
		res.json(data);
	});
});

//books apis
app.get('/api/allBooks', function(req, res){
	Book.getAllBooks(function(err, data){
		if(err) throw err;
		res.json(data);
	});
});

app.get('/api/book/:_id', function(req, res){
	var id = req.params._id;
	Book.getBook(id, function(err, data){
		if(err) throw err;
		res.json(data);
	});
});

app.post('/api/book', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, data){
		if(err) throw err;
		res.json(data);
	});
});

app.delete('/api/book/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, data){
		if(err) throw err;
		res.json(data);
	});
});

app.put('/api/book/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, data){
		if(err) throw err;
		res.json(data);
	});
});

//starting server
var port = process.env.port || 4003;
app.listen(port, function(err){
	if(err){
		console.log("Error Starting server \n" + err);
	}else{
		console.log("Server started successfully on " + port);
	}
});