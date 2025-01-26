const express = require('express');
const app = express();

const authorRouter = require('./routes/authorRouter')
const bookRouter = require('./routes/bookRouter')
const indexRouter = require('./routes/indexRouter')

const requestTime = function(req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)
app.use(myMiddleware)

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on:", PORT)
})

function myMiddleware(req, res, next) {
  console.log("middleware function called")

  req.customProperty = "Hello from myMiddleware"

  next();
}
