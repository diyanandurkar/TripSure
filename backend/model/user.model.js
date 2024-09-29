import mongoose, { Types }  from 'mongoose';

const userschema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
   confirm:{
    type:String,
    required:true
   }

})
const  User = mongoose.model('User', userschema);
export default User;