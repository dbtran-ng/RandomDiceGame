const stateDefault = {
  taiXiu: false,
  arrayXucXac: [
    { ma: 1, hinhAnh: './img/1.png' },
    { ma: 1, hinhAnh: './img/1.png' },
    { ma: 4, hinhAnh: './img/4.png' },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const XucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'DAT_CUOC': {
      state.taiXiu = action.taiXiu;
      return { ...state };
    }
    case 'PLAY_GAME': {
      let arrayRandom = [];
      for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let xucXacRandom = {
          ma: randomNumber,
          hinhAnh: `./img/${randomNumber}.png`,
        };
        arrayRandom.push(xucXacRandom);
      }

      state.arrayXucXac = arrayRandom;
      state.tongSoBanChoi += 1;

      let tongSoDiem = arrayRandom.reduce((totalPoint, xucXac, index) => {
        return (totalPoint += xucXac.ma);
      }, 0);

      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default XucXacReducer;
