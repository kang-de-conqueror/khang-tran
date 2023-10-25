import express from 'express';
import resourceRoutes from './routes/resource.route';

const app = express();

app.use(express.json());
app.use('/resources', resourceRoutes);

export default app;
