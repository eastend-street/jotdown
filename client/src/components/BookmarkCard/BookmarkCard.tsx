import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Bookmark } from 'types';

import SampleImage3d5467 from 'static/images/sample-#3d5467.png';
import SampleImage686963 from 'static/images/sample-#686963.png';
import SampleImage8aa29e from 'static/images/sample-#8aa29e.png';

type BookmarkCardProps = {
  bookmark: Bookmark;
};

const BookmarkCard: React.FC<BookmarkCardProps> = ({ bookmark }) => {
  const sampleImageList = [
    SampleImage3d5467,
    SampleImage686963,
    SampleImage8aa29e,
  ];

  const randomNum = Math.floor(Math.random() * sampleImageList.length);
  return (
    <Container>
      <A target="_blank" href={bookmark.url}>
        <Thumbnail
          src={bookmark.img_url || sampleImageList[randomNum]}
          alt={bookmark.title}
        />
        <Title>{bookmark.title}</Title>
      </A>
      <StyledHr />
      <Note>{bookmark.note}</Note>
      <Actions>
        <StyledLink to={`/${bookmark.id}`}>
          <SeeMore>See more</SeeMore>
        </StyledLink>
      </Actions>
    </Container>
  );
};

export default BookmarkCard;

const Container = styled.div`
  background-color: #fff;
  box-shadow: none;
  height: auto;
  position: relative;
  margin: 0.5rem;
`;

const A = styled.a`
  display: block;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

const Thumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 14rem;
`;

const Title = styled.p`
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  min-height: 3rem;
  padding: 0.5rem;
`;

const Note = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin: 0.5rem 1rem;
`;

const StyledHr = styled.hr`
  border: 0.05rem solid #f5f5f5;
  margin: 0rem 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Actions = styled.div`
  padding: 0 0.5rem;
  display: flex;
  justify-content: flex-end;
`;

const SeeMore = styled.div`
  display: block;
  margin: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.green};
  font-size: 0.8rem;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
