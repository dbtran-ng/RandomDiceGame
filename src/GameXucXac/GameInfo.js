import React, { Component } from 'react';
import {connect} from 'react-redux'
class GameInfo extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN: <span className="text-success">
              {this.props.taiXiu ? 'TÀI' : 'XỈU'}
          </span>
        </div>
        <div className="display-4">
          BÀN THẮNG: <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI: <span className="text-success">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        taiXiu: state.XucXacReducer.taiXiu,
        soBanThang: state.XucXacReducer.soBanThang,
        tongSoBanChoi: state.XucXacReducer.tongSoBanChoi
    }
}
export default connect(mapStateToProps)(GameInfo)