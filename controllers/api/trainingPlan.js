const TrainingPlan = require('../../models/TrainingPlan');

async function createTrainingPlan(req, res) {
  try {
    const trainingPlan = await TrainingPlan.create(req.body);
    res.status(201).json(trainingPlan);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getTrainingPlan(req, res) {
  try {
    const trainingPlan = await TrainingPlan.findById(req.params.id);
    res.status(200).json(trainingPlan);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createTrainingPlan,
  getTrainingPlan,
};
