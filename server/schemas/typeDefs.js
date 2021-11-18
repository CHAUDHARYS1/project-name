const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Job {
    _id: ID
    jobtitle: String
    description: String
    company: String
    requirements: String
    linktowebsite: String
    roletype: String
    benefits: String
    salary: String
    additionalinfo: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobs(username: String): [Job]
    job(_id: ID!): Job
  }
`;
module.exports = typeDefs;
