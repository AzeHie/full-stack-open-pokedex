const express = require('express'); // eslint-disable-line
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000; // eslint-disable-line

app.use(express.static('dist'));

app.get('/version', (req, res) => {
  res.send('2');
});

app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
