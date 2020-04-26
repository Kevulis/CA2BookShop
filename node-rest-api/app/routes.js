import { Router } from 'express';
import BookShopController from './controllers/BookShop.controller';
import errorHandler from './middleware/error-handler';

const routes = new Router();

routes.post('/api/BookShop/insert', BookShopController.insert);
routes.post('/api/BookShop/update/:BookShopId', BookShopController.update);
routes.post('/api/BookShop/delete', BookShopController.delete);
routes.get('/api/BookShop', BookShopController.getAll);



routes.use(errorHandler);

export default routes;
