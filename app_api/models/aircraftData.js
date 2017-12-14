var mongoose = require('mongoose');

//My Schema
var climbDataSchema = new mongoose.Schema({
	weight: Number,
    vfriFlap5: Number,
    vfriFlap10: Number,
    vfriFlap15: Number,
    vclimb: Number
});

mongoose.model('ClimbData', climbDataSchema, 'ClimbData');


//My Schema
var TakeoffSchema = new mongoose.Schema({
	flaps: Number,
	weight: Number,
	above20: Boolean,
	altitude: Number,
	Vr: Number,
	V2: Number,

});

mongoose.model('TakeoffData', TakeoffSchema, 'TakeOffData');

//My Schema
var LandingSchema = new mongoose.Schema({
	flaps: Number,
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number,
	
});

mongoose.model('LandingData', LandingSchema, 'LandingData');