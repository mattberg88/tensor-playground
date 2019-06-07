let express = require("express");
let app = express()

app.use(function(req, res, next) {
  console.log(req.url);
  next();
})

app.use(express.static("../static"));

app.listen(8090, function() {
    console.log('serving on 8090')
})