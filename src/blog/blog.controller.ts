import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { User } from 'src/entities/user.entity';
import { Post as BlogPost } from 'src/entities/post.entity';
import { Comment } from 'src/entities/comment.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('create-user')
  createUser(@Body() userData: Partial<User>) {
    return this.blogService.createUser(userData);
  }

  @Get('users')
  findAllUsers() {
    return this.blogService.findAllUsers();
  }

  @Post('create-post')
  createPost(@Body() postData: Partial<BlogPost>) {
    return this.blogService.createPost(postData);
  }

  @Get('posts')
  findAllPosts() {
    return this.blogService.findAllPosts();
  }

  @Post('create-comment')
  createComment(@Body() commentData: Partial<Comment>) {
    return this.blogService.createComment(commentData);
  }

  @Get('comments/:postId')
  findCommentsByPost(@Param('postId') postId: number) {
    return this.blogService.findCommentsByPost(postId);
  }
}
