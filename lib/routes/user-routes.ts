import { Application, Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';

export class UserRoutes {

    private userController: UserController = new UserController();

    public route(app: Application) {
        
        app.post('/api/user', (req: Request, res: Response) => {
            this.userController.createUser(req, res);
        });

        app.get('/api/user/:id', (req: Request, res: Response) => {
            this.userController.getUser(req, res);
        });

        app.put('/api/user/:id', (req: Request, res: Response) => {
            this.userController.updateUser(req, res);
        });

        app.delete('/api/user/:id', (req: Request, res: Response) => {
            this.userController.deleteUser(req, res);
        });

    }
}