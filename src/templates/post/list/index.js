import React from 'react';

import PostItem from './item';

import { List } from './styles';

const PostList = ({ posts }) => (
  <List>
      {posts.map(({ node: post }, index) => (
        <PostItem key={post.id} post={post} last={index === 0} />
      ))}
  </List>
);

export default PostList;
