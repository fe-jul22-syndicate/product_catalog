import express from 'express';
import fs from 'fs';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.static('./static'));

app.get('/products', (req, res) => {
  const {limit, page} = req.query;

  fs.readFile('./static/phones.json', 'utf-8', (err, data) => {
    if (err != null) {
      res.sendStatus(404);
    }
    const parsedData = JSON.parse(data);

    const validLimit
    = limit 
      ? Math.min(+limit, parsedData.length)
      : parsedData.length;
    
    const validPage
      = page 
        ? Math.min(+page, Math.ceil(parsedData.length / validLimit))
        : Math.ceil(parsedData.length / validLimit);

    const start = (validPage - 1) * validLimit; 
    const end = Math.max(validPage * validLimit, parsedData.length); 
    const validData = parsedData.slice(start, end);

    res.append('X-Total-Count', String(parsedData.length));
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');
    res.send(validData);
  });
});

app.listen(PORT, () => {
  console.log(`Server was started on ${PORT}`);
});
