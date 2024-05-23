import Server from './provider/Server';
import {PORT,NODE_ENV} from './config';
import express from 'express';
import PlanetaController from './controllers/PlanetaController';
import PersonajeController from './controllers/PersonajeController';

const server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true})
    ],
    controllers:[
        PlanetaController.instance,
        PersonajeController.instance
    ]
});

server.init();