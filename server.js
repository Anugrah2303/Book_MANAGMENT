import express from 'express'
import ConnectDB from './config/DBConnection.js';
import bookRoutes from './router/Book.Route.js';

const app = express();
const port = 1010;

// Connecting DB //
ConnectDB()

// middleware //
app.use(express.json())

app.use('/api/books', bookRoutes)
app.use('/upload', express.static('upload'))

app.listen(port, ()=> console.log('server is running...'))
