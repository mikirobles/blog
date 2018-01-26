import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import { STYLE_VARS } from '../../constants';

const Post = styled.div`
    a {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;
      margin: 3em 0;
      text-decoration: none;
      span {
        margin-top: 0.5em;
        color: ${STYLE_VARS.colors.accent};
      }
      &:hover {
        h1 {
          text-decoration: underline;
        }
      }
      > * {
        margin: 0;
      }
    }
`

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    console.log(postList)
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Post key={post.title}>
            <Link to={post.path}>
              <h1>{post.title}</h1>
              <span>{post.date}</span>
            </Link>
          </Post>
        ))}
      </div>
    );
  }
}

export default PostListing;
