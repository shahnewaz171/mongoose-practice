const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../model/todoSchema');
const Todo = new mongoose.model("Todo", todoSchema);

//GET ALL THE TODOS
router.get('/', async (req, res) => {

});


//GET A TODO BY ID
router.get('/:id', async (req, res) => {

});


//POST A  TODO
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save((err) => {
        if(err) {
            res.status(500).json({
                error: 'There is a server site error!'
            })
        }
        else{
            res.status(200).json({
                message: 'Todo is inserted successfully!'
            })
        }
    });
});


//POST MULTIPLE TODO
router.post('/all', async (req, res) => {

});


//PUT TODO
router.put('/:id', async(req, res) => {

});


//DELETE TODO
router.delete('/:id', async(req, res) => {

});

module.exports = router;