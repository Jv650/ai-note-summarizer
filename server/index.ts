import express, { response } from 'express';
import React, { useState } from 'react';
import cors from 'cors';
import dotenv from 'dotenv'; // file that contains settings or secrets
import axios from 'axios';

dotenv.config(); // Load environment variables from .env file
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies


app.get(`/api`, async (req, res) => {
  const baseUrl = 'https://foodish-api.com/';
  try {
    const response = await axios.get(`${baseUrl}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message);
    res.status(500).json({error: 'Uh-oh somethung went wrong!'});
  }
});

app.listen(5001, () => {
  console.log('Hey J server is running on port 5001');
});