import React from "react";
import { OverlayView } from "react-google-maps";

export default class GoXOverlay extends React.Component {
  render() {
    return (
      <OverlayView
        position={this.props.location}
        mapPaneName={OverlayView.OVERLAY_LAYER}
      >
        <div>
          <h1>Test Overlay</h1>
        </div>
      </OverlayView>
    );
  }
}
