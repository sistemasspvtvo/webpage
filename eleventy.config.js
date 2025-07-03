const fs = require('fs-extra');
const path = require('path');
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
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

