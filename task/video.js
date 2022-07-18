const { src, dest } = require('gulp');
const path = require('../config/path');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
// const webpack = require('webpack-stream');

const video = () => {
    return src(path.video.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'Video',
                message: error.message
            }))
        }))
        .pipe(dest(path.video.dest))
}

module.exports = video; 