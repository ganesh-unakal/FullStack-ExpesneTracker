const express = require('express');
const router = express.Router();

const expController = require('../controllers/expense')

router.post('/user/add-expense', expController.postExpense);

router.get('/user/get-expenses', expController.getExpenses);

router.delete('/user/delete-expense/:expenseId', expController.deleteExpense)

// router.put('/user/edit-expense/:expenseId', expController.editExpense);

module.exports = router;