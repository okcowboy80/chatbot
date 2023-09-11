import express from 'express'

const app = express();

app.post('/api', (req, res) => {
    const body = req.body;
    // res.send('Hello, ' + body.name);
    if (body.event === 'chatStarted') {
        console.log("/api is working!")
        console.log(body.text);
        response.send(body.text)
    }
    
  });

app.get('/', (req, res) => {
    console.log("GET works!")
    res.send("Hello!")
})

app.listen(8080, () => {
    console.log("Server listening on http://localhost:8080")
})