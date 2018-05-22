var express = require('express');
var app = express();

app.get("/api/whoami", function (request, response) {
  var ip = request.headers["x-forwarded-for"].split(",::")[0];
  var language = request.headers["accept-language"].split(",")[0].split(";")[0];
  var software = request.headers["user-agent"].split("(")[1].split(")")[0];
  response.end(JSON.stringify(
    {"ipaddress": ip,
     "language": language,
     "software" : software} ));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
