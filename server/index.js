const express = require('express');
const app = express();
const port = 9000 || process.env.PORT;
const quotesRouter = require('./routes/quotes');
const testRouter =require('./routes/test')

app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/quotes', quotesRouter);
app.use('/test',quotesRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
