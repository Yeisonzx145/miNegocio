require("dotenv").config();
const express = require('express')

const morgan = require('morgan')
const cors = require('cors')

const port = process.env.PORT || 3001;
const routes = require('./routes/routes')

const {sequelize} = require('./db')

const server = express()

const corsOption = {
    origin: "*",
}

server.use(cors(corsOption))
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