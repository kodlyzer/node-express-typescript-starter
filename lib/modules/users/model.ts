import { ModificationNote } from '../common/model';

export interface User {
  _id?: String;
  name: {
    firstName: String;
    lastName: String;
  }
  email: String;
  phoneNumber: String;
  gender: String;
  isDeleted?: Boolean;
  modificationNotes: ModificationNote[]
}