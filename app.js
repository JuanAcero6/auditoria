//Definimos las constantes a usar
const DBConnector = require('./dbconnector.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8484;

//Iniciamos la app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', router);

//Función para que nos traiga adecuadamente el json
function toJson(data) {
  return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v}n` : v)
      .replace(/"(-?\d+)n"/g, (_, a) => a);
}

//CRUD DE USUARIOS//
router.route('/users').get(async(req,res)=>{
  result = await DBConnector.query("SELECT * FROM usuarios")
  res.json(toJson(result));
});

router.route('/user/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("SELECT * FROM usuarios WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/user/add').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "INSERT INTO usuarios(dni, nombre, apellido, email) VALUES(?,?,?,?)", 
    [req.body.dni, req.body.nombre, req.body.apellido, req.body.email])
  res.json(toJson(result));
});

router.route('/user/delete/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("DELETE FROM usuarios WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/user/update').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "UPDATE usuarios SET nombre=?, apellido=?, email=? WHERE id=?" , 
    [req.body.nombre, req.body.apellido, req.body.email, req.body.id])
  res.json(toJson(result));
});
///CRUD DE EMPLEOS//

router.route('/empleos').get(async(req,res)=>{
  result = await DBConnector.query("SELECT * FROM empleos")
  res.json(toJson(result));
});

router.route('/empleo/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("SELECT * FROM empleos WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/empleo/add').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "INSERT INTO empleos(nombre, descripcion) VALUES(?,?)", 
    [req.body.nombre, req.body.descripcion])
  res.json(toJson(result));
});

router.route('/empleo/delete/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("DELETE FROM empleos WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/empleo/update').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "UPDATE empleos SET nombre=?, descripcion=? WHERE id=?" , 
    [req.body.nombre, req.body.descripcion, req.body.id])
  res.json(toJson(result));
});

////////////////////////

//Funcion principal api
router.route('/').get((req,res)=>{
  res.json("Nuesta API esta Funcionando")
});

//Funcionamiento 
app.listen(port);

console.log("Inicio en el puerto " + 'http://localhost:'+port);