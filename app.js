// response object

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let date = new Date();
    let page = `
        <html>
        <head><title>refresh</title></head>
        <body>
            <h1>${date}</h1>
        </body>
        </html>
    `;
    res.header('Refresh', 1);
    res.send(page);
});

app.get('/cs', (req, res) => {
    res.redirect('http://cs.uco.edu');
});

app.get('/hs', (req, res) => {
    res.redirect('http://cs3.uco.edu');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at port', port);
});