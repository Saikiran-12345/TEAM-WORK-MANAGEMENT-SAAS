import { BaseService } from './BaseService';
import { Comment } from '../types';

class CommentService extends BaseService<Comment> {
  constructor() {
    super('comments');
  }
  
}

export const commentsService = new CommentService();
