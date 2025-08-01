const express=require('express');
const LogicalController = require('../controller/LogicalController');
const router=express.Router();

router.post('/employee/create',LogicalController.createEmployee);
router.get('/employee/all',LogicalController.allEmployee);
router.get('/employee/and',LogicalController.and);
router.get('/employee/or',LogicalController.or);
router.get('/employee/not',LogicalController.not);

module.exports=router