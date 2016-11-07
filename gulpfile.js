var gulp = require ( 'gulp' );
var sass = require ( 'gulp-sass' );
var concat = require ( 'gulp-concat' );
var jshint = require ( 'gulp-jshint' );
var watch = require ( 'gulp-watch' );
var autoprefixer = require ( 'gulp-autoprefixer' );

// gulp-babel
// vinyl-source-stream

//Setup gulp task, you can name it anything
//We call it styles
gulp.task( 'styles', function () {
  //Return transformed file
  //We use the gulp.src method to tell gulp what files to look at.
  //This is a string that is a path that is relative to our gulpfile.js
  return gulp.src ( 'styles/style.scss' )
  //We use the .pipe method to keep pushing the data along. gulp.src
  //will return our .scss and .pipe will push it into another function
  //in this case we push it into sass
  .pipe( sass().on( 'error', sass.logError ) )
  //The sass function, returns as the converted scss
  //we use concat to create a file for it to go into
  .pipe( concat( 'style.css' ) )
  //Will return said file, and we use gulp.dest to tell gulp where to put it
  .pipe( gulp.dest( 'styles/' ) );
} );

gulp.task( 'watch', function () {
  gulp.watch( 'styles/*.scss', ['styles'] );
  gulp.watch( 'js/*.js', ['jshint'] );
} );

gulp.task( 'jshint', function () {
  return gulp.src( 'js/*.js' )
  .pipe( jshint() )
  .pipe( jshint.reporter( 'default' ) );
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
