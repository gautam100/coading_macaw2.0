const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //Middleware: convert incoming data into json

/* API */

//HTML output in browser
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

//Fetch all record
app.get("/api/employee", (req, res) => {
  connection.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      res.status(404).json({ msg: "Error in SQL" });
    } else {
      res.status(200).json({ msg: result });
    }
  });
});

//Fetch single record
app.get("/api/employee/:id", (req, res) => {
  let empId = req.params.id;
  connection.query(
    `select * from employees where emp_id = ${empId}`,
    (err, result) => {
      if (err) {
        res.status(404).json({ msg: "Error in SQL" });
      } else {
        res.status(200).json({ msg: result });
      }
    },
  );
});

//insert new record
app.post("/api/employee", (req, res) => {
  let body = req.body;
  connection.query(
    `INSERT INTO employees(emp_name,emp_age, emp_salary,emp_department) VALUES ('${body.name}','${body.age}','${body.salary}','${body.department}')`,
    (err, result) => {
      if (err) {
        return res.status(404).json({ msg: `Error in SQL: ${err}` });
      } else {
        return res
          .status(200)
          .json({ msg: "One record inserted successfully!" });
      }
    },
  );
});

//delete existing record
app.delete("/api/employee/:id", (req, res) => {
  let id = req.params.id;
  connection.query(
    `DELETE FROM employees WHERE emp_id = ${id}`,
    (err, result) => {
      if (err) {
        return res.status(404).json({ msg: err });
      } else {
        //console.log(result.affectedRows)
        if (result.affectedRows > 0) {
          return res
            .status(200)
            .json({ msg: `Record having id : ${id} deleted successfully!` });
        } else {
          return res.status(404).json({ msg: "Record not found!" });
        }
      }
    },
  );
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
