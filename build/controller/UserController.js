"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRegisterUser = exports.getUser = void 0;
const connection_1 = require("../services/connection");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, id } = req.params;
    try {
        const user = yield (0, connection_1.knex)('users')
            .select('*')
            .where({ id: Number(id) })
            .andWhere({ name: name }).first();
        if (!user) {
            return res.status(404).json({ message: 'usuario não existe' });
        }
        return res.status(200).json(user);
    }
    catch (_a) {
        return res.status(500).json({ message: "Erro no servidor!" });
    }
});
exports.getUser = getUser;
const setRegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, linkedin, github, description } = req.body;
    try {
        const user = yield (0, connection_1.knex)('users').insert({
            name,
            linkedin,
            github,
            description
        }).returning('*');
        return res.status(201).json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro no servidor!" });
    }
});
exports.setRegisterUser = setRegisterUser;
