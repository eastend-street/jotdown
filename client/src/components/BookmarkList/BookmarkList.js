import React from 'react';
import { useGetBookmarks } from 'hooks';

import { Grid } from '@material-ui/core';

import BookmarkCard from 'components/BookmarkCard';
import SkeletonCard from 'components/SkeletonCard';

const BookmarkList = () => {
  const { isLoading, bookmarks } = useGetBookmarks({ isLoggedIn: false });

  const renderBookmarks = () =>
    Object.entries(bookmarks).map(([key, bookmark]) => (
      <Grid item={true} xs={12} sm={6} md={4} lg={3} key={key}>
        <BookmarkCard bookmark={bookmark} />
      </Grid>
    ));

  const renderSkeleton = () =>
    [...Array(8).keys()].map(i => (
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
