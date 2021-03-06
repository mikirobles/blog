module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "miki blog", // Site title.
  siteTitleAlt: "Micael Robles Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://blog.micaelrobles.com", // Domain of your website without pathPrefix.
  siteDescription: "", // Website description used for RSS feeds/meta description tag.
  pathPrefix: "/",
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-96011454-3", // GA tracking ID.
  disqusShortname: "mikiroblesblog", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Micael Robles", // Username to display in the author segment.
  userTwitter: "_mikirobles", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Buenos Aires, Argentina", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "web dev from bsas, argentina", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/mikirobles",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/_mikirobles",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:micael.robles@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Micael Robles", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
