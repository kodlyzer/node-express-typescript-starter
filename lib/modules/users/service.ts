import { User } from './model';
import users from './schema';

export default class UserService {
  public createUser(params: User, callback: any) {
    const session = new users(params);
    session.save(callback);
  }

  public filterUser(query: any, callback: any) {
    users.findOne(query, callback);
  }

  public updateUser(params: User, callback: any) {
    const query = {
      _id: params._id
    };
    users.findOneAndUpdate(query, params, callback);
  }

  public deleteUser(_id: String, callback: any) {
    const query = { _id };
    users.deleteOne(query, callback);
  }
}