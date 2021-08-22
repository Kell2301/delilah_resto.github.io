## Proyecto #3 Acamica
Delilah Resto


### Recursos y tecnologías utilizadas
Xampp
Node
ExpressJs
Sequelize
MySQL
JWT
Dotenv
Postman
Swagger
Nodemon

## Clonar proyecto 
https://github.com/Kell2301/delilah_resto.github.io.git

## Instalación de dependencias
npm install

## Crear base de datos
Abrir con XAMPP u otro programa alternativo que soporte MySQL un servidor local
Generar una nueva base de datos llamada `delilahresto`. 
Dentro de la base de datos importar el archivo`/database/delilahresto.sql` contiene el script para crear nuestra base de datos, la cual contiene toda la estructura y datos para poder comenzar con la prueba de esta API.

### Configurar el server 
Primero, entraremos a la siguiente ruta, en donde configuraremos la conexión a la base de datos.
  
 `DelilahRESTO/database/db.config.js`
  
Una vez dentro de ese archivo cambiar los valores de los campos `port` , `user` , `password` por los datos que correspondan a su base de datos.

### Corriendo el servidor  
Para correr el servidor deberíamos ejecutar el siguente comando:
  node app.js  






