import express from 'express';
import {routes} from './routes';

const app = express();

// Middleware
app.use(express.json());

// importing from routes.ts
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running');
});
