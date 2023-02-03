import { buildSchema } from "graphql";
const schema = buildSchema(`
    type User {
        id: ID
        name: String!
        email: String!
        age: Int!
        stores: [Store]
    }
    input UserInput {
        name: String!
        email: String!
        age: Int!

    }
    type Store {
        store: String!
    }
    type StoreInput{
        store: String

    }
    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }

    type Query {
        getUser(id: String): User
        getUsers: [User]
    }
`);
export default schema;