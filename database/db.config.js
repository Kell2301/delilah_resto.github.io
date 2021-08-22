const Sequelize = require('sequelize');
const user = "root";
const password = "";
const port = "3306";


const sequelize = new Sequelize(`mysql://${user}:${password}@localhost:${port}/delilahresto`);

 
sequelize.authenticate().then(() => {
    console.log('La conexión a la base de datos se ha establecido correctamente');
})
.catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
});

sequelize.sync()
    .then(() => {
        console.log("Tablas creadas")
    })


    
module.exports = sequelize