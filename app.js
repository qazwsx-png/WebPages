let express = require('express');
let port = process.env.PORT || 3000;

let app = express();

app.use(express.static('public'));

app.listen(port, function() {
    console.log('App started');
});
