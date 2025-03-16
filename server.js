const express = require('express');
const app = express();
const router = require('./Routes/router');

app.use(express.json());
app.use('/',router)


app.listen(5000, ()=> console.log('server is running on port 5000'))