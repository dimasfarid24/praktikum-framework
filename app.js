const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

app.listen(3030, () =>{
    console.log('server berjalan pada port 3030')
});