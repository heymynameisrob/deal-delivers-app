// getPosts based on @willjw3 function from react-markdown-blog
// Based on @Jinksi functions from his netlify-cms-react boilerplate\
const posts = require('./lib/posts');
const locations = require('./lib/locations');

locations.writeJSON();
posts.writeJSON();