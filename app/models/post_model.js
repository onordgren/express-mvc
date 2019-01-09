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


class Post {
  static all(callback) {
    callback(posts);
  }

  static get(index, callback) {
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
