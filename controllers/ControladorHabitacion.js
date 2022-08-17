//en la carpeta de controladores se ejecuta la logica de negocio (el controlador recibe la peticion(que viene de rutas) y la responde)

//En el archivo de controllers se configuran las respuestas 
//uso export para poder usar el controlador y poderlo llamar
 export class ControladorHabitacion {

    //dentro de mi clase voy hacer metodos, cada metodo estara asociado a cada uno de las rutas o peticiones que voy atender (get-post.etc)

    constructor(){}
    //buscar habitaciones
    buscarHabitaciones(request,response){
        // siempre un controlador va intentar dar solucion a la Peticion, pero es posible que no lo logre por eso hay que programar un catch
        try{
            
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos: ["habitacion1","200USD","Televisor por cable"]
            })

        } catch(error){
            //cuando se va por el catch  se fallo resolviendo la peticion

            response.status(400).json({
                mensaje:"Fallo en la consulta" + error,
                datos:null
            })
        }
    }
 

    //buscar habitacion por ID
    buscarHabitacionPporId(request,response){
        ///recibi un parametro que se llama id que viene por la peticion y lo almacene en una variable que se llama identificador
        let identificador = request.params.id
        console.log(identificador)
        try{
            
            response.status(200).json({
                mensaje:"Exito en la consulta " + identificador,
                datos: ["habitacion1","200USD","Televisor por cable"]
            })

        } catch(error){
       

            response.status(400).json({
                mensaje:"Fallo en la consulta" + error,
                datos:null
            })
        }
    }
 
        
    


    //agregar habitacion
    

    agregarHabitacion(request,response){
        let cuerpo=Request.body
        console.log(cuerpo)
        try{
            
            response.status(200).json({
                mensaje:"Exito agregando la habitacion",
                datos: cuerpo
            })

        } catch(error){
       

            response.status(400).json({
                mensaje:"Fallo en la consulta" + error,
                datos:null
            })
        }
    }
 
    


    //Editar habitacion
    editarHabitacion(request,response){
        try{
            
            response.status(200).json({})

        } catch(error){
            

            response.status(400).json({})
        }
    }
 
    


    //eliminar habitacion
    elimarHabitacion(request,response){
        try{
            
            response.status(200).json({})

        } catch(error){
            
            response.status(400).json({})
        }
    }
 
}