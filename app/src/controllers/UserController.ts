import {
  Request,
  Response,
  Router,
} from 'express'
import User from '../models/User/User'; // On en a déjà parlé, vous vous en rappelez?
//import OrderService from '../services/ordersService'
//import Securing from '../model/Securing';

export default class UserController {
    public path = "/users"
    public router = Router()
    //public WidgetService = WidgetService()
    constructor(){
        this.initializeRoutes()
    }
    public initializeRoutes() {
        this.router.get(this.path, this.get)
        this.router.post(this.path, this.create)
        this.router.put(`${this.path}/:id`, this.update)
        this.router.delete(`${this.path}/:id`, this.del)
        this.router.get(`${this.path}/:id`, this.getById)
    }
    create(req:Request,res:Response){
        var widget = new User(req.body)
        widget.save((err:any, savedWidget:any) => {
            res.status(201).json(savedWidget);
        });
    }
    get(req:Request, res:Response){
        if (req.query.owner_id) {
            //find by owner, ?owner_id=string
            User.find({ owner_id: req.query.owner_id }, (err:any, widgets:any) => {
                return res.status(200).json(widgets)
            })
        }
        else if (req.query.title) {
            //find by title, ?title=string
            User.find({ title: req.query.title }, (err:any, widgets:any) => {
                return res.status(200).json(widgets)
            })
        }
        else {
            //find all, just /
            User.find({}, (err:any, widgets:any) => {
                return res.status(200).json(widgets);
            })
        }
    }
    getById(req:Request,res:Response){
        User.findById(req.params.id, (err:any, widget:any) => {
            return res.status(200).json(widget);
        })
    }
    update(req:Request,res:Response){
        if (req.params.id && req.body) {
            User.updateOne({ _id: req.params.id }, req.body, (err:any, widget:any) => {
                res.sendStatus(200)
            })
        }
    }
    del(req:Request,res:Response){
        if (req.params.id) {
            User.deleteOne({ _id: req.params.id })
            .then((res:any) => {
                res.sendStatus(200)
            })
        }
    }
}