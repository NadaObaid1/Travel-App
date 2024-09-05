const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../dist')));


app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../../dist/index.html');
  console.log("File path: ", filePath); 
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);  
      res.status(500).send('File not found');
    }
  });
});


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
