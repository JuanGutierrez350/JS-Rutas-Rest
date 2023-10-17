const express = require('express')

//crear el objeto de la aplicacion 

const app = express()

//url de prueba
app.get('/prueba' , (request , response )=>{
    //EJEMPLO DE RESPONSE
    response.send("Hola")

} )

//uri de bootcamps

//1. Seleccionar todos los bootcamps 
app.get(('/bootcamps'), 
    (request , response) => {
        return response.json({
            success: true,
            msg: "seleccionando todos los bootcamps"
        })
    })

//seleccionar el bootcamp cuyo ID se pase por parametro 

app.get('/bootcamps/:id' , 
        (request , response) => {
            bootcampId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Seleccionando bootcamp cuyo ID es ${bootcampId}`
            }
            
            )
        })

        //3. Crear bootcamp con post

app.post(('/bootcamps'), 
    (request , response) => {
        return response.json({
            success: true,
            msg: "Crear bootcamp"
        })
    })


    //4. Actualizar bootcamp con ID metodo put, patch 

    app.put('/bootcamps/:id' , 
        (request , response) => {
            bootcampId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Actualizando bootcamp cuyo ID es ${bootcampId}`
            }
            
            )
        })


        //5. Eliminar bootcamp con ID 

        app.delete('/bootcamps/:id' , 
        (request , response) => {
            bootcampId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Eliminando bootcamp cuyo ID es ${bootcampId}`
            }
            
            )
        })







        //evidencia 


        //courses 

        //1. Seleccionar todos los courses 
app.get(('/courses'), 
(request , response) => {
    return response.json({
        success: true,
        msg: "seleccionando todos los courses"
    })
})


     app.get('/courses/:id' , 
        (request , response) => {
            coursesId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Seleccionando courses cuyo ID es ${coursesId}`
            }
            
            )
        })

        //3. Crear courses con post

app.post(('/courses'), 
    (request , response) => {
        return response.json({
            success: true,
            msg: "Crear courses"
        })
    })


    //4. Actualizar courses con ID metodo put 

    app.put('/courses/:id' , 
        (request , response) => {
            coursesId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Actualizando courses cuyo ID es ${coursesId}`
            }
            
            )
        })


        //5. Eliminar courses con ID 

        app.delete('/courses/:id' , 
        (request , response) => {
            coursesId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Eliminando courses cuyo ID es ${coursesId}`
            }
            
            )
        })





        //reviews 

        app.get(('/reviews'), 
(request , response) => {
    return response.json({
        success: true,
        msg: "seleccionando todos los reviews"
    })
})

        app.get('/reviews/:id' , 
        (request , response) => {
            reviewsId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Seleccionando reviews cuyo ID es ${reviewsId}`
            }
            
            )
        })

        //3. Crear reviews con post

app.post(('/reviews'), 
    (request , response) => {
        return response.json({
            success: true,
            msg: "Crear reviews"
        })
    })


    //4. Actualizar reviews con ID metodo put 

    app.put('/reviews/:id' , 
        (request , response) => {
            reviewsId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Actualizando reviews cuyo ID es ${reviewsId}`
            }
            
            )
        })


        //5. Eliminar users con ID 

        app.delete('/reviews/:id' , 
        (request , response) => {
            reviewsId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Eliminando reviews cuyo ID es ${reviewsId}`
            }
            
            )
        })







        //users

        app.get(('/users'), 
        (request , response) => {
            return response.json({
                success: true,
                msg: "seleccionando todos los users"
            })
        })

        
        app.get('/users/:id' , 
        (request , response) => {
            usersId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Seleccionando users cuyo ID es ${usersId}`
            }
            
            )
        })

        //3. Crear users con post

app.post(('/users'), 
    (request , response) => {
        return response.json({
            success: true,
            msg: "Crear users"
        })
    })


    //4. Actualizar users con ID metodo put 

    app.put('/users/:id' , 
        (request , response) => {
            usersId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Actualizando users cuyo ID es ${usersId}`
            }
            
            )
        })


        //5. Eliminar users con ID 

        app.delete('/users/:id' , 
        (request , response) => {
            usersId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Eliminando users cuyo ID es ${usersId}`
            }
            
            )
        })




















//deifnir puerto del servidor 

const PUERTO = 4500

//definir servidor 
app.listen( PUERTO , 
            console.log(`Servidor ejecutando en ${ PUERTO }`))