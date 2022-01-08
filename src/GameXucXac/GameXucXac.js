import React, { Component } from 'react';
import GameInfo from './GameInfo';
import './style/style.css';
import XucXac from './XucXac';
import { connect } from 'react-redux';
class GameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-title text-center mt-5 display-4">
          Game Đổ Xúc Xắc
        </div>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btnGame"
            >
              Tài
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btnGame"
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="gameInfo text-center">
          <GameInfo />

          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 mt-5 display-4"
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: 'DAT_CUOC',
        taiXiu,
      };

      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: 'PLAY_GAME'
      })
    },
  };
};
export default connect(null, mapDispatchToProps)(GameXucXac);
