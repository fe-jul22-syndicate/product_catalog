import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT != null || 5000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  const phones = fs.readFileSync('./data/phones.json', 'utf-8');

  res.send(JSON.parse(phones));
});

app.listen(PORT);
