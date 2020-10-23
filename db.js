const mongoose = require('mongoose')

const conectDB = () => {
    /* useNewUrlParser: analiza la informacion que se le quiere enviar a mongo. 

    useUnifiedTopology:Escuchar los llmados que hacemos con mongoDB y monitorea que es lo que pasa. 
    */
    mongoose.connect('mongodb+srv://VanessaGarnica:1000786552-53002807@vanessa.hyzkk.mongodb.net/KeyCodeBook?retryWrites=true&w=majority',{ useNewUrlParser:true, useUnifiedTopology:true}, (error) =>{
        if(error){
            console.log('Error: ', error)
        }else {
            console.log('Nos conectamos a la DB')
        }

    })
}

/**
 * module.exports: nos permite exportar una funcion para que pueda ser utilizada en otra parte de nuestro proyecto
 */
module.exports = {conectDB}

