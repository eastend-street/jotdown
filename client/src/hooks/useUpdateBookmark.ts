import { useState } from 'react';
import axios from 'axios';
import { ROOT_URL } from 'constants/urls';
import { Bookmarks, Bookmark } from 'types';

type UpdateBookmark = (bookmark: Bookmark) => void;

type UseGetBookmarks = (
  isLoggedIn: boolean
) => {
  isLoading: boolean;
  updateBookmark: UpdateBookmark;
};

const useUpdateBookmark: UseGetBookmarks = (isLoggedIn) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateBookmark: UpdateBookmark = async (bookmark: any) => {
    setIsLoading(true);
    if (isLoggedIn) {
      const options: any = {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer google-oauth2 ' + localStorage.getItem('token'),
        },
        data: bookmark,
        url: `${ROOT_URL}/bookmarks/`,
      };
      await axios(options);
    } else {
      const bookmarksJSON = localStorage.getItem('bookmarks');
      if (bookmarksJSON) {
        const bookmarks: Bookmarks = JSON.parse(bookmarksJSON);
        bookmarks[bookmark.id].note = bookmark.note;
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      }
    }
    setIsLoading(false);
  };
  return { isLoading, updateBookmark };
};

export default useUpdateBookmark;
