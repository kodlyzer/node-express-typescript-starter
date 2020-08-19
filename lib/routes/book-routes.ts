import { Application, Request, Response } from 'express';

export class BookRoutes {
  public route(app: Application) {
    app.get('/api/book', (req: Request, res: Response) => {
      res.status(200).json( {
        message: 'Get Request Successful'
      });
    });

    app.post('/api/book', (req: Request, res: Response) => {
      res.status(200).json({
        message: 'Post Request Successful'
      });
    });
  }
}