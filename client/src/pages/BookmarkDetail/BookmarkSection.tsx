import React from 'react';
import styled from 'styled-components';

import { Bookmark } from 'types';
import SampleImage from 'static/images/sample-grey.jpeg';

interface BookmarkSectionProps {
  bookmark: Bookmark;
}

const BookmarkSection: React.FC<BookmarkSectionProps> = ({ bookmark }) => {
  return (
    <div key={bookmark.id}>
      <A target="_blank" href={bookmark.url}>
        <Card>
          <DescriptionSection>
            <Title>{bookmark.title}</Title>
            <Description>{bookmark.description}</Description>
          </DescriptionSection>
          <ThumbnailSection>
            <Thumbnail
              src={bookmark.img_url || SampleImage}
              alt={bookmark.title}
            />
          </ThumbnailSection>
        </Card>
      </A>
    </div>
  );
};

export default BookmarkSection;

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
