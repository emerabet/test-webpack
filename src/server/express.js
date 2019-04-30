import express from 'express';
import path from 'path';

const server = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');

const compiler = webpack(config);
const options = config.devServer;

const hotMdw = require("webpack-hot-middleware")(compiler);

const webpackMdw = require('webpack-dev-middleware')(
    compiler,
    options
);

const staticMdw = express.static('dist');

server.use(webpackMdw);
server.use(hotMdw);
server.use(staticMdw);

server.listen(8080, () => {
    console.log('server is listening');
});
