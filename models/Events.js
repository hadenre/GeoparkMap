//Pin location Data structure
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
    name: String,
    category: String,
    streetAddress: String,
    cityTown: String,
    postcode: String,
    longitude: String,
    latitude: String,
    startDate: String,
    endDate: String,
    openingTimes: String,
    shortDescription: String,
    toilets: Boolean,
    food: Boolean,
    parking: Boolean,
    wheelChairAccess: Boolean,
    dogFriendly: Boolean,
    link: String,
    imageName: String
});

module.exports = Events = mongoose.model('Events', EventsSchema);