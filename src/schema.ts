import { buildSchema } from "graphql";
const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
        age: Int
        posts: [Post]
    }
    type Post {
        post: String
    }
    type Query {
        user: User
    }
`);
export default schema;