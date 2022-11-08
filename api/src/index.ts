import express from 'express';
import cors from 'cors';
import * as phoneController from './controllers/phones';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.static('./static'));

app.get('/products', phoneController.getAllByQuery);

app.listen(PORT, () => {
  console.log(`Server was started on ${PORT}`);
});
