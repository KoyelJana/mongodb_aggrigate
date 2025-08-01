const employee=require('../model/employee')

class LogicalController{

    async createEmployee(req,res){
        try {
            const { emp_name, emp_age, job_role, salary } = req.body
            if (!emp_name || !emp_age || !job_role || !salary) {
                return res.status(500).json({
                    status: false,
                    message: "all input field is required"
                })
            }

            const data = new employee({
                emp_name, emp_age, job_role, salary
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

    async allEmployee(req,res){
        try {
            const data =await  employee.find()
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

    //$and
    async and(req,res){
        try {
            const data =await  employee.find({ $and: [{"job_role": "Store Associate"}, {"emp_age": {$gte: 20, $lte: 30}}]})
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
    //$or
    async or(req,res){
        try {
            const data =await  employee.find({ $or: [{"job_role": "Senior Cashier"}, {"job_role": "Store Manager"}]})
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
    //$nor
    async nor(req,res){
        try {
            const data =await  employee.find({ $nor: [{"job_role": "Senior Cashier"}, {"job_role": "Store Manager"}]})
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
    //$not
    async not(req,res){
        try {
            const data =await  employee.find({ "emp_age": { $not: { $gte: 40}}})
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

module.exports=new LogicalController()