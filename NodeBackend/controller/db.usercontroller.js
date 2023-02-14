
const db=require("../models")
const User=db.users

exports.create=(req,res)=>{
    const user= new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        city:req.body.city,
    })

    //save to database
    user.save(user).then((data)=>{
        res.send(data)
    })
}
    
exports.findAll=(req,res)=>{

    User.find()
    .then(data=>{
        res.send(data)
    })
}

exports.find=(req,res)=>{
    let id=req.params.id
    const obj={_id:id} 
    User.findOne(obj)
    .then(data=>{
        res.send(data)
    })
}

exports.update=(req,res)=>{

    const id=req.params.id 

    User.findByIdAndUpdate(id,req.body,{useFindAndModify: true})
    .then(data=>{
        res.send(data)
    })
}

exports.delete=(req,res)=>{
    let id = req.params.id
    const obj = User.deleteOne({_id:id})
    .then(data=>{
        res.send(data)
        console.log(obj)
    })
}