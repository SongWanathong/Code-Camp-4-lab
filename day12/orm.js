const express = require('express')
const app = express( )
const db = require('../models')

db.sequelize.sync({force:true}).then(()=>{

 app.listen(8080,()=>{
     console.log("server run in 8080 ")
 })

})