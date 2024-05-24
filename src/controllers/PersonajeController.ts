import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import PersonajeModel from "../modelsNOSQL/personajeNOSQL";


class PersonajeController extends AbstractController{
    //Singleton
    //Atributo de clase
    private static _instance: PersonajeController;
    //Metodo de clase
    public static get instance():AbstractController{
        if(!this._instance){
            this._instance = new PersonajeController("personaje");
        }
        return this._instance;
    }
    //Declarar todas las rutas del controlador
    protected initRoutes(): void {
        this.router.post('/agregar',this.postCrearPersonaje.bind(this));
        this.router.get('/consultar',this.getConsultaPersonaje.bind(this));
    }

    private async getConsultaPersonaje(req: Request, res: Response) {
        try {
            const personajes = await PersonajeModel.scan().exec().promise();
            console.log(personajes);
            res.status(200).send(personajes[0].Items);
        } catch(err) {
            res.status(500).send('Internal server error'+err);
        }
    }

    private async postCrearPersonaje(req: Request, res: Response) {
        try {
            console.log(req.body);
            await PersonajeModel.create(req.body);
            console.log("<h1>Personaje creado</h1>");
            console.log(req.body)
            res.status(200).send("<h1>Personaje creado</h1>");
        } catch (err) {
            console.log(err);
            res.status(500).send("Internal server error"+err);
        }
    }
}

export default PersonajeController;