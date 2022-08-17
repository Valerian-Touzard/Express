import {Request, response, Response} from "express";
import {userModel} from '../Model/user.model';



export class userController {
    model: userModel;

    constructor(model: userModel) {
        this.model = model;
    }

    /*
    Récupère l'ensemble des users
     */
    getAllUser = async (req: Request, res:Response) => {
        const listUser = await this.model.getAllUser();
        res.render('user', {listUser});
    }

    /*
    Récupère les infos d'un user en fonction de son id
     */
    getOneUser = async (req: Request, res:Response) =>{
        const unUser = await this.model.getUnUser(req.params.id);
        res.render('detail', {unUser});
    }

    /*
    Supprime un utilisateur en fonction de sont id
     */
    deleteUser = async (req: Request, res:Response) =>{
        const listUser = await this.model.deleteUser(req.params.id);
        res.render('delete', {listUser});
    }

    /*
    Ajoute un nouvelle utilisateur en prenant les valeurs du formulaire
     */

    createUser =  async(req: Request, res:Response) =>{
       const valid =  await this.model.createUser(req.body)
           .then(response => response.status);
        if (valid == 201){
            res.redirect(`/addSuccess`);
        }

    }

    success = (req: Request, res:Response) =>{
        res.render('addSuccess')
    }

    /*
        Affiche le formulaire
    */
    getForm = (req: Request, res:Response) =>{
        res.render('formulaire');
    }


    formModifUser = async (req: Request, res:Response) =>{
        const userAModif = await this.model.getUnUser(req.params.id);
        res.render('modification', {userAModif});
    }

    updateUser = async(req: Request, res:Response)=>{
        const valid = await this.model.updateUser(req.body)
            .then(response => response.status);
        res.redirect(`/updateSuccess`);
    }

    successModif = (req: Request, res:Response) =>{
        res.render('updateSuccess');
    }
}

