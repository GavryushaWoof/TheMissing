import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use('/dist', express.static('assets'));
// app.get('/api/:name', (req, res) => {
//     const { name } = req.params;
//     const filePath = path.join(__dirname, '../assets/', name);
//     res.sendFile(filePath);
// });
app.get('*', (req, res) => {
    res.send('hello')
});
app.listen(8000);