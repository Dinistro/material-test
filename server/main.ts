import './mongo/db';
import {schema} from './graphql/schema';
const graphql = require('graphql');

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000);

