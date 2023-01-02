const mysql = require('mysql12');
const inquirer = require('inquirer');
const table = require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
},
);

function init(){
    inquirer.prompt({
        type: "list",
        message: "Select one of the options below: ",
        choices: [
            "View All Departments",
            "View All Employees",
            "View All Roles",
            "Add A Department",
            "Add An Employee",
            "Add A Role",
            "Update An Employee's Role",
            "Exit"
        ],
        name: "selection"
    })
    .then(answers => {
        switch(answers.selection) {
            case "View All Departments":
                db.query(`SELECT * FROM department`, function (err, results){
                    console.table(results);
                    init();
                })
                break;
            case "View All Employees":
                db.query(`SELECT * FROM employee`, function (err, results){
                    console.table(results);
                    init();
                })
                break;
            case "View All Roles":
                db.query(`SELECT * FROM role`, function (err, results){
                    console.table(results);
                    init();
                })
                break;
            case "Add A Department":
                inquirer.prompt({
                    type: 'input',
                    message: "What is the name of the department you wish to add?",
                    name: "department",
                })
                .then(function(response){
                    db.query(`INSERT INTO department (name) VALUES (?)`);
                    init();
                })
                break;
        }
    })
}

init()