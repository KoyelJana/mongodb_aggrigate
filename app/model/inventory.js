const mongoose=require('mongoose')
const Schema=mongoose.Schema


const inventorySchema=new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    category:{
        type:[String],
        require:true
    }
},{
    timestamps:true
})


const inventoryModel=mongoose.model('inventory',inventorySchema)


module.exports=inventoryModel