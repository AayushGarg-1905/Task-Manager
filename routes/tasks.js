const express= require('express');
const router=express.Router();

const {getAllTasks}=require('../controllers/tasks')
const {createTask}=require('../controllers/tasks')
const {getTask}=require('../controllers/tasks')
const {updateTask}=require('../controllers/tasks')
const {deleteTask}=require('../controllers/tasks')

router.get('/',getAllTasks)
router.post('/',createTask)
router.get('/:id',getTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);



module.exports=router;