import express from "express";
import {DemoController} from "../Controller/demo.controller";
import {demoModel} from "../Model/demo.model";

// On définit le routeur de express
const router = express.Router();
const model = new demoModel();
const controller = new DemoController(model);

// Méthode get
router.get('/', controller.getString)
router.post("/", controller.postString)
router.get('/test/:id', controller.getTest)
router.get("/page", controller.getPage)


export default router;