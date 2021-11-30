// Requerimos la librería mysql
var mysql = require("mysql");

//Crear la configuración de nuestra conexión
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "todolist",
  port: 3306,
});
//conectamos
connection.connect((error) => {
  //   if (error) {
  //     throw error;
  //   } else {
  //     console.log("conexión correcta");
  //   }
  if (error) throw error;
  console.log("conexion correcta");

  //   error ? console.log(error) : console.log("conexión correcta");
});
// Exportamos la conexión
module.exports = connection;
