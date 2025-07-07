import express from "express";
import { addComponent } from "../controllers/componentController.js";

const router = express.Router();

router.route("/add").post(addComponent);


export default router;