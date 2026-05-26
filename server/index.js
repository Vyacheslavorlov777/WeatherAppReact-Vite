import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/history', async (req, res) => {

  const { city } = req.body;

  const history = await prisma.searchHistory.create({
    data: {
      city
    }
  });

  res.json(history);
});

app.get('/history', async (req, res) => {

  const history = await prisma.searchHistory.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  res.json(history);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});

app.delete('/history', async (req, res) => {

  await prisma.searchHistory.deleteMany();

  res.json({
    message: 'История очищена'
  });
});