import mongoose  from 'mongoose';

const tripregschema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    traveldate:{
        type:Date,
        required:true
    },
   numberofmember:{
    type:Number,
    required:true
   },
   adharcardnumber:{
    type:Number,
    required:true
   },
   additionalinformation:{
    type:String,
    required:true
   }

})
const  tripreg = mongoose.model('tripreg', tripregschema);
export default tripreg;