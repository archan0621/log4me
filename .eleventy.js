module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  eleventyConfig.addFilter("readableDate", function (value) {
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date(value));
  });

  eleventyConfig.addFilter("archiveDate", function (value) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(new Date(value));
  });

  eleventyConfig.addFilter("htmlDateString", function (value) {
    return new Date(value).toISOString().slice(0, 10);
  });

  eleventyConfig.addCollection("postsByDate", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("posts")
      .sort(function (a, b) {
        return b.date - a.date;
      });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
