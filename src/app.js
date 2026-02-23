import express from 'express';
import { PORT } from './config/server.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is runnging on http://Localhost:${PORT}`);
})