const express = require('express');
const todo = require('../models/dbschema');


const router = express.Router();



router.get('/', async (req,res)=>{
    try{
        const dataitem = await todo.find({
    
        });
        res.status(200).json({
            data:dataitem,
       
        });
    }
    catch(err){
        console.log(err);
    }

   
});





router.post('/createTask', async (req,res)=>{
    const {title,description} = req.body;
    
    try{
        const dataitem = todo({
            title:title,
            description:description,
        });

        await dataitem.save();

        return res.status(200).json({
            data:dataitem,
        });
     


    }
    catch(error){
        console.log(error);

    }
})


router.delete('/delete',async(req,res)=>{
    const filter = {title:req.body.title};
    try{
        const dataitem = await todo.deleteOne(filter).then((data)=>{
            res.json({
                data:data,
            });

        });

  }catch(error){
        console.log(error);
        }
})


router.put('/update',async(req,res)=>{
    const filter = {title:req.body.title};
    const updatedescription = {description:req.body.description};

    try{
        const dataitem = todo.updateOne(filter,updatedescription,{
            new:true,
        }).then((data)=>{
            res.json({
                data:data});
        });

    }
    catch(error){

    }

})



module.exports = router;