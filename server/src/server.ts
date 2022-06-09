import express from 'express';
import {routes} from './routes';
import cors from 'cors';

const app = express();

// security control of our frontend
app.use(cors());

// Middleware
app.use(express.json());

// importing from routes.ts
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running');
});
