//Definimos las constantes a usar
const DBConnector = require('./dbconnector.js');
const express = require('express');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.PORT || 80;

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
router.route('/personas').get(async(req,res)=>{
  result = await DBConnector.query("SELECT * FROM personas")
  res.json(toJson(result));
});

router.route('/persona/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("SELECT * FROM personas WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/persona/add').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "INSERT INTO personas(dni, nombre, apellido, email) VALUES(?,?,?,?)", 
    [req.body.dni, req.body.nombre, req.body.apellido, req.body.email])
  res.json(toJson(result));
});

router.route('/persona/delete/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("DELETE FROM personas WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/persona/update').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "UPDATE personas SET nombre=?, apellido=?, email=? WHERE id=?" , 
    [req.body.nombre, req.body.apellido, req.body.email, req.body.id])
  res.json(toJson(result));
});
///CRUD DE CREDENCIALES//

router.route('/credenciales').get(async(req,res)=>{
  result = await DBConnector.query("SELECT * FROM credenciales")
  res.json(toJson(result));
});

router.route('/credenciales/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("SELECT * FROM credenciales WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/credencial/add').post(async(req,res)=>{
  const rondasDeSal = 10;
  const palabraSecretaEncriptada = await bcrypt.hash(req.body.pass, rondasDeSal);

  result = await DBConnector.queryWithParams(
    "INSERT INTO credenciales(usuario, pass) VALUES(?,?)", 
    [req.body.usuario,  palabraSecretaEncriptada ])
  res.json(toJson(result));
});

router.route('/credencial/delete/:id').get(async(req,res)=>{
  result = await DBConnector.queryWithParams("DELETE FROM credenciales WHERE id=?", [req.params.id])
  res.json(toJson(result));
});

router.route('/credencial/update').post(async(req,res)=>{
  result = await DBConnector.queryWithParams(
    "UPDATE credenciales SET pass=? WHERE usuario=?" , 
    [req.body.pass])
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
