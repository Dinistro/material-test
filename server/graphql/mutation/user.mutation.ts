/// <reference path="../../../node_modules/typescript/lib/lib.es6.d.ts" />

let graphql = require('graphql');
import {UserType} from '../types/user.type';
import {User} from '../../mongo/user.model';

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
        var user = new User({
          username: args.username
        });

        user.id = user._id;

        return new Promise((resolve, reject) => {
          user.save((err) => {
            if (err) {
              reject(err);
            }
            else {
              resolve(user);
            }
          })
        })
      }
    }
  }
});
