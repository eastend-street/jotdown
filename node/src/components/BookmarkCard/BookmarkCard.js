import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./BookmarkCard.css";

class BookmarkCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          className="media"
          image="https://placehold.jp/800x800.png?text=OGP image"
          title="Qiita"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            Qiita
          </Typography>
          <Typography component="p">
            Qiitaは、プログラマのための技術情報共有サービスです。
            プログラミングに関するTips、ノウハウ、メモを簡単に記録 &
            公開することができます。
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

// stateの中からどの値を子コンポーネントに渡すのかを定義する。
const mapStateToProps = state => ({ bookmarks: state.bookmarks });

// const mapDispatchToProps = { readBookmarks };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(BookmarkCard);
