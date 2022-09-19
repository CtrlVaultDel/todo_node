import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';

// Replicate __direname & __ filename (not available in modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

// Main Page
app.get("/", (req, res) => {
    res.send("The app says hello");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})