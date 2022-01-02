const mongoose = require('mongoose'); //Requerir mongoose para metodos de conexion

const URI = process.env.MONGODB_URI //process.env hace referencia a variables de entorno y estas funcionan gracias a dotenv
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest' ; 

mongoose.connect(URI, { //Conexion con la base de datos, el objeto abierto es para pasarle parametros pero estos se implementan automaticamente desde la version de mongo 6
  
});

const connection = mongoose.connection; //Estatus de la conexion

connection.once('open', () =>{ //Funcion al conectar
    console.log('DB is connected');
})