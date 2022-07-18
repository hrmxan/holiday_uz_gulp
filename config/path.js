const pathSrc = "./src" 
const pathDest = "./public";

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },
    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },
    scss: {
        src: pathSrc + "/scss/*.{sass,scss}",
        watch: pathSrc + "/scss/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },
    img: {
        src: pathSrc + "/img/*.{jpg,jpeg,png,gif,svg}",
        watch: pathSrc + "/img/**/*.{jpg,jpeg,png,gif,svg}",
        dest: pathDest + "/img"
    },
    video: {
        src: pathSrc + "/video/*.{mp4,webm,ogg,mpg,avi}",
        watch: pathSrc + "/video/**/*.{mp4,webm,ogg,mpg,avi}",
        dest: pathDest + "/video"
    },
    font: {
        src: pathSrc + "/fonts/*.{eot,svg,oct,ttc,otf,ttf,woff,woff2}",
        watch: pathSrc + "/fonts/**/*.{eot,svg,oct,ttc,otf,ttf,woff,woff2}",
        dest: pathDest + "/fonts"
    },
}