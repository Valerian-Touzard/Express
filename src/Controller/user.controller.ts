import {Request, response, Response} from "express";
import {userModel} from '../Model/user.model';



export class userController {
    model: userModel;

    constructor(model: userModel) {
        this.model = model;
    }

    /**
     * Retourne la liste de tous les utilisateurs envoyés depuis le modèle.
     *
     * @param res - La réponse de la requête qui sera envoyé à la vue
     *
     * @author Valérian Touzard
     */
    getAllUser = async (req: Request, res:Response) => {
        const listUser = await this.model.getAllUser();
        res.render('user', {listUser});
    }

    /**
     * Retourne les information d'un utilisateurs, en fonction de son id
     *
     * @param req - Les données récupérées via l'id placer dans l'url
     * @param res - La réponse de la requête qui sera envoyé à la vue
     *
     * @author Valérian Touzard
     */
    getOneUser = async (req: Request, res:Response) =>{
        const unUser = await this.model.getUnUser(req.params.id);
        res.render('detail', {unUser});
    }

    /**
     * Envoie une requête de suppression au models via l'id placé dans l'URL
     *
     * @param req - La requête de suppression envoyé au modèle
     * @param res - Affichage de la vue deleteSuccess
     *
     * @author Valérian Touzard
     */
    deleteUser = async (req: Request, res:Response) =>{
        await this.model.deleteUser(req.params.id);
        res.render('delete');
    }

    /**
     * Envoie une requête de création au models via les informations récupérés du formulaire
     *
     * @param req - La requête de création envoyé au modèle avec les informations du formulaire
     * @param res - Redirection vers l'URL addSuccess
     *
     * @author Valérian Touzard
     */

    createUser =  async(req: Request, res:Response) =>{
       const valid =  await this.model.createUser(req.body)
           .then(response => response.status);
        if (valid == 201){
            res.redirect(`/addSuccess`);
        }

    }

    /**
     * Affiche la vue addSuccess
     *
     * @param req - La requête
     * @param res - Affichage de la vue addSuccess
     *
     * @author Valérian Touzard
     */
    success = (req: Request, res:Response) =>{
        res.render('addSuccess')
    }

    /**
     * Affiche le formulaire de création
     *
     * @param req - La requête
     * @param res - Affichage de la vue formulaire
     *
     * @author Valérian Touzard
     */
    getForm = (req: Request, res:Response) =>{
        res.render('formulaire');
    }


    /**
     * Affiche le formulaire de création
     *
     * @param req - La requête qui permet de récupérer les information a afficher dan le formulaire d'un utilisateur (via son id)
     * @param res - Affichage de la vue modification avec les informations de l'utilisateur à modifier
     *
     * @author Valérian Touzard
     */
    formModifUser = async (req: Request, res:Response) =>{
        const userAModif = await this.model.getUnUser(req.params.id);
        res.render('modification', {userAModif});
    }

    /**
     * Envoie une requête de modification au models via les informations récupérés du formulaire de modification
     *
     * @param req - La requête qui permet de récupérer les informations à modifier
     * @param res - Redirige vers l'URL updateSuccess
     *
     * @author Valérian Touzard
     */
    updateUser = async(req: Request, res:Response)=>{
        const valid = await this.model.updateUser(req.body)
            .then(response => response.status);
        res.redirect(`/updateSuccess`);
    }

    /**
     * Affiche la vue updateSuccess
     *
     * @param req - La requête
     * @param res - Affichage de la vue updateSuccess
     *
     * @author Valérian Touzard
     */
    successModif = (req: Request, res:Response) =>{
        res.render('updateSuccess');
    }
}

