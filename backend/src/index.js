 const express = require('express');

 const app = express();

 app.post('/users', (Request, response) => {
     return response.json({
         evento: 'Semana Oministack 11',
         aluno: 'Daniel Simões'
     });
 });

 app.listen(3333);