import mongoose from "mongoose";

const tripschema = mongoose.Schema({
    p_name:String,
    p_title:String,
    p_place:String,
    p_price:Number,
    p_image:String,
    p_type:String
});

const Trip = mongoose.model("trip",tripschema);

export default Trip;

