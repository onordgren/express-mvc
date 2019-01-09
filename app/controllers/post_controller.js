import Post from '../models/post_model';

class PostController {
  static index(req, res) {
    Post.all((posts) => {
      res.render('posts/index', { posts });
    });
  }

  static get(req, res) {
    Post.get(req.params.id, (post) => {
      res.render('posts/show', { post });
    });
  }

  static create(req, res) {
    Post.create((req.body), (post) => {
      res.status(201).send(post);
    });
  }

  static update(req, res) {
    Post.update(req.body, (post) => {
      res.status(200).send(post);
    });
  }

  static destroy(req, res) {
    Post.delete(req.params.id, (index) => {
      res.status(200).send(index);
    });
  }
}

export default PostController;
