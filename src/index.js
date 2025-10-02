const express = require('express');
const {ServerConfig, Logger} = require('./Config')
const apiRoutes = require('./Routes')
const app = express();


app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Server is Listning on Port Number ${ServerConfig.PORT}`);
    // Logger.info("Sucessfully Stated the server")
})