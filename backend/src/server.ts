import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'OpenCore Config.plist API is running' });
});

// TODO: Add routes
// app.use('/api/configs', configRoutes);
// app.use('/api/hardware', hardwareRoutes);
// app.use('/api/validation', validationRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
