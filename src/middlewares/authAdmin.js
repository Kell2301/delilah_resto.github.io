const jwt = require('jsonwebtoken')


authAdmin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {
        if (error)
            return res.status(401).send("El token ha caducado. Por favor, inicie sesión de nuevo.")
        console.log(decoded)
        if (decoded.role_id === 1) {
            next()
        } else {
            return res
                .status(403)
                .send('Forbidden')
        }
    })
};

module.exports = authAdmin