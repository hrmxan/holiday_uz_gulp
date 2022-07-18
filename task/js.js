const { src, dest } = require('gulp');

const path = require('../config/path');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
// const webpack = require('webpack-stream');

const js = () => {
    return src(path.js.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'JavaScript',
                message: error.message
            }))
        }))
        .pipe(dest(path.js.dest, { sourcemaps: true }))
}

module.exports = js; 