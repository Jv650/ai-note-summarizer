import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // file that contains settings or secrets
import axios from 'axios';

dotenv.config(); // Load environment variables from .env file
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies

app.post('/summarize', async (req, res) => {
  const {text} = req.body; // extract text from the request body

 
    const mockSummary = `Mocking summary for: "${text}"`; // Mocking a summary response
    res.json({ summary: mockSummary }); // Send the mocked summary as a JSON response
});

// app.post('/summarize'   , async (req, res) => {
//   const { text } = req.body; // extract text from the request body
//   const apiKey = process.env.OPENAI_API_KEY; // Get API key from environment variables in env file

//   try { // try block to handle the request
//     const response = await axios.post( // make HTTP POST request to OpenAI API using axios
//       'https://api.openai.com/v1/chat/completions', // OpenAI API endpoint
//       {
//         model: 'gpt-3.5-turbo', // specifying the model we want to use
//         messages: [
//           {
//             role: 'user', // the role person sending the message
//             content: `Please summarize the following text: ${text}`, // the content of the message (sort if like mocking the user)
//           },
//         ],
//         max_tokens: 100,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json', // ensure req is in JSON format
//           Authorization: `Bearer ${apiKey}`, // authorization header with the API key for authentication can be found in the .env file
//         },
//       }
//     );

//     const summary = response.data.choices[0].message.content; // extract the summary from the response
//     res.json({ summary });
//   } catch (error) { // catch block to handle errors w/ 500 status
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while summarizing the text.' });
//   }
// });
app.listen(5001, () => {
  console.log('Hey J server is running on port 5001');
});