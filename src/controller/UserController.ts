import { Request, Response } from "express";
import { knex } from '../services/connection';
import { User } from '../types/User';

export const getUser = async (req: Request, res: Response) => {
    const { name, id } = req.params
    try {
        const user = await knex<User>('users')
            .select('*')
            .where({ id: Number(id) })
            .andWhere({ name: name }).first()

        if (!user) {
            return res.status(404).json({ message: 'usuario não existe' })
        }

        return res.status(200).json(user)
    } catch {
        return res.status(500).json({ message: "Erro no servidor!" })
    }
}

export const setRegisterUser = async (req: Request, res: Response) => {
    const {
        name,
        linkedin,
        github,
        description
    } = req.body
    try {
        const user = await knex<User>('users').insert({
            name,
            linkedin,
            github,
            description
        }).returning('*')

        return res.status(201).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro no servidor!" })
    }
}