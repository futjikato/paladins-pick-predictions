((require, document) => {
  'use strict';

  const {ipcRenderer} = require('electron');
  const givenL = document.querySelectorAll('.Prediction-Left .Prediction-Slot select');
  const givenR = document.querySelectorAll('.Prediction-Right .Prediction-Slot select');

  document.querySelector('.Prediction-Predict').addEventListener('click', () => {
    let data = {
      l: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      r: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
    givenL.forEach((el) => {
      if (!isNaN(el.value)) {
        data.l[parseInt(el.value)] = 1;
      }
    });
    givenR.forEach((el) => {
      if (!isNaN(el.value)) {
        data.r[parseInt(el.value)] = 1;
      }
    });
    ipcRenderer.send('prediction-req', data);
  });

  ipcRenderer.on('prediction-res', (event, res) => {
    givenL.forEach((selectEl) => {
      res.l.forEach((predictVal, key) => {
        selectEl.children[key+1].textContent = selectEl.children[key+1].textContent + predictVal;
      });
    });

    givenR.forEach((selectEl) => {
      res.r.forEach((predictVal, key) => {
        selectEl.children[key+1].textContent = selectEl.children[key+1].textContent + predictVal;
      });
    });
  });
})(require, document);
