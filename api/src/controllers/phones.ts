import { Request, Response } from 'express';
import fs from 'fs';
import * as phoneService from '../servises/phones';

export const getAllByQuery = (req: Request, res: Response) => {
  const sortBy: string = req.query.sortBy as string;
  const order: string = req.query.order as string;
  const limit: string = req.query.limit as string;
  const page: string = req.query.page as string;

  fs.readFile('./static/phones.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404);
      return;
    }

    const parsedData = JSON.parse(data);

    const {validData, length}
      = phoneService.getAllByQuery(sortBy, order, limit, page, parsedData);

    res.append('X-Total-Count', String(length));
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');
    res.send(validData);
  });
};
