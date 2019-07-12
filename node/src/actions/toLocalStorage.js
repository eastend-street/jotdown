import { SAVE_BOOKMARK_TO_LOCAL } from ".";

export const saveBookmarkToLocal = values => {
  const bookmarks = {
    0: {
      created_at: "",
      description: "",
      id: 0,
      img_url: "",
      note: values.note,
      title: "",
      updated_at: "",
      url: values.url
    }
  };
  return { type: SAVE_BOOKMARK_TO_LOCAL, bookmarks };
};
