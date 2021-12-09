const express = require('express');
const cors = require('cors');
// const fileUpload = require ('express-fileupload')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();

// settings
app.set('port', process.env.PORT || 4000 );


// middlewares
app.use(cors()) ;
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json());

// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/"
// }));

// routes
app.use('/api/users', require('./routes/users.routes') ) 
app.use('/api/products',require('./routes/products.routes.js')) 


module.exports= app;