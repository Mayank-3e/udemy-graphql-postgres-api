const typeDefs = `#graphql
  type Query {
    hello: String
  }
  type Mutation{
    postCreate(title: String!,content: String!): Int!
  }
  type Post{
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    user: User!
  }
  type User{
    id: ID!
    name: String!
    email: String!
    profile: Profile!
    posts: [Post]!
  }
  type Profile{
    id: ID!
    bio: String!
    user: User!
  }
`
export default typeDefs