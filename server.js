const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const express = require('express');
const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:${PORT}`);
});