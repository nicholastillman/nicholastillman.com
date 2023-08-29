// used for watching and copying files. - May not need this.
const cpx = require('cpx2');
const { renderToString } = require('@philosofiq/honeycomb/dist/hydrate');
const sass = require('sass');
const path = require("node:path");

const isProduction = process.env.NODE_ENV === "production";
module.exports = (eleventyConfig) => {
  // TODO:  Collections

  // FILTERS
  eleventyConfig.addFilter('debug', (value) => {
    return util.inspect(value, { compact: false });
  });

  eleventyConfig.addFilter('clg', (value) => {
    console.log(typeof value);
  });

  // SASS
// Recognize Sass as a "template languages"
eleventyConfig.addTemplateFormats("scss");
// Compile Sass
eleventyConfig.addExtension("scss", {
  outputFileExtension: "css",
  compile: async function (inputContent, inputPath) {
    // Skip files like _fileName.scss
    let parsed = path.parse(inputPath);
    if (parsed.name.startsWith("_")) {
      return;
    }

    // Run file content through Sass
    let result = sass.compileString(inputContent, {
      loadPaths: [parsed.dir || "."],
      sourceMap: false, // or true, your choice!
    });

    // Allow included files from @use or @import to
    // trigger rebuilds when using --incremental
    this.addDependencies(inputPath, result.loadedUrls);

    return async () => {
      return result.css;
    };
  },
});

  // TODO: Passthrough
    eleventyConfig.addPassthroughCopy('src/assets/docs');
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/projects/**/*.{jpg,jpeg,png,gif}');
    eleventyConfig.addPassthroughCopy('src/projects/**/*.{svg}');
    eleventyConfig.addPassthroughCopy('src/assets/fonts/');
    eleventyConfig.addPassthroughCopy('src/assets/js/');

   eleventyConfig.addCollection('projects', (collectionApi) => {
   return collectionApi.getFilteredByTag("project");
  });


  if (isProduction) {
    eleventyConfig.addPassthroughCopy({
      "node_modules/honeycomb/dist/honeycomb": "assets/honeycomb",
    });
  } else {
    cpx.watch('node_modules/honeycomb/www/build/**/*.*', 'assets/honeycomb');
  }
  
  // TODO: Plugins
  // eleventyConfig.addPlugin(eleventySass);
  
  // TODO: Transforms
  eleventyConfig.addTransform('ssr', async (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      try {
        const { html } = await renderToString(content);
        // TODO:  Add minification
          /*
          htmlmin.minify(html, {
            useShortDoctype: true,
            removeComments: false,
            collapseWhitespace: true,
          });
          */
        return html;
      } catch (err) {
        return err;
      }
    }

    if (outputPath.endsWith('.css')) {
      return content;
    }
  });

  return {
    dir: {
      input:'src',
      output: 'public',
    },
    templateFormats: ['html', 'md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateFormats: 'njk',
  }
}