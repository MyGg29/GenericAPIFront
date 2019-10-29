import App from './app'
//import OrderController from './src/controllers/OrderController'
import GenericController  from './src/controllers/GenericController'
import { connection } from './utils/Storage/storage'

import { User, UserRole, Role, Widget, WidgetConfig, WidgetFragment , FragmentContent, FragmentType, FragmentFamilies, Dashboard, DashboardType, DashboardLayout, LayoutElement, LayoutType, NewsPost, PostPriority, PostStatus, AdminLog, LogType } from './src/models'; 
const app = new App([
  //new OrderController(),
  new GenericController("/users",User),
  new GenericController("/usersRole",UserRole),
  new GenericController("/role",Role),
  new GenericController("/widget",Widget),
  new GenericController("/widgetConfig",WidgetConfig),
  new GenericController("/widgetFragment",WidgetFragment),
  new GenericController("/fragmentFamilies",FragmentFamilies),
  new GenericController("/fragmentContent",FragmentContent),
  new GenericController("/fragmentType",FragmentType),
  new GenericController("/dashboard",Dashboard),
  new GenericController("/dashboardLayout",DashboardLayout),
  new GenericController("/dashboardType",DashboardType),
  new GenericController("/layoutElement",LayoutElement),
  new GenericController("/layoutType",LayoutType),
  new GenericController("/newsPost",NewsPost),
  new GenericController("/postPriority",PostPriority),
  new GenericController("/postStatus",PostStatus),
  new GenericController("/adminLog",AdminLog),
  new GenericController("/logType",LogType),
], 1337)
connection.once("open", () =>{
  app.listen()
})