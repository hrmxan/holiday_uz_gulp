const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const path = require("../config/path.js")


const gulpInclude = require('gulp-file-include');



const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(gulpInclude())
        .pipe(dest(path.html.dest))
}

module.exports = html;