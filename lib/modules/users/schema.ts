import * as mongoose from 'mongoose';
import { modificationNote } from '../common/model';

const Schema = mongoose.Schema;
const schema = new Schema({
  name: {
    type: {
      firstName: String,
      lastName: String,
    }
  },
  email: String,
  phoneNumber: String,
  gender: String,
  isDeleted: {
    type: Boolean,
    default: false
  },
  modificationNotes: [modificationNote]
});

export default mongoose.model('users', schema);