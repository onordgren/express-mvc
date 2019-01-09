import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Routes from './routes/index';

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './app/views');

Routes.register(app);

app.listen(port, () => {
  console.log(`We are live on ${port}`);
});
