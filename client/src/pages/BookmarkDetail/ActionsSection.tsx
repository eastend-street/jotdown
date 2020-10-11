import React from 'react';
import styled from 'styled-components';

import Button from 'components/shared/Button';

const ActionsSection = () => {
  return (
    <Container>
      <DeleteButton onClick={() => {}}>Delete</DeleteButton>
      <div>
        <CancelButton onClick={() => {}}>Cancel</CancelButton>
        <SaveButton type="submit" onClick={() => {}}>
          Save
        </SaveButton>
      </div>
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

export default ActionsSection;

const Container = styled.div`
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
