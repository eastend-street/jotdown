import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetBookmarks } from 'hooks';

import Button from 'components/Button';

// import MarkdownTabs from 'components/parts/MarkdownTabs/MarkdownTabs';
import SampleImage from 'static/images/sample-grey.jpeg';

const BookmarkDetail = () => {
  const { id }: { id: string } = useParams();
  const { isLoading, bookmarks } = useGetBookmarks({
    bookmarkId: id,
    isLoggedIn: false,
  });
  const [note, setNote] = useState({});

  useEffect(() => {
    console.log('bookmarks[0]', bookmarks[0]);
    setNote(bookmarks[0]?.note);
  }, [bookmarks]);

  const renderBookmark = () => {
    if (!bookmarks[0]) return;
    return (
      <div key={bookmarks[0].id}>
        <A target="_blank" href={bookmarks[0].url}>
          <Card>
            <DescriptionSection>
              <Title>{bookmarks[0].title}</Title>
              <Description>{bookmarks[0].description}</Description>
            </DescriptionSection>
            <ThumbnailSection>
              <Thumbnail
                src={bookmarks[0].img_url || SampleImage}
                alt={bookmarks[0].title}
              />
            </ThumbnailSection>
          </Card>
        </A>
        {/* <MarkdownTabs note={note} mode="edit" /> */}
      </div>
    );
  };

  return (
    <Container>
      {renderBookmark()}
      <Actions>
        <DeleteButton onClick={() => {}}>Delete</DeleteButton>
        <div>
          <CancelButton onClick={() => {}}>Cancel</CancelButton>
          <SaveButton type="submit" onClick={() => {}}>
            Save
          </SaveButton>
        </div>
      </Actions>
    </Container>
  );

  // const onSubmit = async (values) => {
  //   const id = this.props.match.params.id;
  //   if (localStorage.getItem('token') != null) {
  //     await this.props.putBookmark(id, values);
  //   } else {
  //     const data = await this.props.putBookmarkToLocal(id, values);
  //     localStorage.setItem('bookmarks', JSON.stringify(data.bookmarks));
  //   }
  //   this.props.history.push('/');
  // };

  // const cancel = () => {
  //   this.props.history.push('/');
  // };

  // const deleteBookmark = async () => {
  //   const id = this.props.match.params.id;
  //   if (localStorage.getItem('token') !== null) {
  //     await this.props.deleteBookmark(id);
  //   } else {
  //     await this.props.deleteBookmarkFromLocal(id);
  //   }
  //   this.props.history.push('/');
  // };
};

export default BookmarkDetail;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 1rem;
`;

const A = styled.a`
  display: block;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

const Card = styled.div`
  background-color: white;
  box-shadow: none;
  display: flex;
`;

const DescriptionSection = styled.div`
  flex: 1 0 55%;
  padding: 1rem;
`;

const Title = styled.p`
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  padding: 1rem;
`;

const ThumbnailSection = styled.div`
  flex: 1 0 45%;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  height: auto;
  max-width: 100%;
`;

const Actions = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled(Button)`
  width: 8rem;
  background-color: ${(props) => props.theme.colors.red};
  @media (max-width: 600px) {
    width: 100%;
    color: ${(props) => props.theme.colors.red};
    background-color: transparent;
  }
`;

const CancelButton = styled(Button)`
  width: 8rem;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.white};
  margin-right: 1rem;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SaveButton = styled(Button)`
  width: 8rem;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
