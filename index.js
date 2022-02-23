var ghpages = require('gh-pages');

ghpages.publish('docs/.vitepress/dist', function(err) {});