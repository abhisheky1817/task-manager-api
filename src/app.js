import express from 'express';
import { PORT } from './config/server.js';

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
   res.send("Hello World");
   res.end();
});

app.listen(PORT, ()=>{
    console.log(`Server is runnging on http://Localhost:${PORT}`);
})