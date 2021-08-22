const jwt = require('jsonwebtoken')

authToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (token == null) {
        return res.status(403).send("Forbidden")
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res
                .status(401)
                .send('El token ha caducado. Por favor, inicie sesión de nuevo.')
        }
        req.user = user
        next()
    })
}

module.exports = authToken