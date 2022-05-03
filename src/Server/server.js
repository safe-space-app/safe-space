import express from 'express'
import cors from 'cors'
import locationController from './locationController.js'
const app = express();
const PORT = 3000;

app.use(cors({origin: 'http://localhost:8080',credentials: true,}));
app.use(express.json());

app.post('/getLocation', locationController.getLocation, (req, res, next) => {
  res.status(200).json(res.locals.data)
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));