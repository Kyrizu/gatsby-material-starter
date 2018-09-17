import React, { Component } from "react";
import Dis from 'disqus-react';
import urljoin from "url-join";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import Snackbar from "react-md/lib/Snackbars";
import siteconfig from "../../../data/SiteConfig";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
  }

  render() {
    const { postNode, expanded } = this.props;
    const disqusShortname = siteconfig.disqusShortname;
    if (!siteconfig.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const disqusconfig = {
      url:urljoin(
        siteconfig.siteUrl,
        siteconfig.pathPrefix,
        postNode.fields.slug
      ),
      identifier:post.title,
      title:post.title
    };

    return (
      <Card className="md-grid md-cell md-cell--12">
        <Dis.CommentCount shortname={disqusShortname} config={disqusconfig}>
          Comments
        </Dis.CommentCount>
        <CardText expandable={!expanded}>
          <Dis.DiscussionEmbed shortname={disqusShortname} config={disqusconfig} />
        </CardText>
      </Card>
    );
  }
}

export default Disqus;
