import {User} from '../types/user';
let graphql = require('graphql');
import {UserType} from '../types/user.type';

export const MutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: {
      type: UserType,
      description: 'Add a User',
      args: {
        username: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
      },
      resolve: (root, args) => {
        var user = new User(
          args.username
        );

        user.id = 42;

        return user;

        //newTodo.id = newTodo._id
        //return new Promise((resolve, reject) => {
          /*newTodo.save(function (err) {
            if (err) reject(err)
            else resolve(newTodo)
          })*/
        //})
      }
    }
  }
});
