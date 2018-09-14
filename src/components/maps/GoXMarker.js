import React from "react";
import { Marker } from "react-google-maps";

import pin_0 from "../../static/ExecPins/0_Ingram_icon.png";
import pin_1 from "../../static/ExecPins/1_Mullins_icon.png";
import pin_2 from "../../static/ExecPins/2_Fiederer_icon.png";
import pin_3 from "../../static/ExecPins/3_Appel_icon.png";
import pin_4 from "../../static/ExecPins/4_Yielding_icon.png";
import pin_5 from "../../static/ExecPins/5_Pennell_icon.png";
import pin_6 from "../../static/ExecPins/6_Poole_icon.png";
import pin_7 from "../../static/ExecPins/7_Cooper_icon.png";
import pin_8 from "../../static/ExecPins/8_McGuire_icon.png";
import pin_9 from "../../static/ExecPins/9_Nijjar_icon.png";
import pin_10 from "../../static/ExecPins/10_Amjad_icon.png";
import pin_11 from "../../static/ExecPins/11_Ross_iron.png";
import pin_12 from "../../static/ExecPins/12_Raj_icon.png";
import pin_13 from "../../static/ExecPins/13_Ellens_icon.png";
import pin_14 from "../../static/ExecPins/14_Gladu_icon.png";
import pin_15 from "../../static/ExecPins/15_Ellis_icon.png";
import pin_16 from "../../static/ExecPins/16_Anzini_icon.png";

import pin_EasyFinancial from "../../static/StorePins/easyfinancial_Icon.png";
import pin_EasyHome from "../../static/StorePins/easyhome_Icon.png";

export default class GoXMarker extends React.Component {
  getPin(id) {
    if (id == "home") {
      return pin_EasyHome;
    } else if (id == "financial") {
      return pin_EasyFinancial;
    }

    switch (id) {
      case 30:
        return pin_0;
      case 1:
        return pin_1;
      case 2:
        return pin_2;
      case 3:
        return pin_3;
      case 4:
        return pin_4;
      case 5:
        return pin_5;
      case 6:
        return pin_6;
      case 7:
        return pin_7;
      case 8:
        return pin_8;
      case 9:
        return pin_9;
      case 10:
        return pin_10;
      case 11:
        return pin_11;
      case 12:
        return pin_12;
      case 13:
        return pin_13;
      case 14:
        return pin_14;
      case 15:
        return pin_15;
      case 16:
        return pin_16;
    }
  }

  render() {
    if (this.props.state == "active") {
      return (
        <Marker
          position={this.props.location}
          icon={this.getPin(this.props.icon)}
        />
      );
    } else {
      return null;
    }
  }
}
