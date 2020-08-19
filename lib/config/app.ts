import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CommonRoutes } from './../routes/common-routes';
import { BookRoutes } from './../routes/book-routes';

class App {
  public app: express.Application;
  private commonRoutes: CommonRoutes = new CommonRoutes();
  private bookRoutes: BookRoutes = new BookRoutes();
  constructor() {
    this.app = express();
    this.config();
    this.bookRoutes.route(this.app);
    this.commonRoutes.route(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;