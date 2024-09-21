const express=require('express');
require('dotenv').config();
const{installHandler}=require('./apiHandler');
const{ connection }=require('./database');

const PORT=process.env.PORT||6000;
installHandler(PORT);

 (async()=>{
    await connection();
    console.log('[Server is Connected to MongoDb] ')
 })()