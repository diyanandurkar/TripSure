import express, { Router } from "express";
import { tripreg } from "../controller/tripreg.controller.js";

const router=express.Router();

router.post("/tripreg",tripreg);

export default router;