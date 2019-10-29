import {
  Request,
  Response,
  Router,
} from 'express'
import GenericController from "./GenericController"

export default class SensorsController extends GenericController {
    constructor(path:string, Model:any){
        super(path, Model)
        this.router.get(`${this.path}/:id/statements`, (...args) => this.pushValues(...args))
    }
    public pushValues(req:Request, res:Response,next:any){
        this.Model.findOne({ id: req.params.id }, (err: any, sensors: any) => {
            sensors.statements.push([new Date(), ...req.body]);
            this.Model.updateOne({id: 1}, sensors, (err:any,affected:any,resp:any) => console.log(err,affected,resp))
            res.sendStatus(200)
        })
    }
    
}