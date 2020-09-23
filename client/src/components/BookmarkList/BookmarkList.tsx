import React from 'react';
import styled from 'styled-components';
import { useGetBookmarks } from 'hooks';
import BookmarkCard from 'components/BookmarkCard';
import SkeletonCard from 'components/SkeletonCard';

import mq from 'styles/mediaQuery';

const BookmarkList: React.FC = () => {
  const { isLoading, bookmarks } = useGetBookmarks({ isLoggedIn: false });

  const renderBookmarks = () =>
    Object.entries(bookmarks).map(([key, bookmark]) => (
      <CardWrapper>
        <BookmarkCard bookmark={bookmark} key={key} />
      </CardWrapper>
    ));

  const renderSkeleton = () =>
    [...Array(8)].map(i => (
      <CardWrapper>
        <SkeletonCard />
      </CardWrapper>
    ));

  return (
    <Container>{isLoading ? renderSkeleton() : renderBookmarks()}</Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  flex: 1 0 25%;
  ${mq('md')} {
    flex: 1 0 25%;
  }
  ${mq('sm')} {
    flex: 1 0 50%;
  }
  ${mq('xs')} {
    flex: 1 0 100%;
  }
`;

export default BookmarkList;
