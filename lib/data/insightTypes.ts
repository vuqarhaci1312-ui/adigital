export type InsightBodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string };

export type InsightAuthor = {
  name: string;
  href?: string;
  avatar?: string;
  avatarAlt?: string;
};

export type InsightArticle = {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  tag: string;
  type: "image" | "video";
  image?: string;
  alt?: string;
  playbackId?: string;
  description: string;
  author: InsightAuthor;
  body: InsightBodyBlock[];
};

export type InsightListItem = Pick<
  InsightArticle,
  "slug" | "title" | "date" | "tag" | "type" | "image" | "alt" | "playbackId"
>;
