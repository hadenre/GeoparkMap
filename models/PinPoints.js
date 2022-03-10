//Pin location Data structure
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PinPointSchema = new Schema({
    name: String,
    category: String,
    streetAddress: String,
    cityTown: String,
    postcode: String,
    phone: String,
    longitude: String,
    latitude: String,
    openingTimes: String,
    toilets: Boolean,
    food: Boolean,
    parking: Boolean,
    wheelChairAccess: Boolean,
    dogFriendly: Boolean,
    shortDescription: String,
    link: String,
    imageName: String,
    imageName2: String,
    imageName3: String,
    videoLink: String,
    showLarge: Boolean,
    date: { type: Date, default: Date.now }
});

module.exports = PinPoints = mongoose.model('PinPoints', PinPointSchema);