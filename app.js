const express = require('express')

const app = express()
const PORT = 8989

app.use('/', require('./routes/MainRoute'))

app.use(function (req, res, next) {
    res.status(404).json("not found data")
})

app.listen(PORT, () => {
    console.log('Server Start. Port: ' + PORT);
})

