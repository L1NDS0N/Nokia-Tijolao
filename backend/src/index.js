const express = require('express');

const app = express();

app.post('/app/:telNumber', (req, res) => {
    return res.send({ "message": "ok!" })
    console.log(req.params)
})

app.listen(3333);