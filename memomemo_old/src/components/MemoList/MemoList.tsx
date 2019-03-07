import * as React from "react";
import Grid from '@material-ui/core/Grid';
import MemoItem from "../MemoItem/MemoItem";
import "./MemoList.css";

class MemoList extends React.Component {
  constructor(props:any ) {
    super(props);
  }
  render() {
    return (
      <div className="MemoList">
        <Grid container={true} spacing={16}>
          <Grid item={true} xs={3}>
            <MemoItem />
          </Grid>
          <Grid item={true} xs={3}>
            <MemoItem />
          </Grid>
          <Grid item={true} xs={3}>
            <MemoItem />
          </Grid>
          <Grid item={true} xs={3}>
            <MemoItem />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MemoList;
