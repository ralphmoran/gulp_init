var gulp       = require('gulp'            );
var sass       = require('gulp-sass'       );
var minifycss  = require('gulp-csso'       );
var concat     = require('gulp-concat'     );
var sourcemaps = require('gulp-sourcemaps' );
var uglify     = require('gulp-uglify'     );


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