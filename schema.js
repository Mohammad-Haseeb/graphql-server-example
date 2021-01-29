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
`;
module.exports = typeDefs;


