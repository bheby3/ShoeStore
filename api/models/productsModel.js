/**
 * Created by brandonhebbert on 2/1/16.
 */


var Mongoose = require('mongoose');

var Product = Mongoose.Schema({
    gender: {
      type: String
    },
    brand: {
        type: String, lowercase: true
    },
    offset: { //0, 1-2, 3-4, 5-6, 6-7, 7-8, 9-10, 11+
        type: Number
    },
    weight: { //4oz-, 4.1-5, 5.1-6, 6.1-7, 12+
        type: Number
    },
    model: {type: String},
    category: [  //road, trail, track, crossCountry,
        {type: String}
    ],
    stability: {  //neutral-min, neutral-moderate, support-min, support-mod, support-max, motion-control
        type: String, lowercase: true
    },
    styles: [ //red, yellow, blue  ARRAY
        {type: String}
    ],
    width: [
    { //narrow, medium, 2E, 4E
        type: Number
    }],
    price: {
        type: String
    },
    description: {
        type: String, lowercase: true
    },
    image: [
        {type: String}
    ],
    //imageAlt: {
    //    type: String
    //}
});

module.exports = Mongoose.model('products', Product);
