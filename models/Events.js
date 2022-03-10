
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
    link: String,
    imageName: String,
    imageName2: String,
    videoLink: String,
    toilets: Boolean,
    food: Boolean,
    parking: Boolean,
    wheelChairAccess: Boolean,
    dogFriendly: Boolean,
    showLarge: Boolean
});

module.exports = Events = mongoose.model('Events', EventsSchema);