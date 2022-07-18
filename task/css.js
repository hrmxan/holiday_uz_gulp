const { src, dest } = require('gulp');

const path = require('../config/path');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const csso = require('gulp-csso');

const css = () => {
    return src(path.css.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'css',
                message: error.message
            }))
        }))
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(dest(path.css.dest, { sourcemaps: true }))
        .pipe(csso())
        .pipe(dest(path.css.dest, { sourcemaps: true }))
}

module.exports = css; 