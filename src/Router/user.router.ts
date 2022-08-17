import express from "express";
import {userController} from "../Controller/user.controller";
import {userModel} from "../Model/user.model";

// Ondéfinit le routeur de express
const router = express.Router();
const model = new userModel();
const controller = new userController(model);

// Les routes
router.get('/', controller.getAllUser);
router.get('/detail/:id', controller.getOneUser);
router.get('/delete/:id', controller.deleteUser);

router.get('/add', controller.getForm);
router.post('/traitement', controller.createUser);
router.get('/addSuccess', controller.success);

router.get('/modified/:id', controller.formModifUser);
router.post('/traitementModif', controller.updateUser);
router.get('/updateSuccess', controller.successModif);
export default router;