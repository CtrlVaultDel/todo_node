import express from 'express';

const app = express();

// Main Page
app.get("/", (req, res) => {
    res.send("The app says hello");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})