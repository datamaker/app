import express from 'express';

const app = express();

app.get("/", (req, res, next) => {
    res.send('ok');
});

app.get("/api/article", (req, res, next) => {
    res.send([
        {id: 141, content: "첫번째"},
        {id: 142, content: "두번째"},
    ])
})

app.listen(3030, () => {
    console.log('listening');
})

