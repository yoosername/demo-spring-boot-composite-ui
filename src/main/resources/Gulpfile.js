var rjs = require("gulp-r");

gulp.src("app/scripts/*.js")
    .pipe(rjs({
        "baseUrl": "app/scripts",
        "name": require.resolve("almond")
    }))
    .pipe(gulp.dest("dist/scripts"));