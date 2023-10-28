const Expense = require('../models/expense');

exports.postExpense = async (req,res) => {
    try{
        if(!req.body.amount || !req.body.description || !req.body.category){
            throw new Error('Fill the fields')
        }
        console.log(req.body)
        const amount = req.body.amount
        const description = req.body.description
        const category = req.body.category

        const data = await Expense.create({
            amount : amount,
            description :description,
            category : category
        })
        res.status(201).json({ newExpenses : data})
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error:err
        })
    }
}

exports.getExpenses = async(req,res,next) => {
    try{
        const data = await Expense.findAll()
        res.status(202).json({allExpenses:data})
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}



exports.deleteExpense = async(req,res,next) => {

    try{
        const expId = req.params.expenseId
        await Expense.destroy({where : {id:expId}})
        res.sendStatus(200)
        console.log('b',expId)
    }
    
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

// exports.getSingleExpense = (req,res) => {
//     const { expenseId } = req.params
//     const sqlGet = "SELECT * FROM expenses WHERE id=?";
//     db.query(sqlGet, expenseId, (err, result) => {
//         if(err){
//             console.log(err);
//         }
//         res.send(result);
//     })
// }


// exports.editExpense = (req, res) => {
//     const { expenseId } = req.params;
//     const { amount,description, category } = req.body;
//     const sqlUpdate =
//       "UPDATE expenses SET title=?, amount=?,category=? WHERE id=?";
//     db.query(sqlUpdate, [amount, description ,category, expenseId], (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     });
//   };