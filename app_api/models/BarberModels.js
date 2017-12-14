 var mongoose = require('mongoose');
 
 
 var BarberSchema = new mongoose.Schema({
     
            BarberID:{
                type: Number,
                required: [true, 'ID is required']
            },
            BarberFirstName: String,
            BarberLastName: String,
            TopSkills: [String],
            YearsExperienced: Number,
            BarberWorkPlace: String

 });
 
mongoose.model('BarberData', BarberSchema, 'BarberData');