import express from "express";

const app = express();

export class demoModel {

    private _listNom: string[] = ["Mélodie","Loriane","Mélissa"]


    public getListNom = () =>{
        return this._listNom;
    }
}