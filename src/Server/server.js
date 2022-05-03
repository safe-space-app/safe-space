import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import locationController from './controllers/locationController.js';
import userController from './controllers/userController.js';
const app = express();
const PORT = 3000;


mongoose.connect('mongodb+srv://admin:squirtle123@cluster0.yt6wc.mongodb.net/Cluster0?authMechanism=DEFAULT');
mongoose.connection.once('open', () => {
  console.log('Connected to database');
})

app.use(cors({origin: 'http://localhost:8080',credentials: true,}));
app.use(express.json());

app.post('/getLocation', locationController.changeLocations, (req, res) => {
  res.status(200).json(res.locals.data)
})

app.post('/createAccount', userController.createAccount, (req, res) => {
  res.sendStatus(200)
})

app.post('/login', locationController.getLocations, userController.login, (req, res) => {
  res.status(200).json(res.locals.data);
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));