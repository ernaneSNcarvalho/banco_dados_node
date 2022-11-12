import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql';
import { Product } from '../models/Product';
import {User} from '../models/User';
import {Op} from 'sequelize';

export const novoUsuario = async (req: Request, res: Response) => {
    let { name, age } = req.body;

    if(name) {
        const newUser = User.build({ name });

        if(age) {
            newUser.age = parseInt(age);
        }

        await newUser.save();
    }

    res.redirect('/');
}