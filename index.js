const express = require('express');
const app = express();
const port = 3000; // Or any port you prefer

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});