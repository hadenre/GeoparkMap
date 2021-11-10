//Routes for actions on /api
const express = require('express');
const router = express.Router();


var { isAuth } = require('../middleware/isAuth');

const PinPointing = require('../models/PinPoints');

const Events = require('../models/Events');

const Routes = require('../models/Routes');


// PIN DATA
router.post('/addPinPoint', isAuth, (req, res) => {
    try {
        const { name, category, streetAddress, cityTown, postcode, phone, longitude, latitude,
            openingTimes, toilets, parking, wheelChairAccess, dogFriendly, shortDescription, link, imageName, imageName2, imageName3, videoLink, showLarge } = req.body;

        pinPoint = new PinPointing({
            name,
            category,
            streetAddress,
            cityTown,
            postcode,
            phone,
            longitude,
            latitude,
            openingTimes,
            toilets,
            parking,
            wheelChairAccess,
            dogFriendly,
            shortDescription,
            link,
            imageName,
            imageName2,
            imageName3,
            videoLink,
            showLarge
        });
        pinPoint.save();
        res.status(200).redirect('/admin/dashboard');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})


router.get('/getPinPoints', (req, res) => {
    try {
        //PinPoints.find({}, (err, docs) => {
        PinPointing.find({}, null, {sort: {category: -1}}, function(err, docs) {
            if (err) throw err;
            res.status(200).send(docs);
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.delete('/delete/:id', isAuth, (req, res) => {
    try {
        PinPointing.findOneAndDelete({ _id: req.params.id }, (err) => {
            if (err) throw err;
            res.status(200).redirect('/admin/dashboard');
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.post('/update/:id', isAuth, (req, res) => {
    try {
        const { name, category, streetAddress, cityTown, postcode, phone, longitude, latitude,
            openingTimes, toilets, parking, wheelChairAccess, dogFriendly, shortDescription, link, imageName, imageName2, imageName3, videoLink, showLarge } = req.body;
        PinPointing.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name, category, streetAddress, cityTown, postcode, phone, longitude, latitude, 
                openingTimes, toilets, parking, wheelChairAccess, dogFriendly, shortDescription, link, imageName, imageName2, imageName3, videoLink, showLarge
            }
        }, (err) => {
            if (err) throw err;
            res.status(200).redirect('/admin/dashboard');
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

//EVENT DATA
router.post('/addEvents', isAuth, (req, res) => {
    try {
        const { name, category, streetAddress, cityTown, postcode, longitude, latitude, startDate, endDate,
            openingTimes, shortDescription, toilets, parking, food, wheelChairAccess, dogFriendly, link, imageName } = req.body;

        events = new Events({
            name,
            category,
            streetAddress,
            cityTown,
            postcode,
            longitude,
            latitude,
            startDate,
            endDate,
            openingTimes,
            shortDescription,
            toilets,
            parking,
            food,
            wheelChairAccess,
            dogFriendly,
            link,
            imageName
        });
       events.save();
        res.status(200).redirect('/admin/dashboard');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})


router.get('/getEvents', (req, res) => {
    try {
        Events.find({}, (err, docs) => {
            if (err) throw err;
            //console.log(docs);
            res.status(200).send(docs);
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.delete('/deleteEvent/:id', isAuth, (req, res) => {
    try {
        console.log("event deleted");
        Events.findOneAndDelete({ _id: req.params.id }, (err) => {
            if (err) throw err;
            res.status(200).redirect('/admin/dashboard');
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.post('/updateEvent/:id', isAuth, (req, res) => {
    try {
        const { name, category, streetAddress, cityTown, postcode, longitude, latitude, startDate, endDate,
            openingTimes, shortDescription, toilets, parking, food, wheelChairAccess, dogFriendly, link, imageName } = req.body;
       Events.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
               name, category, streetAddress, cityTown, postcode, longitude, latitude, startDate, endDate,
               openingTimes, shortDescription, toilets, parking, food, wheelChairAccess, dogFriendly, link, imageName
            }
        }, (err) => {
            if (err) throw err;
            res.status(200).redirect('/admin/dashboard');
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

// ROUTE DATA
router.post('/addRoutes', isAuth, (req, res) => {
    try {
        const { name, category, longitude, latitude, shortDescription } = req.body;

        routes = new Routes({
            name,
            category,
            longitude,
            latitude,
            shortDescription
        });
        routes.save();
        res.status(200).redirect('/admin/dashboard');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})


router.get('/getRoutes', (req, res) => {
    try {
        Routes.find({}, (err, docs) => {
            if (err) throw err;
            res.status(200).send(docs);
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.delete('/deleteRoute/:id', isAuth, (req, res) => {
    try {
        console.log("route deleted");
        Routes.findOneAndDelete({ _id: req.params.id }, (err) => {
            if (err) throw err;
            res.status(200).redirect('/admin/dashboard');
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

router.post('/updateRoute/:id', isAuth, (req, res) => {
    try {
        const { name, category, longitude, latitude, shortDescription } = req.body;
        Routes.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name, category, longitude, latitude, shortDescription
            }
        }, (err) => {
            if (err) throw err;
            res.status(200).redirect('/admin/dashboard');
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})


module.exports = router;
