
module.exports=app=>{
    
    const router=require("express").Router()
    const users=require('../controller/db.usercontroller')

    router.post("/saveData",users.create)

    router.get('/getAllUsers',users.findAll)

    router.get('/getSingleUser/:id',users.find)
    app.use("/api",router)


}