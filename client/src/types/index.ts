export type Bookmark = {
  created_at: any;
  description: string;
  id: number;
  img_url: string;
  note: string;
  title: string;
  updated_at: any;
  url: string;
  user: any;
  isSample: boolean;
};

export type Bookmarks = {
  [key: number]: Bookmark;
};

export type InitialState = {
  bookmarks: Bookmarks;
};

export type User = {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
  token: string;
};
