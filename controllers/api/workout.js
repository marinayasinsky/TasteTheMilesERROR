const Workout = require('../../models/Workout');

//This file contains the request handler functions for creating, updating, and deleting workouts. 

async function createWorkout(req, res) {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updateWorkout(req, res) {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteWorkout(req, res) {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedWorkout);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
