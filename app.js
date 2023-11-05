
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Aplicação está rodando na porta 3000');
});
app.post('/rota', (req, res) => {
    
    console.log(req.body);
    res.send('Recebido!');
});
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/rota', (req, res) => {
  console.log(req.body);
  res.send('Recebido!');
});
