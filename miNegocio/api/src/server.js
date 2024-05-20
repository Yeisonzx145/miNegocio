require("dotenv").config();
const express = require('express')

const morgan = require('morgan')
const cors = require('cors')

const port = process.env.PORT || 3001;
const routes = require('./routes/routes')

const {sequelize} = require('./db');
const bodyParser = require("body-parser");

const server = express()

const corsOption = {
    origin: "*",
}

server.use(cors(corsOption))
server.use(bodyParser.json({limit:"10mb",extended:true}));
server.use(bodyParser.urlencoded({limit:"10mb",extended:false}))
server.use(morgan('dev'));
server.use('/',routes);

sequelize
    .sync({force:true})
    .then(()=>{
        console.log('Database & tables created');
        server.listen(port,()=>{
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((err)=>{
        console.log(err);
    });