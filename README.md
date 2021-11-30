# To Do List para agendar lo que tengas que realizar en el 💥PROYECTO FINAL💥

## EMPECEMOS... 🚀

_Estas instrucciones permiten que obtengas una copia de este proyecto._

Mirá en **Deployment** para saber cómo hacer funcionar el proyecto.

### Pre-requisitos 📋

1. Cloná este proyecto
```
$ git clone https://github.com/montotox/socratech_pre_proyecto/
```
2. Instala Node.
```
$ sudo apt-get install -y nodejs
```

### Instalación 🔧

1. Ingresá a tu directorio desde la terminal .../socratech_pre_proyecto/server/
2. Ejecutá **npm run dev** para encender el servidor en modo de desarrollo
3. En otra terminal ingresá al directorio .../socratech_pre_proyecto/client/
4. Ejecutá **npm start** para encender el servidor de frontend
5. Necesitas tener MySQL instalado en tu PC
6. Cambiá la configuración de _.../server/config/db.js_ según los datos de conexión de tu MySQL
7. Recordá tener desactivado CORS en tu navegador para no tener problemas al ejecutar ambos servidores desde localhost.
```
var cors = require("cors");
var express = require("express");

var app = express();
app.use(cors());
```

## Ejecutá un test ⚙️

_Podés ejecutar la prueba viendo la teminal donde está siendo ejecutado el server y también la consola del navegador._

Intentá crear alguna tarea, finalizarla y eliminarla. Recargá la web para ver si los cambios persisten (recordá que no estamos
utilizando localStorage, todo está siendo guardado en la base de datos).

### Posibles problemas 🔩

_Revisá tus configuraciones locales._

- Si estas utilizando un archivo externo .env, revisá que estén bien asignadas las variables.
- Chequeá si tenés algún mensaje en la terminal del server, si la base de datos funciona te dirá "Uff..! Conexión correcta, podés respirar".

## Deployment 📦

_Si te animás, podés realizar tu primer deploy Fullstack, el front en Netlify o GH-Pages y el back en Heroku._

1. Agregá el directorio server en Heroku.
2. Cambiá las referencias de dónde estás ejecutando su DB MySQL en server/db.js.
```
var connection = mysql.createConnection({
  host: "[DIRECCIÓN DONDE ESTÁ TU DB]",
  user: "root",
  password: "123",
  database: "todolist",
  port: [PUERTO DONDE ESTÁ TU DB],
});
```
3. En .../socratech_pre_proyecto/client/ ejecutá ***npm build***.
4. Agregá el directorio client/build en Netlify o referencialo en GH-Pages.
5. Disfrutá tu ToDoList!🎉

## Autors ✒️

- **Ricardo Coronel** - _Initial work / Documentation_ - [montotox](https://github.com/montotox)

## Licence 📄

This project is under licence (MIT) - see the file [LICENSE.md](LICENSE.md) for more details.

## Expressions of gratitude 🎁

- Comment with others about this project 📢
- Invite a beer 🍺 or a coffe ☕.
- Give thanks publicly 🤓.
- I'm coding with ❤️.

---
