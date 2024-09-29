import Trip from "../model/trip.model.js";


export const gettrip =async(req,res) =>{
    try {
        const trips = await Trip.find()
        res.status(200).json(trips);
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error);
    }
};