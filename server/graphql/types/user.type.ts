let graphql = require('graphql');

export const UserType = new graphql.GraphQLObjectType({
  name: 'user',
  fields: () => {
    return {
      id: {
        type: graphql.GraphQLID
      },
      username: {
        type: graphql.GraphQLString
      }/*,
      gender: {
        type: graphql.GraphQLBoolean
      }*/
    }
  }
});
