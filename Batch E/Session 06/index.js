const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //middleware: to convert incoming data into json

/* API */
//HTML output in browser
app.get("/", (req, res) => {
  res.send("<h1>Hello World!!</h1>");
});

//Fetch all records
app.get("/api/employee", (req, resp) => {
  connection.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      resp.status(404).json({ msg: "Error in SQL" });
    } else {
      resp.status(200).json({ msg: result });
    }
  });
});

//Fetch single record
app.get("/api/employee/:id", (req, res) => {
  let empId = req.params.id;
  connection.query(
    `SELECT * FROM employees WHERE emp_id = ${empId}`,
    (err, result) => {
        if(err){
            res.status(404).json({msg: "Error in SQL"})
        }else{
            res.status(200).json({msg: result})
        }
    },
  );
});

//Save record
app.post("/api/employee", (req, res) => {
  let body = req.body;
  connection.query(
    `INSERT INTO employees(emp_name, emp_age, emp_salary, emp_department) VALUES ('${body.name}','${body.age}','${body.salary}','${body.department}')`,
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

//Delete record
app.delete("/api/employee/:id", (req, res) => {
  let id = req.params.id;
  connection.query(
    `DELETE FROM employees WHERE emp_id = ${id}`,
    (err, result) => {
      if (err) {
        return res.status(404).json({ msg: err });
      } else {
        return res
          .status(200)
          .json({ msg: `Record having id: ${id} is deleted successfully!` });
      }
    },
  );
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
