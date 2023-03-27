"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("./controller/UserController");
const rotas = (0, express_1.Router)();
rotas.get('/:name/:id', UserController_1.getUser);
rotas.post('/generate', UserController_1.setRegisterUser);
exports.default = rotas;
