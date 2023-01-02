const mysql = require('mysql12');

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
                    console.table(results)
                })
                break;
        }
    })
}

init()