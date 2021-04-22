const express = require('express');
const sequelize = require('../config/database');

const EmployeeRouter = express.Router();

EmployeeRouter.route('/:SearchCriteria/:search/:sortBy/:offset/:limit').get((req, res, next) => {
    const requestSessionID = req.sessionID; // request Session Id
    var k;
    console.log("in route:", requestSessionID, global.userSessionObject)

    for (let storedSessionId in global.userSessionObject) {
        console.log("in for :", storedSessionId)
        if (storedSessionId === requestSessionID) { // if request and stored session id matches then hes valid user
            console.log("inifffffffffffff:", storedSessionId)
            k = true;
            // if session id is not in our store then he is not considered as authenticated

        }
    }
    console.log("END OF FOR LOOP", k)
    if (k === true) {
        console.log("in if k ")
        sequelize.query(`select user.employeeID,FirstName,LastName,emailID,Organization from employee left join user on employee.employeeID=user.employeeID 
        where ${req.params.SearchCriteria}='${req.params.search.toLowerCase()}' order by ${req.params.sortBy} LIMIT ${req.params.offset},${req.params.limit}`)
            .then(result => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.json({ success: true, info: null, result: result[0] });
            })
            .catch(err => { res.status(400).json({ success: false, info: err.status, result: null, message: err }) })
    }
    else {
        console.log("else sattement")
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json({ success: true, info: null, result: 'redirect' });
    }
});

module.exports = EmployeeRouter;