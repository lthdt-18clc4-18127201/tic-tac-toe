import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connection from './dataAccess/connectionDB';
import userRouters from './routes/users';
import siteRouters from './routes';
import authRouters from './routes/auth';

const app = express();
const PORT: string | number = process.env.PORT || 3000;
dotenv.config();

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, PATCH, DELETE",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// Connect to MongoDB
connection();

app.use('/', siteRouters);
app.use('/api/auth', authRouters);
app.use('/users', userRouters);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})