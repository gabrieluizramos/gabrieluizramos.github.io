import React from "react"
import { Link } from "gatsby"

import * as S from './styles';

const PostLink = ({ post, last }) => (
  <S.PostItem>
    <Link to={post.frontmatter.path}>
      <S.PostPath>
        {post.frontmatter.tags.join('/')}
        <S.PostDate>
          {post.frontmatter.date}
          {last && <S.PostLast>*</S.PostLast>}
        </S.PostDate>
      </S.PostPath>
      <S.PostTitle>
        {post.frontmatter.title}
      </S.PostTitle>
    </Link>
  </S.PostItem>
)

export default PostLink
