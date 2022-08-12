//en la carpeta de controladores se ejecuta la logica de negocio (el controlador recibe la peticion(que viene de rutas) y la responde)


class ControladorHabitacion {

    //dentro de mi clase voy hacer metodos, cada metodo estara asociado a cada uno de las rutas o peticiones que voy atender (get-post.etc)

    constructor(){}
    //buscar habitaciones
    buscarHabitaciones(request,response){
        // siempre un controlador va intentar dar solucion a la Peticion, pero es posible que no lo logre por eso hay que programar un catch
        try{
            
            response.status(200).json({})

        } catch(error){
            //cuando se va por el catch  se fallo resolviendo la peticion

            response.status(400).json({})
        }
    }
 

    //buscar habitacion por ID
    buscarHabitacionPporId(request,response){
        try{
            
            response.status(200).json({})

        } catch(error){
       

            response.status(400).json({})
        }
    }
 
        
    


    //agregar habitacion
    

    agregarHabitacion(request,response){
        try{
            
            response.status(200).json({})

        } catch(error){
       

            response.status(400).json({})
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