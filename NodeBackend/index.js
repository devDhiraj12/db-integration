var express = require("express")
var cors = require("cors")
var app = express();

app.use(cors());
app.use(express.json())

const db=require("./models")

db.mongoose.connect(db.url).then(()=>{
    console.log('Connected to Database !!!')
})

require('./routes/db.routes')(app)

// var sever = app.listen(8889,()=>{
//    var host = "127.0.0.1";
//     var port = sever.address().port;
//     console.log(`Listening at ${port}`);
// })

var sever = app.listen(8889,()=>{
    console.log("post started at 8889")
})