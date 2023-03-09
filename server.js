const app = require('./express')
const port = process.env.PORT || 3000
const mysql = require('mysql')

// connect to the database

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Bakari@1',
//     database: 'node_db'
// })

// con.connect((error) => {
//     if (error) throw error

//     console.log('connected!')
// })

app.listen(port, () => console.log(
    `http://localhost:${port}`
))