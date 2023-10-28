const express = require('express')
const app = express()
var cors = require('cors')

const sequelize = require('./util/database')
const expenseRouter = require('./routes/expense')
const errorRouter = require('./controllers/404')
const port = 8000;

app.use(cors())

app.get('/', (req,res,next) => {
    res.write("<h1>gani</h1>")
})

app.use(express.json())

app.use(expenseRouter);

app.use(errorRouter.errorController);

sequelize
.sync()
.then(result => {
    // console.log(result)
    app.listen(port, ()=> {
        console.log(`server is running on port ${port}`)
    })
})
.catch (err => {
    console.log(err)
 })


