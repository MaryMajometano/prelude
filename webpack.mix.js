let mix = require("laravel-mix");
require('mix-html-builder');

mix
    .setPublicPath('dist')
    .copy("src/static", "dist/")
    
    .js("src/assets/js/app.js", "dist/js")
    
    .postCss("src/assets/css/app.css", "dist/css", [
        require("tailwindcss")
    ])

    .html({
        htmlRoot: './src/pages/*.html',
        output: '',
        partialRoot: './src/partials',
        layoutRoot: './src/layouts',
    });

mix.browserSync({server: "dist"});