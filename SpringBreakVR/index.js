import React from "react";
import {
  AppRegistry,
  asset,
  Environment,
  NativeModules,
  StyleSheet,
  Text,
  View
} from "react-360";
import InfoButton from "./components/InfoButton";
import Promo from "./components/Promo";
import Events from "./components/Events";
import RockStarBeach from "./components/RockStarBeach";

const SCENES = ["Promo", "Events", "Rockstar Beach"];

class Scene extends React.Component {
  state = {
    scene: ""
  };

  componentDidMount() {
    Environment.setBackgroundImage(asset("spring-break.jpg"), {
      rotateTransform: [{ rotateY: "50deg" }]
    });
  }

  clearMedia() {
    Environment.clearBackground();
  }

  clickHandler(selection) {
    this.setState({
      scene: selection
    });

    this.clearMedia();
  }

  render() {
    const scene = this.state.scene;
    let selection;
    const sceneButtons = [];

    if (scene === "Promo") {
      selection = <Promo />;
    } else if (scene === "Events") {
      selection = <Events />;
    } else if (scene === "Rockstar Beach") {
      selection = <RockStarBeach />;
    }

    for (let i in SCENES) {
      sceneButtons.push(
        <InfoButton
          key={i}
          style={styles.button}
          source={asset("palm-tree.png")}
          text={SCENES[i]}
          onClick={() => {
            this.clickHandler(SCENES[i]);
          }}
        />
      );
    }
    /*   An Experiment to add this tag in component return so a video player is returned....
        <VideoPlayer
          muted={true}
          source={{ url: asset("spi.mp4").uri }}
          stereo={"2D"}
          style={{
            width: 750,
            height: 400
          }}
        />
*/
    return (
      <View style={styles.panel}>
        <View>{selection}</View>
        <View style={styles.section}>{sceneButtons}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 800,
    height: 450,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  section: {
    padding: 10,
    backgroundColor: "#FFE500",
    borderColor: "#ED8B00",
    borderWidth: 5,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    marginLeft: 5,
    marginRight: 5
  }
});

AppRegistry.registerComponent("Scene", () => Scene);
