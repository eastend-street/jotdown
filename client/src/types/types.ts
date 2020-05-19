export type bookmark = {
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

export type bookmarks = {
  [key: number]: bookmark;
};

export type InitialState = {
  bookmarks: bookmarks;
};
