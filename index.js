const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const port = process.env.PORT || 3000

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
  res.render('index', { data: process.env.data })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
