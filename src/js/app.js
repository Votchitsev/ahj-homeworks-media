import Blog from './Blog';
import TextPost from './TextPost';

document.addEventListener('DOMContentLoaded', () => {
  const blog = new Blog(TextPost);
  blog.init();
});
