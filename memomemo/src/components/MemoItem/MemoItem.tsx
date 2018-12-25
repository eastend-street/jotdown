import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./MemoItem.css";
import getOgpImage from "../../utils/ogpGetter/getOgpImage";

class MemoItem extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card className="MemoItem">
          <CardContent>
            <Typography variant="h5" component="h3">
              This is a card.
            </Typography>
            <Typography component="p">
              Here is a memo. Here is a memo. Here is a memo.
            </Typography>
            <input type="button" value="aaaaaaaaaaaa" onClick={getOgpImage}/>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default MemoItem;
