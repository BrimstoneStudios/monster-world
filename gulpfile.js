var gulp = require ( 'gulp' ),
    sass = require ( 'gulp-sass' ),
    concat = require ( 'gulp-concat' ),
    jshint = require ( 'gulp-jshint' ),
    watch = require ( 'gulp-watch' ),
    autoprefixer = require ( 'gulp-autoprefixer' ),
    serve = require('gulp-serve'),
    livereload = require('gulp-livereload');

// gulp-babel
// vinyl-source-stream
livereload({ start: true });

gulp.task( 'styles', function () {
  return gulp.src ( 'styles/style.scss' )
  .pipe( sass().on( 'error', sass.logError ) )
  .pipe( concat( 'style.css' ) )
  .pipe( gulp.dest( 'styles/' ) )
  .pipe(livereload());
} );

gulp.task( 'js', function () {
  return gulp.src( 'js/*.js' )
  .pipe( jshint() )
  .pipe( jshint.reporter( 'default' ) )
  .pipe(livereload());
} );

gulp.task( 'watch', function () {
  livereload.listen();
  gulp.watch( 'styles/*.scss', ['styles'] );
  gulp.watch( 'js/*.js', ['js'] );
} );

gulp.task( 'default',['watch'] );

gulp.task( 'autoprefixer', function () {
  return gulp.src( 'styles/style.css' )
  .pipe( autoprefixer( {
    browsers: ['last 2 versions'],
    cascade: false
  } ) )
  .pipe( gulp.dest( 'dist' ) );
} );

gulp.task( 'serve', serve( {
  port: 8080
} ) );
