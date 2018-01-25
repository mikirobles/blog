import React, { Component } from "react";
import styled from 'styled-components';
import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";
import config from "../../../data/SiteConfig";

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: 2em 0;
  svg {
    border-radius: 5px;
  }
  .share-count {
    text-align: center;
  }
`

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + postPath;
    const {
      FacebookShareButton,
      GooglePlusShareButton,
      LinkedinShareButton,
      TwitterShareButton,
      TelegramShareButton,
      RedditShareButton
    } = ShareButtons;
    const {
      FacebookShareCount,
      GooglePlusShareCount,
      LinkedinShareCount,
      RedditShareCount
    } = ShareCounts;

    const FacebookIcon = generateShareIcon("facebook");
    const TwitterIcon = generateShareIcon("twitter");
    const TelegramIcon = generateShareIcon("telegram");
    const GooglePlusIcon = generateShareIcon("google");
    const LinkedinIcon = generateShareIcon("linkedin");
    const RedditIcon = generateShareIcon("reddit");
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");

    return (
      <SocialLinksContainer>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon size={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <FacebookShareButton
          url={url}
          title={post.title}
          picture={post.cover}
          description={postNode.excerpt}
        >
          <FacebookIcon size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon size={iconSize} />
        </TelegramShareButton>
      </SocialLinksContainer>
    );
  }
}

export default SocialLinks;
