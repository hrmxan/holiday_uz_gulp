const { src, dest } = require('gulp');
const path = require('../config/path');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
// const webpack = require('webpack-stream');

const font = () => {
    return src(path.font.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'Font',
                message: error.message
            }))
        }))
        .pipe(newer(path.font.dest))
        .pipe(fonter({
            formats: ['woff', 'woff2', 'eot', 'ttf', 'svg']
        }))
        .pipe(dest(path.font.dest))
}

module.exports = font; 