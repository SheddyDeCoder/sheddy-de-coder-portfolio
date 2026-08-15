export interface UpdateItem {
  platform: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

export interface EventItem {
  title: string;
  date: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  url: string | null;
}