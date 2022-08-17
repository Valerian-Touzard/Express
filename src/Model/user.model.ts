import express, {Response} from "express";
import axios, {AxiosResponse} from "axios";
import 'dotenv/config';
import {UserDto} from "../DTO/user.dto"

const app = express();

export class userModel {

    private _listUsers: any;
    private _unUser: any;

    public getAllUser = async () =>{
        await axios.get(`${process.env.URI}`)
             .then((res: AxiosResponse)=>{
                 this._listUsers = res;
         });
        return this._listUsers;
    }

    public getUnUser = async (id: string) =>{
        await axios.get(`${process.env.URI}/${id}`)
            .then((res: AxiosResponse)=>{
                this._unUser = res.data;
            });
        return this._unUser;

    }

    public deleteUser = async (id: string) =>{
        await axios.delete(`${process.env.URI}/${id}`)
            .then((res: AxiosResponse) =>{
                this._listUsers = res
            });
        return this._listUsers;
    }

    public createUser = (newUser: UserDto) =>{
         return axios.post(`${process.env.URI}`, newUser);
    }

    public updateUser = (updateUser: UserDto) =>{
        return axios.put(`${process.env.URI}/${updateUser.id}`, updateUser);
    }
}