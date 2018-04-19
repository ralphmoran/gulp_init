var gulp       = require('gulp'            ); // Gulp 
var sass       = require('gulp-sass'       ); // SASS 
var minifycss  = require('gulp-csso'       ); // Minify CSS files
var concat     = require('gulp-concat'     ); // Concat file's content
var sourcemaps = require('gulp-sourcemaps' ); // Load the new file in buffer
var uglify     = require('gulp-uglify'     ); // Minify JS files


gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});


//gulp.task('default', ['sass','js']);

gulp.task('watch', function(){
    var watcher = gulp.watch('app/scss/*.scss', ['sass','js']);

    watcher.on('change', function(e){
        console.log('');
        console.log('   ==> File "'+ e.path + '" was ' + e.type + ', running tasks...');
        console.log('');
    });
});