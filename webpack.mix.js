let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/js/app.js', 'assets/application.js')
   .sass('src/scss/tailwind.scss', 'assets/application.css')
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('tailwind.config.js') ],
   });