import express from 'express';
import authRoutes from './auth/routes';
const app = express();
const router = express.Router();

app.use('/auth', authRoutes);

export default app;