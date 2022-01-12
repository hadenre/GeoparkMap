//Route location Data structure
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoutesSchema = new Schema({
    name: String,
    category: String,
    longitude: String,
    latitude: String,
    shortDescription: String,
    imageName: String
});

module.exports = Routes = mongoose.model('Routes', RoutesSchema);
