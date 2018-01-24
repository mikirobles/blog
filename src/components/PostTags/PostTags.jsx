import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import styled from 'styled-components';

const {colors} = require('../../constants').STYLE_VARS;

const Tag = styled.button`
  background: ${colors.black};
  ${props => props.index > 0 ? 'margin: 0 0.5em;' : ''}
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${colors.white};
  transition: 0.3s ease all;
  &:hover {
    background: ${colors.accent};
  }
`

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map((tag, i) => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Tag index={i}>{tag}</Tag>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
