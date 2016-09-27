import {MutationType} from './mutation/user.mutation';
let graphql = require('graphql');
import {userQuery} from './querys/user.query';

export const schema = new graphql.GraphQLSchema({
  query: userQuery,
  mutation: MutationType
});
