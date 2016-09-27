/// <reference path="../../../node_modules/typescript/lib/lib.es6.d.ts" />


let graphql = require('graphql');

import {UserType} from '../types/user.type';
import {User} from '../../mongo/user.model';

export const userQuery = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      users: {
        type: new graphql.GraphQLList(UserType),
        resolve: () => {
          return new Promise((resolve, reject) => {
            User.find((err, users) => {
              if (err) {
                reject(err);
              } else {
                resolve(users);
              }
            });
          });
        }
      }
    }
  }
});


