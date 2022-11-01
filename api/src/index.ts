import express from 'express';

const app = express();

const PORT = process.env.PORT != null || 5000;

app.get('/', (req, res) => res.send('Hello from server!'));

app.listen(PORT);
