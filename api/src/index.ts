import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { Phone } from './types/Phone';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.static('./static'));

app.get('/products', (req, res) => {
  const {sortBy, order, limit, page} = req.query;

  fs.readFile('./static/phones.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404);
      return;
    }

    const sortDirection = order === 'asc' ? -1 : 1;

    const sortedData : Phone[]
      = sortBy
        ? (JSON.parse(data))
          .sort((currentPhone: Phone, nextPhone: Phone) => (
            (currentPhone[sortBy] - nextPhone[sortBy]) * sortDirection
          ))
        : JSON.parse(data);

    const validLimit
      = limit 
        ? Math.min(+limit, sortedData.length)
        : sortedData.length;
    
    const validPage
      = page 
        ? Math.min(+page, Math.ceil(sortedData.length / validLimit))
        : Math.ceil(sortedData.length / validLimit);

    const start = (validPage - 1) * validLimit; 
    const end = Math.min(validPage * validLimit, sortedData.length); 
    const validData = sortedData.slice(start, end);

    res.append('X-Total-Count', String(sortedData.length));
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');
    res.send(validData);
  });
});

app.listen(PORT, () => {
  console.log(`Server was started on ${PORT}`);
});
