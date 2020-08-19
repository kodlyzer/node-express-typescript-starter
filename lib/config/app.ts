import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import environment from '../environment';
import { CommonRoutes } from './../routes/common-routes';
import { UserRoutes } from '../routes/user-routes';

class App {
  public app: express.Application;
  public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();
  private commonRoutes: CommonRoutes = new CommonRoutes();
  private userRoutes: UserRoutes = new UserRoutes();
  constructor() {
    this.app = express();
    this.config();
    this.initMongoConnection();
    this.userRoutes.route(this.app);
    this.commonRoutes.route(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initMongoConnection(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  }
}

export default new App().app;