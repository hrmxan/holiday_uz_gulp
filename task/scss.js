const { src, dest } = require('gulp');

const path = require('../config/path');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

const scss = () => {
    return src(path.scss.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(dest(path.scss.dest, { sourcemaps: true }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(dest(path.scss.dest, { sourcemaps: true }))
}

module.exports = scss; 