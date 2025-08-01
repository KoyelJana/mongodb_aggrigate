const express=require('express');
const ElementController = require('../controller/ElementController');
const router=express.Router();

router.get('/employee/exists',ElementController.exists);
router.get('/employee/type',ElementController.type);

module.exports=router