const {DataTypes} = require("sequelize");


module.exports = (sequelize) =>{
    sequelize.define("Product",{
        idProduct:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    })
}