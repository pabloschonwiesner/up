const express = require('express');
const http = require('http');
const sql = require('mssql');
const app = express();

app.use( express.static("."));
app.use( express.static("./app/"));

http.createServer(app).listen(parseInt(process.env.PORT || 3000));