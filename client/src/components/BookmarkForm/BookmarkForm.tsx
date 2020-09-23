import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from 'contexts';

import { postBookmark } from 'actions';
import { saveBookmarkToLocal } from 'actions/toLocalStorage';

import { Button, Grid } from '@material-ui/core';
import InputNote from 'components/InputNote';

type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

const BookmarkForm: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const handleSubmit: HandleSubmit = async e => {
    e.preventDefault();
    const bookmark = { note: note, url: url };
    if (!localStorage.getItem('token')) {
      await saveBookmarkToLocal(dispatch, bookmark);
    } else {
      const data = { 0: bookmark };
      await postBookmark(dispatch, data);
    }
    history.push('/');
  };

  const cancel = () => history.push('/');

  return (
    <Grid container justify="center">
      <Grid item xs={11} md={8}>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            type="text"
            placeholder="bookmark URL"
            onChange={e => setUrl(e.target.value)}
          />
          <InputNote note={note} setNote={setNote} />
          <WrapButton>
            <CancelButton variant="contained" onClick={cancel}>
              Cancel
            </CancelButton>
            <SaveButton variant="contained" color="primary" type="submit">
              Save
            </SaveButton>
          </WrapButton>
        </Form>
      </Grid>
    </Grid>
  );
};

const Form = styled.form`
  margin-top: 3rem;
`;

const CancelButton = styled(Button)`
  && {
    margin: 1rem;
    min-width: 7rem;
    box-shadow: none;
    color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.white};
    text-transform: none;
    transition: 0.5s;
    :hover {
      background-color: ${props => props.theme.colors.white};
      opacity: 0.7;
      box-shadow: none;
    }
  }
`;

const SaveButton = styled(Button)`
  && {
    margin: 1rem;
    min-width: 7rem;
    box-shadow: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green};
    text-transform: none;
    transition: 0.5s;
    :hover {
      background-color: ${props => props.theme.colors.green};
      opacity: 0.7;
      box-shadow: none;
    }
  }
`;

const WrapButton = styled.div`
  text-align: right;
`;

const Input = styled.input`
  && {
    box-sizing: border-box;
    border-radius: 0.2rem;
    width: 100%;
    border: none;
    font-size: 1rem;
    padding: 1rem;
    ::placeholder {
      color: #bdbdbd;
    }
    :focus {
      outline: none;
    }
  }
`;

export default BookmarkForm;
