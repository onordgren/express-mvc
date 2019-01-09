const posts = [
  {
    title: 'Post 1',
  },
  {
    title: 'Post 2',
  },
  {
    title: 'Post 3',
  },
  {
    title: 'Post 4',
  }
];

// Handles the data layer for the Post object
// Would probably be a database connection instead of a constant array

class Post {
  static all(callback) {
    // Get all posts for the database
    callback(posts);
  }

  static get(index, callback) {
    // Get one post from database
    callback(posts[index]);
  }

  static create(body, callback) {
    // Save to database
    callback(body);
  }

  static update(body, callback) {
    // Save to database
    callback(body);
  }

  static delete(index, callback) {
    // Remove from database
    callback(index);
  }
}

export default Post;
