import React from "react";
import { asset, Environment, View } from "react-360";

import VideoModule from "VideoModule";

export default class RockStarBeach extends React.Component {
  rockStarBeach = VideoModule.createPlayer("rockstar");

  componentDidMount() {
    this.rockStarBeach.play({
      source: { url: asset("./video/LondonVR.mp4").uri },
      muted: false
    });

    Environment.setBackgroundVideo("rockstar", {
      rotateTransform: [{ rotateY: "180deg" }]
    });
  }

  componentWillUnmount() {
    this.rockStarBeachVideo.destroy();
  }

  render() {
    state = {
      width: 500,
      height: 400
    };
    return <View></View>;
  }
}
