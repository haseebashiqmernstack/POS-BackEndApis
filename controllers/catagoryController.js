const Catagories=require('../models/catagory');

exports.Catagory=Object.create({
Register: async (req,res) => {
    console.log(req.file)
    try {
        const catagory=new Catagories({
            name:req.body.name,
            image:req.file.filename
        });
        await catagory.save((_error,_cata)=>{
            if(_error) return res.status(400).json(_error.message);
            if(_cata) return res.status(201).json({message:"added successfull"})
        })
    } catch (error) {
        return res.status(500).json(error.message);
    }  
},
GetCatagories:async (req,res)=>{
   try {
       await Catagories.find()
       .exec((_error,_cata)=>{
        if(_error) return res.status(400).json(_error.message);
        if(_cata) return res.status(200).json({_cata});
       })
   } catch (error) {
    return res.status(500).json(error.message);
   }
}
})