//  SCHEMA BANCO DE DADOS NAO RELACIONAL //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: String,
    image: String,
    category: String,
    content: String,
    slug: String,
    author: String,
    views: Number
},{collections:'news'})

var News = mongoose.model("News",newsSchema);

module.exports = {News};