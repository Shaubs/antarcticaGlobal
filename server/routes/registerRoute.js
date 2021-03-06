const express = require('express');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const RegisterRouter = express.Router();


RegisterRouter.route('/:EmailID')
    .get((req, res, next) => {
        check(req.params.EmailID.toLowerCase()).then(msg => {
            console.log(msg)
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.json({ success: true, info: null, result: msg });
        })
    })
RegisterRouter.route('/').post((req, res, next) => {
    console.log("inserting");
    insert(req).then(msg => {
        console.log(msg)
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json({ success: true, info: null, result: msg });
    })
})

function check(email) {
    var msg
    return sequelize.query(`select emailID from user where emailID='${email}'`).then(result => {
        if (result[1].length > 0) {
            msg = 'Present'

        }
        else {
            console.log('new user has to be registered');
            msg = 'Not'
        }
        return msg

    }).catch(err => { return err })
}

async function insert(req) {
    var msg;
    var hash;

    try {
        hash = await bcrypt.hash(req.body.Password, 10)
        return await sequelize.query(`INSERT INTO employee(employeeID,LastName,FirstName,Organization) VALUES('${req.body.EmployeeID.toLowerCase()}','${req.body.LastName.toLowerCase()}','${req.body.FirstName.toLowerCase()}','${req.body.OrganizationName.toLowerCase()}');` +
            `INSERT INTO user(employeeID,emailID,password) VALUES('${req.body.EmployeeID.toLowerCase()}',
            '${req.body.EmailID.toLowerCase()}','${hash}')`).then((result) => {

                console.log("done");
                msg = 'Done';
                return msg;
            }).catch((err) => { return err })
    }
    catch (e) {
        console.log(e)

    }
}


//insert into user(employeeID,emailID,password) values('${req.body.EmployeeID}','${req.body.EmailID}','${req.body.Password}')
// INSERT INTO employee(employeeID,LastName,FirstName,Organization) VALUES('${req.body.EmployeeID}','${req.body.LastName}','${req.body.FirstName}','${req.body.OrganizationName}');

module.exports = RegisterRouter;

