//Import express/graphql dependencies
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Identifier } from 'typescript';
import schema from './schema';
// import resolvers from './resolvers';

//Use express reuests
const app = express()

//Get request test
app.get ('/', (req, res) => {
  res.send ('Hello World!')
})

//Class for User
class User {
  name: string;
  email: string;
  age: number;
  stores: string[];
  constructor(name: string, email: string, age : number, stores : string[] ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.stores = stores;
  }
}
const userDatabase: any = {};


//Function to create a new user
const createUser = (args: { 
  input: { 
    id: Identifier;
    name: string;
    email: string;
    age: number;
    stores : string[];
  }
 }): User => {
  {
    const id = require('crypto').randomBytes(10).toString('hex');
    userDatabase[id] = args.input.id;
    return  new User( args.input.name, args.input.email, args.input.age, args.input.stores);
    }
  }


const root = {
  user: () => {
    return {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      age: 35,
      posts: [
        { post: "My first post" },
        { post: "My second post" },
      ],
    }
}}

app.use ('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(3000, () => {
  console.log(`Example app listening on port`)
})