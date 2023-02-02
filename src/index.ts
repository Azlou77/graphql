import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';


const app = express()

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
app.get ('/', (req, res) => {
  res.send ('Hello World!')
})

app.use ('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(3000, () => {
  console.log(`Example app listening on port`)
})