import express from "express";
import {userController} from "../Controller/user.controller";
import {userModel} from "../Model/user.model";

// Ondéfinit le routeur de express
const router = express.Router();
const model = new userModel();
const controller = new userController(model);

// Les routes
router.get('/', controller.getAllUser);             // Page d'Accueil
router.get('/detail/:id', controller.getOneUser);   // Page de détail d'un user
router.get('/delete/:id', controller.deleteUser);   // Page de suppression d'un user

router.get('/add', controller.getForm);                 // Page du formulaire de création
router.post('/traitement', controller.createUser);      // Page de traitement des datas récupérées du formulaire
router.get('/addSuccess', controller.success);          // Page de succès lors de la création du user

router.get('/modified/:id', controller.formModifUser);      // Page du formulaire de modification
router.post('/traitementModif', controller.updateUser);     // Page de traitement des datas récupérées du formulaire
router.get('/updateSuccess', controller.successModif);      // Page de succès lors de la modification du user
export default router;