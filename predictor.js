const synaptic = require('synaptic');

const Trainer = synaptic.Trainer;
const Architect = synaptic.Architect;

let teamL = new Architect.Perceptron(19,19,19);
let teamR = new Architect.Perceptron(19,19,19);
let trainerL  = new Trainer(teamL);
let trainerR  = new Trainer(teamR);

module.exports = {
  teamL: 'l',
  teamR: 'r',

  clear: () => {
    teamL.clear();
    teamR.clear();
  },
  train: function(dataSet) {
    trainerL.train(dataSet);
    trainerR.train(dataSet);
  },
  predict: function(givenL, givenR) {
    return {
      l: teamL.activate(givenL),
      r: teamR.activate(givenR)
    };
  }
};
