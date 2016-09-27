import {User} from '../types/user';
let graphql = require('graphql');

import {UserType} from '../types/user.type';


let Users:User[] = [
  {
    id: 1,
    username: 'Pedro'
  },
  {
    id: 2,
    username: 'Christian'
  }
];


export const userQuery = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      users: {
        type: new graphql.GraphQLList(UserType),
        resolve: () => {
          return Users;
        }
      }
    }
  }
});


