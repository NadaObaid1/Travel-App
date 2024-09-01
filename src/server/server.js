const path = require ('path');
const express = require ('express');
const app =express();
const port = 3000;

app.use(express.static('dist'));

app.get('/',(req, res)=> {
    res.sendFile(path.resolve('dist/index.html'));
})

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = server;