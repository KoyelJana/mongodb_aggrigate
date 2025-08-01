const dbcon=require('./app/config/dbCon')
const dotenv=require('dotenv').config()

const express=require('express')

const app=express()
dbcon()

app.use(express.json())

const comparisonRoute=require('./app/route/ComparisonRouter');
app.use(comparisonRoute);

const logicalRoute=require('./app/route/LogicalRouter');
app.use(logicalRoute);

const elementRoute=require('./app/route/ElementRouter');
app.use(elementRoute);

const port=3020

app.listen(port,()=>{
    console.log(`server running port ${port}`);
    
})