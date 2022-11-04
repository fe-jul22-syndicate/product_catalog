import express from 'express';
import fs from 'fs';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.static('./static'));

app.get('/products', (req, res) => {
  fs.readFile('./static/phones.json', 'utf-8', (err, data) => {
    if (err != null) {
      res.sendStatus(404);
    }
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server was started on: ${PORT}`);
});
