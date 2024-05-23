import {Model,Sequelize} from 'sequelize';
// import TablaController from '../controllers/TablaController';

interface PlanetaAttributes {
    id:number;
    nombre:string;
    poblacion:number;
    sistema:string;
}

module.exports = (sequelize:any,DataTypes:any) => {
    class Planeta extends Model<PlanetaAttributes> implements PlanetaAttributes{
        public id!:number;
        public nombre!:string;
        public poblacion!:number;
        public sistema!:string;

        static associate(models:any){

        }

    }
    Planeta.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        poblacion:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        sistema:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        modelName:'Planeta'
    });
    return Planeta;

}