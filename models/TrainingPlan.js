const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingPlanSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    fitnessLevel: { type: String, required: true },
    targetMarathonTime: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    workouts: [
      {
        week: { type: Number, required: true },
        day: { type: String, required: true },
        activity: { type: String, required: true },
        duration: { type: Number, required: true },
        distance: { type: Number, required: true },
      },
    ],
  }, {
    timestamps: true,
  });
  
  const TrainingPlan = mongoose.model("TrainingPlan", trainingPlanSchema);
  module.exports = TrainingPlan;
  