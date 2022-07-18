const { watch, series, parallel } = require('gulp');
const brawserSync = require('browser-sync').create();

// ulangan modulla

const path = require("./config/path.js");
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require("./task/scss.js");
const css = require("./task/css.js");
const js = require("./task/js.js");
const img = require("./task/img.js");
const font = require("./task/font.js");






const server = () => {
    brawserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

const watcher = () => {
    watch(path.html.watch, html).on('all', brawserSync.reload);
    watch(path.scss.watch, scss).on('all', brawserSync.reload);
    watch(path.css.watch, css).on('all', brawserSync.reload);
    watch(path.js.watch, js).on('all', brawserSync.reload);
    watch(path.img.watch, img).on('all', brawserSync.reload);
    watch(path.font.watch, font).on('all', brawserSync.reload);
}

exports.html = html;
exports.scss = scss;
exports.css = css;
exports.js = js;
exports.img = img;
exports.font = font;

exports.dev = series(
    clear,
    parallel(html, scss, js, img, css, font),
    parallel(watcher, server)
);