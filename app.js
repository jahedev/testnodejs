var colors = require("colors")
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("<h1>Hello World! Again!</h1>", 200)
})

app.get("/myfolder", (req, res) => {
  res.send(
    "<h1>You are unauthorized to access this</h1><img src='https://http.cat/401' />",
    401
  )
})

app.listen(port, () => {
  console.log(colors.rainbow(`Example app listening on port ${port}`))
})
