import express from 'express';
import router from './routes/User.js';

const app = express();

app.use(express.json())
app.use('/', router);

app.listen(8000, () => {
    console.log("app is listening on port 8000");
})