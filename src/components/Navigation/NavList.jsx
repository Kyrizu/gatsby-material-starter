import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  const txtcentre = {
    textAlign: 'center'
  }

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  NavList.push({
    primaryText: "Privacy policy",
    leftIcon: <FontIcon>insert_drive_file</FontIcon>,
    component: Link,
    to: "/privacy-policy/"
  });
  return NavList;
}
export default GetNavList;
