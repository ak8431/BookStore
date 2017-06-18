var mongoose = require('mongoose');

//creating schema
var bookSchema = mongoose.Schema({
	title : {
		type : String,
		required : true
	},
	genre : {
		type : String,
		required : true
	},
	author : {
		type : String,
		required : true
	},
	publisher : {
		type : String
	},
	pages : {
		type : String,
	},
	description : {
		type : String
	},
	image_url : {
		type : String,
		required : true
	},
	buy_url : {
		type : String
	},
	create_date : {
		type : Date,
		default : Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getAllBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}

module.exports.getBook = function(id, callback){
	Book.find({_id: id}, callback);
}

module.exports.addBook = function(book, callback){
	Book.create(book, callback);
}

module.exports.removeBook = function(id, callback){
	var id = {_id : id}
	Book.remove(id, callback);
}

module.exports.updateBook = function(id, book, options, callback){
	var query = {_id : id};
	var update = {
		title : book.title,
		genre : book.genre,
		publisher: book.publisher,
		author : book.author,
		description : book.description,
		image_url : book.image_url,
		buy_url : book.buy_url,
		pages : book.pages
	};
	Book.findOneAndUpdate(query, update, options, callback);
}