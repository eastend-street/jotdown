import { useEffect, useState } from 'react';
import axios from 'axios';
import { ROOT_URL } from 'constants/urls';
import sampleBookmarks from 'constants/sampleBookmarks';
import { Bookmarks } from 'types';

type UseGetBookmarks = ({
  bookmarkId,
  isLoggedIn
}: {
  bookmarkId?: string | undefined;
  isLoggedIn: boolean | undefined;
}) => {
  isLoading: boolean;
  bookmarks: Bookmarks;
};

const useGetBookmarks: UseGetBookmarks = ({ bookmarkId = '', isLoggedIn }) => {
  const [bookmarks, setBookmarks] = useState<Bookmarks>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getBookmark = async () => {
      if (isLoggedIn) {
        await axios
          .get(`${ROOT_URL}/bookmarks/${bookmarkId}`)
          .then((res: any) => {
            setBookmarks(res.data);
          });
      } else {
        const bookmarksJSON = localStorage.getItem('bookmarks');
        if (bookmarksJSON) {
          setBookmarks(JSON.parse(bookmarksJSON));
        } else {
          localStorage.setItem('bookmarks', JSON.stringify(sampleBookmarks));
          setBookmarks(sampleBookmarks);
        }
      }
    };
    getBookmark();
    setIsLoading(false);
  }, [bookmarkId, isLoggedIn]);

  return { isLoading, bookmarks };
};

export default useGetBookmarks;
