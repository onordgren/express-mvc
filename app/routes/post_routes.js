import PostController from '../controllers/post_controller';

class PostRoutes {
  static register(app) {
    app.get('/posts', (req, res) => PostController.index(req, res));
    app.post('/posts', (req, res) => PostController.create(req, res));
    app.get('/posts/:id', (req, res) => PostController.get(req, res));
    app.put('/posts/:id', (req, res) => PostController.update(req, res));
    app.delete('/posts/:id', (req, res) => PostController.destroy(req, res));
  }
}

export default PostRoutes;
