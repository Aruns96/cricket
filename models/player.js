const Sequelize = require("sequelize");

const sequelize = require("../utils/database");


const Player = sequelize.define("player",{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:Sequelize.STRING
  },
  date:{
    type:Sequelize.STRING,
    allowNull:false
   
  },
  birth:{
    type:Sequelize.STRING,
    allowNull:false
    
  },
  photo:{
    type:Sequelize.STRING,
    allowNull:false
   
  },
  matches:{
    type:Sequelize.STRING,
    allowNull:false
   
  },
  runs:{
    type:Sequelize.STRING,
    allowNull:false
  },
  wickets:{
    type:Sequelize.STRING,
    allowNull:false
  }
  


  
})

module.exports = Player;