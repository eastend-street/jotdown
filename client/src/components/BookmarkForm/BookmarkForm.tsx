import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { postBookmark } from "actions";
import { saveBookmarkToLocal } from "actions/toLocalStorage";

import { Button, Grid } from "@material-ui/core";
import InputNote from "components/parts/InputNote/InputNote";

const BookmarkForm = () => {
  const [url, setUrl] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const history = useHistory();

  const handleSubmit = async () => {
    const bookmark = { note: note, url: url };
    if (!localStorage.getItem("token")) {
      await saveBookmarkToLocal(bookmark);
    } else {
      const data = { 0: bookmark };
      await postBookmark(data);
    }
    history.push("/");
  };

  const cancel = () => history.push("/");

  return (
    <Grid container justify="center">
      <Grid item xs={11} md={8}>
        <Form>
          <Input
            type="text"
            placeholder="bookmark URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <InputNote note={note} setNote={setNote} />
          <WrapButton>
            <CancelButton variant="contained" onClick={cancel}>
              Cancel
            </CancelButton>
            <SaveButton
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
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
    color: ${(props) => props.theme.colors.green};
    background-color: ${(props) => props.theme.colors.white};
    text-transform: none;
    transition: 0.5s;
    :hover {
      background-color: ${(props) => props.theme.colors.white};
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
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.green};
    text-transform: none;
    transition: 0.5s;
    :hover {
      background-color: ${(props) => props.theme.colors.green};
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
