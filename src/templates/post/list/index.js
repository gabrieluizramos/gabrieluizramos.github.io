import React from 'react';

import PostItem from './item';

import { List } from './styles';

const PostList = ({ posts, last = posts.length - 1 }) => (
  <List>
      {posts.map(({ node: post }, index) => (
        <PostItem key={post.id} post={post} last={index === last} />
      ))}
  </List>
);

export default PostList;
