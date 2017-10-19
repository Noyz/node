// Requis
var gulp = require('gulp');
var html2pug = require('gulp-html2pug');
var inject = require('gulp-inject');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './public/stylesheets/sass'; // dossier de travail
var destination = './public/stylesheets/css'; // dossier à livrer

//Inject files
var paths = {
    src: '.public/*',
    srcHTML: './public/html/*.html',
    srcCSS: './public/stylesheets/css/*.css',
    srcJS: './public/javascripts/*.js',
    tmp: './public/html', // tmp folder
    tmpIndex: './public/html/*.html', // index.html in tmp folder
    tmpCSS: 'tmp/**/*.css', // css files in tmp folder
    tmpJS: 'tmp/**/*.js', // js files in tmp folder
    dist: './public/*',
    distIndex: './public/html/*.html',
    distCSS: './public/stylesheets/css/*.css',
    distJS: './public/javascript/*.js'
};


// Tâche "build" = LESS + autoprefixer + CSScomb + beautify (source -> destination)
gulp.task('css', function () {
    return gulp.src(source + '/*.sass')
        .pipe(plugins.less())
        .pipe(plugins.csscomb())
        .pipe(plugins.cssbeautify({indent: '  '}))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(destination));
});

// Tâche "minify" = minification CSS (destination -> destination)
gulp.task('minify', function () {
    return gulp.src(destination)
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destination));
});

// // Tâche "convertit" = convertit page html en pug
// gulp.task('pug', function() {
//     // Backend locales
//     return gulp.src('./public/html/*.html')
//         .pipe(html2pug(/* options for html2pug such as { fragment: true } */))
//         .pipe(gulp.dest('views'));
// });

// //Inject file
// gulp.task('html', function () {
//     return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
// });

// gulp.task('css', function () {
//     return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
// });

// gulp.task('js', function () {
//     return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
// });

// gulp.task('copy', ['html', 'css', 'js']);

// gulp.task('inject',['copy'], function () {
//     var css = gulp.src(paths.tmpCSS);
//     var js = gulp.src(paths.tmpJS);
//     return gulp.src(paths.tmpIndex)
//         .pipe(inject( css, { relative:true } ))
//         .pipe(inject( js, { relative:true } ))
//         .pipe(gulp.dest(paths.tmp));
// });

// Tâche "build"
gulp.task('build', ['css']);

// Tâche "prod" = Build + minify
gulp.task('prod', ['build',  'minify']);

// Tâche "watch" = je surveille *less
gulp.task('watch', function () {
    gulp.watch(source + '/*.sass', ['build']);
    // gulp.watch('./public/html/*.html', ['pug']);
});

// Tâche par défaut
gulp.task('default', ['build']);