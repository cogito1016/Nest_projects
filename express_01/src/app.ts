// eslint-disable-next-line import/no-extraneous-dependencies
import * as express from 'express';

const app: express.Express = express();

const port = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World');
});
