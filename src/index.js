const express = require('express');
const routes =require('./routes') ; // rota errada site routes ?

const app =express();
app.use(express.json());

app.use(routes);

app.listen(3333);