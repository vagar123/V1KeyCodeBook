const express = require ('express') //Estamos utilizando express en nuestro proyecto

const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB} = require('./db')

const port = process.env.PORT || 3000

const app = express () // convertir a la constante express en un objeto por el cual vamos a poder trabajar 

app.use(cors())
app.use(bodyParser.json())

conectDB() // estamos ejecutando el modelo de nuesta coneion a la base de datos

require('./routes/user')(app)
require('./routes/genre')(app)
require('./routes/book')(app)

app.listen(port, () =>{
    console.log('Se levantó el servidor')
})