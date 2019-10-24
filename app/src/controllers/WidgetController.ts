import {
  Request,
  Response,
  Router,
} from 'express'
import Widget from '../models/Widget/Widget'; // On en a déjà parlé, vous vous en rappelez?
//import OrderService from '../services/ordersService'
//import Securing from '../model/Securing';

export default class WidgetController {
    public path = "/widget"
    public router = Router()
    //public WidgetService = WidgetService()
    constructor(){
        this.intializeRoutes()
    }
    public intializeRoutes() {
        this.router.get(this.path, this.get)
        this.router.post(this.path, this.create)
        this.router.put(`${this.path}/:id`, this.update)
        this.router.delete(`${this.path}/:id`, this.del)
        //this.router.get(`${this.path}/:id`, this.get)
    }
    create(req:Request,res:Response){
        var widget = new Widget(req.body)
        widget.save((err:any, savedWidget:any) => {
            return res.status(201).json(savedWidget);
        });
    }
    get(req:Request, res:Response) {
        if (req.query.owner_id) {
            //find by owner, ?owner_id=string
            Widget.find({ owner_id: req.query.owner_id }, (err:any, widgets:any) => {
                return res.status(200).json(widgets)
            })
        }
        else if (req.query.title) {
            //find by title, ?title=string
            Widget.find({ title: req.query.title }, (err:any, widgets:any) => {
                return res.status(200).json(widgets)
            })
        }
        else {
            //find all, just /
            Widget.find({}, (err:any, widgets:any) => {
                return res.status(200).json(widgets);
            })
        }
    }
    getById(req:Request,res:Response){
        Widget.findById(req.params.id, (err:any, widget:any) => {
            return res.status(200).json(widget);
        })
    }
    update(req:Request,res:Response){
        if (req.params.id && req.body) {
            Widget.updateOne({ _id: req.params.id }, req.body, (err:any, widget:any) => {
                res.sendStatus(200)
            })
        }
    }
    del(req:Request,res:Response){
        if (req.params.id) {
            Widget.deleteOne({ _id: req.params.id })
            .then((res:any) => {
                res.sendStatus(200)
            })
        }
    }
}