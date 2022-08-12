
//en este archivo SE ENRUTAN O ATIENDEN LAS PETICIONES
import express from'express' //nueva forma para traer express 

//si yo traigo a express puedo crear una variable para personalizar las rutas (end point) de mis servicios
//como se observa a continuacion 


export let rutas = express.Router() //archivo global
//Router m,e permite crear el archivo de rutas, me permite separar

//escribo mis rutas(cada ruta es un servicio)
rutas.get('viajescomfama/v1/habitaciones,',function (req, res) {
    
  res.send('Hello World')
})
rutas.get('viajescomfama/v1/habitacion/id',function (req, res) {
   
  res.send('Hello World')
})
rutas.post('viajescomfama/v1/reserva',function (req, res) {
    
  res.send('Hello World')
})
rutas.put('viajescomfama/v1/reserva/id',function (req, res) {
   
  res.send('Hello World')
})
rutas.delete('viajescomfama/v1/reserva/id',function (req, res) {
    
  res.send('Hello World')
})