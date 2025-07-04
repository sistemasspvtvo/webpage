const fs = require('fs-extra');
const path = require('path');
const { DateTime } = require('luxon');
const katex = require('katex');
const slugify = require("slugify");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("date", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "UTC" })
      .setLocale("es")
      .toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addShortcode('katex', function(content) {
    return katex.renderToString(content, { throwOnError: false });
  });

  eleventyConfig.addFilter("slug", (str) => {
  return slugify(str, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
    locale: "es", // Acentos y ñ permitidos
  });
});

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  
  // Copy Netlify specific files
  eleventyConfig.addPassthroughCopy({ "src/netlify/_headers": "_headers" });
  eleventyConfig.addPassthroughCopy({ "src/netlify/_redirects": "_redirects" });

  // Server options
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    encoding: "utf-8",
    domdiff: false,
    showDirectoryListing: false
  });

  // Add blog collection
  eleventyConfig.addCollection("post", function(collection) {
    return collection.getFilteredByGlob("src/blog/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

