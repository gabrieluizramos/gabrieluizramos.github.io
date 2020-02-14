import React from 'react';

import PostItem from './item';

const PostList = ({ posts }) => (
  <ol>
      {posts.map(({ node: post }, index) => (
        <PostItem key={post.id} post={post} last={index === 0} />
      ))}
  </ol>
);

export default PostList;
