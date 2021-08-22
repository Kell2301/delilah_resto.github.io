
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const authToken = require('./src/middlewares/authenticate')
const authAdmin = require('./src/middlewares/authAdmin')

const {getUsers,register,login} = require('./src/routes/user_routes')
const products = require('./src/routes/product_routes')
const orders = require('./src/routes/orders_routes')


app.use(bodyParser.json()); 

app.listen("3000", () => {
	console.log(`El servidor se está ejecutando`);
})

app.get("/", (req, res) => {
	res.json({
		message: "Bienvenido a la aplicación Delilah Restó."
	});
})


app.use(require('./src/routes/user_routes', register))
app.use(require('./src/routes/user_routes', login))

app.use(require('./src/routes/product_routes', products))
app.use(require('./src/routes/user_routes', getUsers))
app.use(require('./src/routes/orders_routes', orders))