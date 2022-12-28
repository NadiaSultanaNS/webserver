const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'))
})

app.get('/nadia', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/nadia.html'))
})

app.post('/comment', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})