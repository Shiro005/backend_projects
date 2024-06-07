import express from 'express';
const app = express()

// app.get('/', (req, res) => {
//     res.send(`Server is Ready`)
// })

app.use(express.static('dist'))

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why couldn't the bicycle stand up by itself?",
            content: "It was two tired."
        },
        {
            id: 2,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field."
        },
        {
            id: 3,
            title: "How does a penguin build its house?",
            content: "Igloos it together."
        },
        {
            id: 4,
            title: "Why did the math book look sad?",
            content: "Because it had too many problems."
        }
    ];

    res.send(jokes);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
});

