import {
  Request,
  Response,
  Router,
} from 'express'
//import User from '../models/User/User'; // On en a déjà parlé, vous vous en rappelez?
//import OrderService from '../services/ordersService'
//import Securing from '../model/Securing';

export default class GenericController {
    public path = "/generic"
    public router = Router()
    public Model:any;
    //public WidgetService = WidgetService()
    constructor(path:string, Model:any){
        this.path = path
        this.Model = Model
        this.initializeRoutes()
    }
    public initializeRoutes() {
        this.router.get(this.path, (...args) => this.get(...args))
        this.router.post(this.path, (...args) => this.create(...args))
        this.router.put(`${this.path}/:id`, (...args) => this.update(...args))
        this.router.delete(`${this.path}/:id`, (...args) => this.del(...args))
        this.router.get(`${this.path}/:id`, (...args) => this.getById(...args))
    }
    create(req:Request,res:Response, next:any){
        var widget = new this.Model(req.body)
        widget.save((err:any, savedWidget:any) => {
            res.status(201).json(savedWidget);
        });
    }
    get(req:Request, res:Response, next:any){
        if (req.query.owner_id) {
            //find by owner, ?owner_id=string
            this.Model.find({ owner_id: req.query.owner_id }, (err:any, widgets:any) => {
                return res.status(200).json(widgets)
            })
        }
        else if (req.query.title) {
            //find by title, ?title=string
            this.Model.find({ title: req.query.title }, (err:any, widgets:any) => {
                return res.status(200).json(widgets)
            })
        }
        else {
            //find all, just /
            this.Model.find({}, (err: any, widgets: any) => {
                return res.status(200).json(widgets);
            })
        }
    }
    getById(req:Request,res:Response, next:any){
        this.Model.findById(req.params.id, (err:any, widget:any) => {
            return res.status(200).json(widget);
        })
    }
    update(req:Request,res:Response, next:any){
        if (req.params.id && req.body) {
            this.Model.updateOne({ _id: req.params.id }, req.body, (err:any, widget:any) => {
                res.sendStatus(200)
            })
        }
    }
    del(req:Request,res:Response, next:any){
        if (req.params.id) {
            this.Model.deleteOne({ _id: req.params.id })
            .then((result:any) => {
                res.sendStatus(200)
            })
        }
    }
}