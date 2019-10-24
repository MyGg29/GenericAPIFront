import App from './app'
import OrderController from './src/controllers/OrderController'
import WidgetController from './src/controllers/WidgetController'

const app = new App([
  new OrderController(),
  new WidgetController()
], 1337)

app.listen()
