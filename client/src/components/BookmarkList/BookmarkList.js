import React, { useContext, useEffect, useState } from 'react';

import AppContext from 'contexts/AppContext';
import { readBookmarks } from 'actions';
import {
  readBookmarksFromLocal,
  saveSampleBookmarkToLocal,
} from 'actions/toLocalStorage';
import _ from 'pages/BookmarkDetail/node_modules/lodash';
import { useGetBookmarks } from 'hooks';

import { Grid } from '@material-ui/core';

import BookmarkCard from 'components/BookmarkCard/BookmarkCard';
import SkeletonCard from 'components/parts/SkeletonCard/SkeletonCard';

const BookmarkList = () => {
  // const { state, dispatch } = useContext(AppContext);
  const { isLoading, bookmarks } = useGetBookmarks({isLoggedIn: false});
  console.log("bookmarks", bookmarks)
  // useEffect(() => {
  //   const fetchBookmark = async () => {
  //     // setIsLoading(true);
  //     if (!localStorage.getItem('token')) {
  //       // not login
  //       const bookmarks = await readBookmarksFromLocal(dispatch);
  //       if (!bookmarks) {
  //         // nothing in local storage → save sample bookmark to local storage
  //         await saveSampleBookmarkToLocal(dispatch);
  //         await readBookmarksFromLocal(dispatch);
  //       }
  //       // setIsLoading(false);
  //     } else {
  //       // logged in
  //       await readBookmarks(dispatch);
  //       // setIsLoading(false);
  //     }
  //   };
  //   fetchBookmark();
  // }, [dispatch]);

  const renderBookmarks = () => {
    return _.map(bookmarks, (bookmark) => (
      <Grid item={true} xs={12} sm={6} md={4} lg={3} key={bookmark.id}>
        <BookmarkCard bookmark={bookmark} />
      </Grid>
    ));
  };

  const renderSkeleton = () =>
    [...Array(8).keys()].map((i) => (
      <Grid item={true} xs={12} sm={6} md={4} lg={3} key={i}>
        <SkeletonCard />
      </Grid>
    ));

  return (
    <Grid container={true} spacing={4}>
      {isLoading ? renderSkeleton() : renderBookmarks()}
    </Grid>
  );
};

export default BookmarkList;
