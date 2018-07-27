const gulp = require('gulp');
const imagemin=require('gulp-imagemin'); 
const uglify = require('gulp-uglify');

gulp.task('message', function() {
	return console.log('Gulp is running!');
});

gulp.task('imageMin', function() {
	gulp.src('src/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
}); 

gulp.task('copyHtml', function(){
	gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('minify', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});