import { User } from './../modules/users/model';
import { Request, Response } from 'express';
import {
  successResponse,
  failureResponse,
  insufficientParameters,
  mongoError
} from '../modules/common/service';
import UserService from '../modules/users/service';

export class UserController {
  private userService: UserService = new UserService();

  public createUser(req: Request, res: Response) {
    if (req.body.name
      && req.body.name.firstName
      && req.body.name.lastName
      && req.body.email
      && req.body.phoneNumber
      && req.body.gender) {
      const userParams: User = {
        name: {
          firstName: req.body.name.firstName,
          lastName: req.body.name.lastName
        },
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        modificationNotes: [{
          modifiedOn: new Date(Date.now()),
          modifiedBy: null,
          modificationNote: 'New user created'
        }]
      }
      this.userService.createUser(userParams, (err: any, userData: User) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse('Created new user successfully', userData, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }

  public getUser(req: Request, res: Response) {
    if (req.params.id) {
      const userFilter = { _id: req.params.id };
      this.userService.filterUser(userFilter, (err: any, userData: User) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse('User details', userData, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }

  public updateUser(req: Request, res: Response) {
    if (req.body.name
      && req.body.name.firstName
      && req.body.name.lastName
      && req.body.email
      && req.body.phoneNumber
      && req.body.gender) {

      const userFilter = { _id: req.params.id };
      this.userService.filterUser(userFilter, (err: any, userData: User) => {
        if (err) {
          mongoError(err, res);
        } else if (userData) {
          userData.modificationNotes.push({
            modifiedOn: new Date(Date.now()),
            modifiedBy: null,
            modificationNote: 'User data updated'
          });
          const userParams: User = {
            _id: req.params.id,
            name: {
              firstName: req.body.name.firstName || userData.name.firstName,
              lastName: req.body.name.lastName || userData.name.lastName
            },
            email: req.body.email || userData.email,
            phoneNumber: req.body.phoneNumber || userData.phoneNumber,
            gender: req.body.gender || userData.gender,
            modificationNotes: userData.modificationNotes
          }
          this.userService.updateUser(userParams, (err: any, userData: User) => {
            if (err) {
              mongoError(err, res);
            } else {
              successResponse('Updated user successfully', userData, res);
            }
          });
        } else {
          failureResponse('Invalid user', null, res);
        }
      })
    } else {
      insufficientParameters(res);
    }
  }

  public deleteUser(req: Request, res: Response) {
    if (req.params.id) {
      this.userService.deleteUser(req.params.id, (err: any, deleteNotes) => {
        if (err) {
          mongoError(err, res);
        } else if (deleteNotes.deletedCount !== 0) {
          successResponse('User deleted successfully', null, res);
        } else {
          failureResponse('Invalid user', null, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }
}