const { gql } = require('apollo-server');

 const typeDefs = gql`
   type Course{
       BookName:String,
       Age:Int,
       Write:String
   }
   type Book{
       PublishDate:Int
   }
   type Query{
        course:[Course]
        bookDetails:Book
   }
   input messageInput {
    book: String
}
   type messageType {
    book: String
    id: ID 
}
   type Mutation{
       courseCreate(input:messageInput):messageType
   }
`;
module.exports = typeDefs;


