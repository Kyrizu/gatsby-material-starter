module.exports = {
  siteTitle: "Kyrizu's blog", // Site title.
  siteTitleShort: "K Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Dev Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://kyrizudev.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A place where dev ideas/discussions and relevant topics live", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-124032509-1", // Tracking code ID for google analytics.
  disqusShortname: "kyrizudev", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Kyrizu", // Username to display in the author segment.
  userTwitter: "kyrizuDev", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Australia", // User location to display in the author segment.
  userAvatar: "/assets/author-avt.png", // User avatar to display in the author segment.
  userDescription:
    "Hello, I am developer who like to build things that are helpful and educational. I also talk about better uses of technologies because they are cool and they aren't purely negative like some claim.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [

    {
      label: "Twitter",
      url: "https://twitter.com/kyrizudev",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:kyrizudev@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Play store",
      url: "https://play.google.com/store/apps/dev?id=6604873908120606124",
      iconClassName: "text-center fa fa-caret-right"
    }
  ],
  copyright: "Copyright © 2018. KyrizuDev" // Copyright string for the footer of the website and RSS feed.
};
