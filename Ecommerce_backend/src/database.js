const mongoose = require('mongoose');


 const URI = process.env.MONGODB_URI
 ? process.env.MONGODB_URI 
 :'mongodb://localhost/base' ;


mongoose.connect(URI , {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    // useFindAndModify: false


});

const connection = mongoose.connection;

connection.on('open', () => {
    console.log (`Db connected ${URI}`);
});






