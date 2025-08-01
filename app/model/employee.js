const mongoose = require('mongoose')
const Schema = mongoose.Schema


const employeeSchema = new Schema({
    emp_name: {
        type: String,
        require: true
    },
    emp_age: {
        type: Number,
        require: true
    },
    job_role: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
})


const employeeModel = mongoose.model('employee', employeeSchema)


module.exports = employeeModel