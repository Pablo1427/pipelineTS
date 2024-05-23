import  dynamodb from "../services/dynamoService";
import joi from 'joi';
import { PREFIX_NAME } from "../config";

const PersonajeModel = dynamodb.define('personajes', {
    hashKey:'PersonajeId',
    timestamps:false,
    schema: {
        PersonajeId:dynamodb.types.uuid(),
        Nombre:joi.string(),
        Raza:joi.string(),
        Edad:joi.number()
    },
    tableName:`Personajes${PREFIX_NAME}`
});

dynamodb.createTables((err)=>{
    if(err)
        return console.log(err);
    console.log("Tabla creada exitosamente")
})
export default PersonajeModel;