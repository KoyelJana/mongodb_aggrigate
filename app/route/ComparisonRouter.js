const express=require('express');
const ComparisonController = require('../controller/ComparisonController');
const router=express.Router();

router.post('/inventory/create',ComparisonController.CreateInventory);
router.get('/inventory/all',ComparisonController.allInventory);
router.get('/inventory/eq',ComparisonController.eq);
router.get('/inventory/gt',ComparisonController.gt);
router.get('/inventory/lt',ComparisonController.lt);
router.get('/inventory/gte',ComparisonController.gte);
router.get('/inventory/lte',ComparisonController.lte);
router.get('/inventory/in',ComparisonController.in);
router.get('/inventory/nin',ComparisonController.nin);
router.get('/inventory/ne',ComparisonController.ne);

module.exports=router