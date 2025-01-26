const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  // res.send('Hello world!')
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  
  res.send(responseText)

  console.log("middleware:", req.customProperty)
  console.log("request time:", req.requestTime)
});

module.exports = indexRouter;
