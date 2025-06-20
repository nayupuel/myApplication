// index.js
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from my container app! This is version 1.0.'); // 이 메시지를 나중에 변경하여 테스트
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});