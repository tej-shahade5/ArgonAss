import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userModel from './model/userSchema.js';

const app = express();
app.use(express.json());
app.use(cors());

const MONDOB_URL = "mongodb+srv://tejasshahade5:code%402803@cluster0.7sxfuki.mongodb.net/?retryWrites=true&w=majority";
try {
    mongoose.connect(MONDOB_URL, {useNewUrlParser:true});
    console.log('Database connected successfully!');
} catch (error) {
    console.error('Error while connecting with the database ', error.message);
}

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    userModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success");                
            }
            else {
                res.json("Password is incorrect!");
            }
        } else {
            res.json("The record existed! Sign Up first.");
        }
    })
});

app.post('/register',(req,res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
    console.log(req.body);
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
})
