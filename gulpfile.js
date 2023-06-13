const gulp = require("gulp")
const del = require("del")
const theo = require("gulp-theo")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const postcssMergeQueries = require("postcss-merge-queries")
const rename = require("gulp-rename")

const paths = {
  tokens: {
    src: "src/tokens/tokens.yml",
    dest: "src/assets/tokens/",
  },
  global: {
    src: "src/styles/global.scss",
    dest: "src/assets/css/",
  },
  carapace: {
    src: "src/carapace/carapace.scss",
    dest: "src/assets/css/",
  },
}

const formats = ["scss", "map.scss", "raw.json"]

gulp.task("clearTokens", () => {
  return del("src/assets/tokens/*")
})

formats.forEach(format => {
  gulp.task(`tokens:${format}`, () => {
    return gulp
      .src(paths.tokens.src)
      .pipe(
        theo({
          transform: { type: "web" },
          format: { type: format },
        })
      )
      .pipe(gulp.dest(paths.tokens.dest))
  })
})

gulp.task(
  "tokens",
  gulp.series("clearTokens", gulp.parallel(formats.map(format => `tokens:${format}`)))
)

const styles = ["global", "carapace"]

gulp.task("cleanAssets", () => {
  return del("src/assets/css/*")
})

styles.forEach(style => {
  gulp.task(style, () => {
    return gulp
      .src(paths[style].src)
      .pipe(sass({ outputStyle: "expanded", includePaths: ["node_modules"] }))
      .pipe(postcss([autoprefixer, postcssMergeQueries]))
      .pipe(gulp.dest(paths[style].dest))
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(rename({ extname: ".min.css" }))
      .pipe(gulp.dest(paths[style].dest))
  })
})

gulp.task("assets", gulp.series("cleanAssets", gulp.parallel(styles)))

gulp.task("default", gulp.series("tokens", "assets"))

gulp.task("watch", () => {
  gulp.watch(paths.global.src, gulp.series("global"))
  gulp.watch("src/tokens/*.yml", gulp.series("tokens"))
})
