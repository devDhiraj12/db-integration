module.exports=mongoose=>{

    let schema=mongoose.Schema({

        firstName:String,
        lastName:String,
        city:String,

    })

    const User=mongoose.model("User",schema)
    return User
}



