const { DateTime } = require('luxon');
const slugify = require("slugify");
const markdownIt = require('markdown-it');
const markdownItKatex = require('markdown-it-katex');
const markdownItAnchor = require('markdown-it-anchor');

// Create markdown-it instance with plugins
const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true
})
  .use(markdownItKatex)
  .use(markdownItAnchor, {
    slugify: s =>
      s
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')   // limpia caracteres raros
        .replace(/\s+/g, '-')      // espacios a guiones
        .replace(/-+/g, '-'),
    /*
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'direct-link',
      symbol: '#',
      level: [1, 2, 3]
    })
    */
  });

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
  eleventyConfig.addPassthroughCopy("src/downloads");
  eleventyConfig.addPassthroughCopy("src/video");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("dmca-validation.html");
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

  const cheerio = require('cheerio');

  eleventyConfig.addShortcode("generateTOC", function(htmlContent) {
    const $ = cheerio.load(htmlContent);
    const headings = $('h1, h2, h3');
    let tocHTML = '<ul class="toc-list">';
    let lastLevel = 2;

    headings.each((index, el) => {
      const level = +el.name.slice(1);
      const text = $(el).text();
      const id = $(el).attr('id');

      if (!id) return;

      if (level > lastLevel) {
        tocHTML += '<ul class="toc-sublist">';
      } else if (level < lastLevel) {
        tocHTML += '</li></ul>'.repeat(lastLevel - level) + '</li>';
      } else if (index > 0) {
        tocHTML += '</li>';
      }

      tocHTML += `<li class="toc-item toc-level-${level}">` +
                 `<a href="#${id}" class="toc-link">${text}</a>`;

      lastLevel = level;
    });

    tocHTML += '</li></ul>'.repeat(Math.max(0, lastLevel - 2)) + '</ul>';
    return tocHTML;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html", "11ty.js"],
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk"
  };
};
