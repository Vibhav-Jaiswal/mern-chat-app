import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9999;

app.use('/api', userRouter)

app.listen(PORT,()=>{
    console.log('Server is running...');
})

