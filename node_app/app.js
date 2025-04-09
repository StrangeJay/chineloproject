const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node.js app with shared DB is up and running!');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Node.js app listening on port 3000!');
});
