import express from 'express';
import fs from 'fs';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  fs.readFile('./data/phones.json', 'utf-8', (err, data) => {
    if (err != null) {
      res.sendStatus(404);
    }
    res.send(JSON.parse(data));
  });
});

app.listen(PORT);
