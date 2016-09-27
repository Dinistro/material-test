import { connection } from './db';

export const User = connection.model('User', {
  id: connection.Schema.Types.ObjectId,
  username: String
});
