const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIApi, Configuration } = require('openai');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150,
    });

    const reply = completion.data.choices[0].text.trim();

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the request');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
