import express from "express";
import { addComponent, deleteComponent } from "../controllers/componentController.js";

const router = express.Router();

router.route("/add").post(addComponent);

router.route("/delete").post(deleteComponent);

export default router;