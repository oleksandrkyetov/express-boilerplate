const express = require('express')
const app = express()
const port = 3000

app.use(express.text())

app.all('*', (req, res) => {
  console.log(req.body)

  res.send('')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
