var express = require("express");
var router = express.Router();
const connection = require("../config/db");
/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", (req, result) => {
  connection.query(
    "SELECT * FROM tasks where isdelete = false",
    (error, res) => {
      if (error) throw error;
      result.send(res);
    }
  );
});

//localhost:4000/tasks/new_task
router.post("/new_task", (req, res) => {
  let { user_id, task, state, isdelete } = req.body;
  console.log("Tarea: " + task);

  let sql = `INSERT INTO tasks (task, user_id, state, isdelete) VALUES ('${task}', ${user_id}, ${state}, ${isdelete})`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send("Nueva tarea registrada");
  });
});

//localhost:4000/tasks/delete
router.post("/delete", (req, res) => {
  let { task_id, isdelete } = req.body;
  console.log("Elimino: " + task_id);

  let sql = `UPDATE tasks SET isdelete = ${isdelete} WHERE task_id = ${task_id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send("Tarea eliminada o activada");
  });
});

//localhost:4000/tasks/finish
router.post("/finish", (req, res) => {
  let { task_id, state } = req.body;
  console.log("Cambio estado a: " + task_id);

  let sql = `UPDATE tasks SET state = ${state} WHERE task_id = ${task_id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send("Tarea finalizada o reactivada");
  });
});

module.exports = router;
