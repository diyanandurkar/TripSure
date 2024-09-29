import express from "express";
import { gettrip } from "../controller/trip.controller.js";

const router = express.Router();


router.get("/",gettrip);

export default router;