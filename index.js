const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static('src'));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/blogs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'apology.html'));
})

app.get('/hireme', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hireme.html'));
})

app.get('/downloadcv', (req, res) => {
    const filePath = path.join(__dirname, 'src', 'cv.txt');
    res.download(filePath, 'cv.txt', (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).send('Error downloading file');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
