import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./MemoItem.css";
// import getOgpImage from "../../utils/ogpGetter/getOgpImage";

class MemoItem extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card className="memo-item">
          <CardContent>
            <Typography variant="h5" component="h3">
              This is a card.
            </Typography>
            <Typography component="p">
              Here is a memo. Here is a memo. Here is a memo.
            </Typography>
          </CardContent>
          <CardMedia
            className="card-media"
            image={require("../../assets/images/hatena_ogp.jpeg")}
            title="hatena ogp"
          />
        </Card>
      </div>
    );
  }
}

export default MemoItem;
