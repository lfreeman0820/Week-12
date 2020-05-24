const db = require('./connection');

const dbRoutes = {
    viewEmp: ()=> db.query(`SELECT * FROM employee`),
    viewRole: ()=> db.query(`SELECT * FROM role`),
    viewDep: ()=> db.query(`SELECT * FROM department`)
}


module.exports = dbRoutes;