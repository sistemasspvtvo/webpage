const { DateTime } = require('luxon');
const slugify = require("slugify");
const markdownIt = require('markdown-it');
const markdownItKatex = require('markdown-it-katex');
const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true
}).use(markdownItKatex);

module.exports = function(eleventyConfig) {
  // Date filter
  eleventyConfig.addFilter("date", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "UTC" })
      .setLocale("es")
      .toLocaleString(DateTime.DATE_FULL);
  });

  // Slug filter
  eleventyConfig.addFilter("slug", (str) => {
    return slugify(str, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
      locale: "es",
    });
  });

  // Set markdown library with KaTeX support
  eleventyConfig.setLibrary('md', md);

  // Passthrough copies
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "css/katex.min.css",
    "node_modules/katex/dist/katex.min.js": "js/katex.min.js",
    "node_modules/katex/dist/fonts": "css/fonts"
  });
  
  // Netlify files
  eleventyConfig.addPassthroughCopy({ "src/netlify/_headers": "_headers" });
  eleventyConfig.addPassthroughCopy({ "src/netlify/_redirects": "_redirects" });

  // Server options
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    encoding: "utf-8",
    domdiff: false,
    showDirectoryListing: false
  });

  // Blog collection
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