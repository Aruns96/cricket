const Player = require('../models/player');

exports.postPlayerData = async (req,res)=>{
    try{
        
        
   const name = req.body.name;
        
    const date = req.body.date;
    const birth = req.body.birth;
    const photo = req.body.photo;
    const matches = req.body.matches;
    const runs = req.body.runs;
    const wickets = req.body.wickets;
      
        const data = await Player.create({name:name,date:date,birth:birth,photo:photo,matches:matches,runs:runs,wickets:wickets});
        res.status(201).json({newPlayerData:data});
    }catch(e){
       
       res.status(500).json({error:e});
    }
  
}

exports.getPlayerData = async (req,res)=>{
    const pname = req.body.pName;
    
    try{
       const data = await Player.findAll({where:{name:pname}});
       res.status(200).json({playerData:data})
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.editPlayerData = async (req,res)=>{
    try{
        
        const userId = req.params.id;
        console.log("id",userId)
       await Player.destroy({where:{id:userId}});
       res.sendStatus(200);
    



       }catch(e){
        res.status(500).json({error:e})
    }


}