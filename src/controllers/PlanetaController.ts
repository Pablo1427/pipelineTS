import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";


class PlanetaController extends AbstractController{
    //Singleton
    //Atributo de clase
    private static _instance: PlanetaController;
    //Metodo de clase
    public static get instance():AbstractController{
        if(!this._instance){
            this._instance = new PlanetaController("planeta");
        }
        return this._instance;
    }
    //Declarar todas las rutas del controlador
    protected initRoutes(): void {
        this.router.post('/agregar',this.postCrearPlaneta.bind(this));
        this.router.get('/consultar',this.getConsultaPlaneta.bind(this));
    }

    private async postCrearPlaneta(req: Request,res: Response){
        try{
            console.log(req.body);
            await db.Planeta.create(req.body); //INSERT
            console.log("Planeta creado");
            res.status(200).send("<h1>Planeta creado</h1>");

        }catch(error:any){
            console.log(error);
            res.status(500).send('Internal server error'+error);
        }
    }

    private async getConsultaPlaneta(req: Request,res: Response){
        try{
            console.log("Consultar planetas");
            let planetas = await db["Planeta"].findAll();
            res.status(200).json(planetas);
        }catch(error:any){
            console.log(error);
            res.status(500).send('Internal server error'+error);
        }
    }

}

export default PlanetaController;