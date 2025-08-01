const inventory=require('../model/inventory')

class ComparisonController{

    async CreateInventory(req,res){
        try {
            const { name, price, quantity, category } = req.body
            if (!name || !price || !quantity || !category) {
                return res.status(500).json({
                    status: false,
                    message: "all input field is required"
                })
            }

            const data = new inventory({
                name, price, quantity, category
            })

            const result = await data.save()
            return res.status(201).json({
                status: true,
                message: "data create successfully",
                data: result
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    async allInventory(req,res){
        try {
            const data =await  inventory.find()
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
    //$eq operator
    async eq(req,res){
        try {
            const data =await  inventory.find({"name": { $eq: "Beans"}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
    async gt(req,res){
        try {
            const data =await  inventory.find({"quantity": { $gt: 500}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    //$lt
    async lt(req,res){
        try {
            const data =await  inventory.find({"quantity": { $lt: 500}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    //$gte
    async gte(req,res){
        try {
            const data =await  inventory.find({"quantity": { $gte: 500}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    //$lte
    async lte(req,res){
        try {
            const data =await  inventory.find({"quantity": { $lte: 500}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    //$in
    async in(req,res){
        try {
            const data =await  inventory.find({"price": { $in: [20, 40]}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
    //$nin
    async nin(req,res){
        try {
            const data =await  inventory.find({"price": { $nin: [20, 40]}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
    //$ne
    async ne(req,res){
        try {
            const data =await  inventory.find({"price": { $ne: 40}})
            return res.status(201).json({
                status: true,
                message: "get all data",
                data: data
            })
        }
        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }
}

module.exports=new ComparisonController()