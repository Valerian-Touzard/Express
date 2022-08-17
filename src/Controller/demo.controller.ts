import {Request, Response} from "express";
import {demoModel} from "../Model/demo.model";

export class DemoController {

    model: demoModel;

    constructor(model: demoModel) {
         this.model = model;
    }

    getString = (req: Request, res: Response) =>{
        const data = this.model.getListNom();
        res.render("demo", {data});
    }

    getPage = (req: Request, res: Response) =>{
        res.render('page');
    }

    getTest = (req: Request, res: Response) =>{
        const id: string = req.params.id;
        res.render('test', {id});
    }

    postString = (req: Request, res: Response) =>{
        res.send(req.body);
    }
}