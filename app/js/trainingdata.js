((require, $, FileReader) => {
  'use strict';

  const {ipcRenderer} = require('electron');
  const trainingInput = document.querySelector('.TrainingData-File');
  const trainingAdd = document.querySelector('.TrainingData-Add');
  const trainingClean = $('.js-training-clean');
  const trainingList = $('.js-training-list');
  const reader = new FileReader();
  console.log(reader);

  ipcRenderer.on('trainingdata-update', () => {
    console.log('training data updated');
  });

  reader.onload = () => {
    try {
      let json = JSON.parse(reader.result);
      console.log('send', json);
      ipcRenderer.send('trainingdata-add', json);
    } catch (e) {
      console.error(e)
    }
  };

  trainingAdd.addEventListener('click', () => {
    let file = trainingInput.files[0];
    reader.readAsText(file, 'utf-8');
  });

  trainingClean.on('trainingdata.click', () => {
    trainingList.children(':not(.js-training-placeholder)').each((child) => {
      child.remove();
    });
    ipcRenderer.send('trainingdata-clear', {});
  });

  ipcRenderer.on('trainingdata-update', (event, data) => {
    let listEl = $('<li>');
    listEl.text(data.name);
    trainingList.append(listEl);
  });
  //
})(require, jQuery, FileReader);
