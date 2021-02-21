import { useState } from 'react';
import axios from 'axios';
import { ROOT_URL } from 'constants/urls';
import { Bookmarks } from 'types';

type DeleteBookmark = (id: number) => void;

type UseDeleteBookmark = (
  isLoggedIn: boolean
) => {
  isLoading: boolean;
  deleteBookmark: DeleteBookmark;
};

const useDeleteBookmark: UseDeleteBookmark = (isLoggedIn) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteBookmark: DeleteBookmark = async (id) => {
    setIsLoading(true);
    if (isLoggedIn) {
      const options: any = {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer google-oauth2 ' + localStorage.getItem('token'),
        },
        url: `${ROOT_URL}/bookmarks/`,
      };
      await axios(options);
    } else {
      const bookmarksJSON = localStorage.getItem('bookmarks');
      if (bookmarksJSON) {
        const bookmarks: Bookmarks = JSON.parse(bookmarksJSON);
        Object.entries(bookmarks).forEach(([key, bookmark]: any) => {
          console.log(key);
          if (bookmark.id === id) delete bookmarks[key];
        });
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      }
    }
    setIsLoading(false);
  };
  return { isLoading, deleteBookmark };
};

export default useDeleteBookmark;
