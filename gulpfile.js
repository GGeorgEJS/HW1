const gulp = require("gulp"),
    sass = require("gulp-sass"),
    webserver = require("gulp-webserver"),

    source = './sass/',
    dest = './builds/';



gulp.task('html', function(){
   return gulp.src(dest + '*.html');
});

gulp.task('sass', function(){
   return gulp.src(source + 'style.scss')
        .pipe(sass().on('erro', sass.logError))
        .pipe(gulp.dest(dest  + 'css/'));
});


gulp.task('watch', function(){
    return gulp.watch('./sass/*.scss', gulp.series('sass'));
});


gulp.task('webserver', function(){
        return gulp.src(dest)
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', gulp.series('html', 'sass', 'webserver', 'watch'));