const employee=require('../model/employee')

class ElementController{

    //$exists
    async exists(req,res){
        try {
            const data =await  employee.find({ "emp_age": { $exists: true, $gte: 30}})
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
    //$type
    async type(req,res){
        try {
            const data =await  employee.find({ "emp_age": { $type: "number"}})
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

module.exports=new ElementController()