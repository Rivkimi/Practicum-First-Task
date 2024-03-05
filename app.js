import express from 'express';
import userRouter from './routes/User.js';
import cors from "cors";
const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter);

app.listen(8000, () => {
    console.log("app is listening on port 8000");
})