import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3}>
        <Image
          resizeMode="cover"
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Recomended_Product_Banner_0rmQVFk.png"
          }}
          style={styles.Image_5}
        />
        <Input
          placeholder="Type an item to search"
          value=""
          editable={true}
          textStyle={{
            fontSize: 12,
            color: "#000000",
            textAlign: "left",
            fontWeight: "normal",
            fontStyle: "normal"
          }}
          style={styles.Input_7}
        />
        <View style={styles.View_11}>
          <View style={styles.View_12}>
            <Image
              resizeMode="cover"
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/p1_xBcMKKH.png"
              }}
              style={styles.Image_15}
            />
            <Text style={styles.Text_21}>Product 1</Text>
            <Text style={styles.Text_47}>$299</Text>
          </View>
          <View style={styles.View_13}>
            <Image
              resizeMode="cover"
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/p1_xBcMKKH.png"
              }}
              style={styles.Image_19}
            />
            <Text style={styles.Text_43}>Product 2</Text>
            <Text style={styles.Text_53}>$199</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
