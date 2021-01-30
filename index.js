const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const data = require('./CourseData');
const crypto=require('crypto');
const dataStoring={};
const resolvers = {
  Query: {
    course: () => data,
  },

  Mutation: {
    courseCreate: (_,{input}) => {
           console.log(input.book);
           let id=crypto.randomBytes(10).toString("hex");
           
           dataStoring[id]={id,...input.book};
           console.log(dataStoring);
           let finalData=input.book;
           return {id,...input}

    }
  }

}


const server = new ApolloServer({ typeDefs, resolvers });


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});