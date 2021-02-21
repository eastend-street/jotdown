import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useGetBookmarks } from 'hooks';

import BookmarkSection from './BookmarkSection';
import ActionsSection from './ActionsSection';
import NoteSection from './NoteSection';

const BookmarkDetail = () => {
  const { id }: { id: string } = useParams();
  const { bookmarks } = useGetBookmarks({
    bookmarkId: id,
    isLoggedIn: false,
  });
  const [note, setNote] = useState('');

  useEffect(() => {
    setNote(bookmarks[0]?.note);
  }, [bookmarks]);

  return (
    <Container>
      {bookmarks[0] && <BookmarkSection bookmark={bookmarks[0]} />}
      <NoteSection note={note} onChange={(e: any) => setNote(e.target.value)} />
      <ActionsSection bookmark={bookmarks[0]} />
    </Container>
  );
};

export default BookmarkDetail;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 1rem;
`;
