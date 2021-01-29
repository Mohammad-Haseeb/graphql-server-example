const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const data = require('./CourseData');
    
const resolvers={
  Query:{
    course:()=>data,
  }
     


}


const server = new ApolloServer({ typeDefs ,resolvers});


// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});