const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nutritionTipSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
  }, {
    timestamps: true,
  });
  
  const NutritionTip = mongoose.model("NutritionTip", nutritionTipSchema);
  module.exports = NutritionTip;
  