import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Home",
  DESCRIPTION: "Portfolio Page of Rouven Reuter",
  EMAIL: "Rouven.Reuter@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: 'https://www.smart-monkey.blog/' // Update here to link the RSS icon to your website rss
};

export const HIGHLIGHTAUTHOR = "Rouven Reuter"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Portfolio page of Rouven Reuter",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION:
    "My CV",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION:
    "blog tag filter",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION:
    "A self-intro",
};