import React, { Component } from "react";
import "./storeMenu.css";

import logo from "../../static/goXtour_logo.png";

let ab = {};
let bc = {};
let mb = {};
let nb = {};
let nl = {};
let ns = {};
let on = {};
let pe = {};
let qc = {};
let sk = {};

class StoreMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      execsData: this.props.execsData,
      storesData: this.props.storesData
    };

    this.loadStoreData();
  }

  handleClick(id) {
    this.props.changeTag(id);
    this.props.displayStore(id);
  }

  loadStoreData() {
    console.log(this.state.execsData.execs);

    for (var j = 0; j < this.state.execsData.execs.length; j++) {
      var exec = this.state.execsData.execs[j];
      if (exec.stores.length > 0) {
        for (var k = 0; k < exec.stores[0].length; k++) {
          var storeID = exec.stores[0][k];
          for (var i = 0; i < this.state.storesData.stores.length; i++) {
            var store = this.state.storesData.stores[i];
            if (store.Id == storeID) {
              switch (store.Province) {
                case "AB":
                  ab[store.Id] = exec.id;
                  break;
                case "BC":
                  bc[store.Id] = exec.id;
                  break;
                case "MB":
                  mb[store.Id] = exec.id;
                  break;
                case "NB":
                  nb[store.Id] = exec.id;
                  break;
                case "NL":
                  nl[store.Id] = exec.id;
                  break;
                case "NS":
                  ns[store.Id] = exec.id;
                  break;
                case "ON":
                  on[store.Id] = exec.id;
                  break;
                case "PE":
                  pe[store.Id] = exec.id;
                  break;
                case "QC":
                  qc[store.Id] = exec.id;
                  break;
                case "SK":
                  sk[store.Id] = exec.id;
                  break;
              }
            }
          }
        }
      }
    }
  }

  renderStoreList(province) {
    return Object.keys(province).map(key => (
      <a
        key={key}
        onClick={() => {
          this.handleClick(province[key]);
        }}
      >
        {key}
        &emsp;
      </a>
    ));
  }

  render() {
    return (
      <div className="container-menu">
        <div className="menu-top">
          <img className="image-top" src={logo} alt="" />
        </div>
        <div className="menu-main">
          <div className="provinceTitle">Alberta</div>
          <div className="storeLabel">{this.renderStoreList(ab)}</div>
          <div className="provinceTitle">British Columbia</div>
          <div className="storeLabel">{this.renderStoreList(bc)}</div>
          <div className="provinceTitle">Manitoba</div>
          <div className="storeLabel">{this.renderStoreList(mb)}</div>
          <div className="provinceTitle">New Brunswick</div>
          <div className="storeLabel">{this.renderStoreList(nb)}</div>
          <div className="provinceTitle">Newfoundland and Labrador</div>
          <div className="storeLabel">{this.renderStoreList(nl)}</div>
          <div className="provinceTitle">Nova Scotia</div>
          <div className="storeLabel">{this.renderStoreList(ns)}</div>
          <div className="provinceTitle">Ontario</div>
          <div className="storeLabel">{this.renderStoreList(on)}</div>
          <div className="provinceTitle">Prince Edward Island</div>
          <div className="storeLabel">{this.renderStoreList(pe)}</div>
          <div className="provinceTitle">Quebec</div>
          <div className="storeLabel">{this.renderStoreList(qc)}</div>
          <div className="provinceTitle">Saskatchewan</div>
          <div className="storeLabel">{this.renderStoreList(sk)}</div>
        </div>
      </div>
    );
  }
}

export default StoreMenu;
