const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define("User",{
        idUser:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allawNull:false
        },
        lastname:{
            type:DataTypes.STRING,
            allawNull:false
        },
        email:{
            type:DataTypes.STRING,
            allawNull:false
        },
        password:{
            type:DataTypes.STRING,
            allawNull:false
        }
    })
}